import './index.css';
import * as serviceWorker from './serviceWorker';
import d3 from "d3";
import $ from 'jquery';
import convert from 'xml-js'
window.d3 = d3;
const functionPlot = require("function-plot");
const root = document.querySelector("#root");
const input = document.querySelector("#file");
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
        domain: [-15, 15]
    },
    tip: {
        xLine: true, // dashed line parallel to y = 0
        yLine: true,
        renderer: function () {}
    },
    grid: true,
    data: []
}
functionPlot(options);

$('#update').click(function () {
    var favorite = [];
    $.each($("input[name='sport']:checked"), function(){            
        favorite.push($(this).val());
    });
    alert("My favourite sports are: " + favorite.join(", "));
    functionPlot(options);
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
            }).filter((value)=>{
                return value;
            });
        } else if (tipoArchivo === "txt") {
            points = archivo.split("\n").map((linea) => {
                if (linea) {
                    return [Number(linea.split(" ")[0]), Number(linea.split(" ")[1])];
                }
            }).filter((value)=>{
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
        console.log({
            points
        });

        dibujarPuntos(points);
    }
    reader.readAsText(input.files[0])

}, false);

function dibujarPuntos(arr) {
    options.data[0] = {
        fnType: 'points',
        points: arr,
        graphType: 'scatter',
        color: "red",
    }
    functionPlot(options);
}
serviceWorker.unregister();