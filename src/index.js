import './index.css';
import * as serviceWorker from './serviceWorker';
import d3 from "d3";
import $ from 'jquery';
import convert from 'xml-js'
import MinimosCuadrados from './MinimosCuadrados';
window.d3 = d3;
const functionPlot = require("function-plot");
const root = document.querySelector("#root");
const input = document.querySelector("#file");
let x = [];
let y = [];
let pfinal;
let options = {
    target: root,
    title: 'Proyecto Admin',
    width: 1000,
    height: 680,
    yAxis: {
        label: 'y - axis',
        domain: [-6, 6]
    },
    xAxis: {
        label: 'x - axis',
        domain: [-6, 6]
    },
    tip: {
        xLine: true,
        yLine: true,
        renderer: function () {}
    },
    grid: true,
    data: []
}
functionPlot(options);

$('#update').click(() => {
    // var favorite = [];
    // $.each($("input[name='sport']:checked"), function () {
    //     favorite.push($(this).val());
    // });
    // let n13 = $('#13').val();
    // let n20 = $('#20').val();
    // let n23 = $('#23').val();
    // let n24 = $('#24').val();
    // favorite.push([n13, n20, n23, n24]);
    let n = parseInt($('#2').val(), 10);
    let mc = new MinimosCuadrados(x, y);
    let resuelto = mc.resolver(n);
    dibujarFuncion(resuelto);

});

input.addEventListener('change', (e) => {
    const tipoArchivo = input.files[0].name.split(".")[1];
    console.log(tipoArchivo);
    const reader = new FileReader();
    reader.onload = function () {
        let archivo = reader.result;
        let points = [];
        if (tipoArchivo === "json") {
            let objeto = JSON.parse(archivo);
            for (let i = 0; i < objeto.x.length; i++) {
                points.push([objeto.x[i], objeto.y[i]]);
            }

        } else if (tipoArchivo === "csv") {
            points = archivo.split("\n").map((linea) => {
                if (linea) {
                    return [Number(linea.split(",")[0]), Number(linea.split(",")[1])];
                }
            }).filter((value) => {
                return value;
            });
        } else if (tipoArchivo === "txt") {
            points = archivo.split("\n").map((linea) => {
                if (linea) {
                    return [Number(linea.split(" ")[0]), Number(linea.split(" ")[1])];
                }
            }).filter((value) => {
                return value;
            });
        } else if (tipoArchivo === "xml") {
            let objXML = convert.xml2js(archivo, {
                spaces: 0,
                compact: true,
                nativeType: true
            });
            let xArr = [];
            let yArr = [];
            for (let x of objXML.puntos.x.item) {
                xArr.push(x._text);
            }
            for (let y of objXML.puntos.y.item) {
                yArr.push(y._text);
            }
            for (let i = 0; i < xArr.length; i++) {
                points.push([xArr[i], yArr[i]]);
            }

        } else {
            console.log("basta");
        }
        x = points.map((arr) => {
            return arr[0];
        });
        y = points.map((arr) => {
            return arr[1];
        });
        pfinal = points;
    }
    reader.readAsText(input.files[0]);

}, false);

function dibujarPuntos(arr) {
    options.data[0] = {
        fnType: 'points',
        points: arr,
        graphType: 'scatter',
        color: "red",
        updateOnMouse: true,
    }
    functionPlot(options);
}

function dibujarFuncion(arr) {
    let funcion = "";
    let coef;
    for (let i = 0; i < arr.length; i++) {
        coef = arr[i];
        funcion += `${coef}x^${i}+`;
    }
    funcion = funcion.substring(0, funcion.length - 1);
    console.log(`************** ${funcion} **************`);
    functionPlot({
        target: root,
        title: 'Proyecto Admin',
        width: 1000,
        height: 680,
        yAxis: {
            label: 'y - axis',
            domain: [-6, 6]
        },
        xAxis: {
            label: 'x - axis',
            domain: [-6, 6]
        },
        tip: {
            xLine: true,
            yLine: true,
            renderer: function () {}
        },
        grid: true,
        data: [{
            fn: funcion
        }, {
            points: pfinal,
            fnType: 'points',
            graphType: 'scatter'
        }]
    });


}
serviceWorker.unregister();