// import { xml2js } from "xml-js";

// let string = "sys_fork,[SYS_exit]    sys_exit,[SYS_wait]    sys_wait,[SYS_pipe]    sys_pipe,[SYS_read]    sys_read,[SYS_kill]    sys_kill,[SYS_exec]    sys_exec,[SYS_fstat]   sys_fstat,[SYS_chdir]   sys_chdir,[SYS_dup]     sys_dup,[SYS_getpid]  sys_getpid,[SYS_sbrk]    sys_sbrk,[SYS_sleep]   sys_sleep,[SYS_uptime]  sys_uptime,[SYS_open]    sys_open,[SYS_write]   sys_write,[SYS_mknod]   sys_mknod,[SYS_unlink]  sys_unlink,[SYS_link]    sys_link,[SYS_mkdir]   sys_mkdir,[SYS_close]   sys_close,[SYS_shutdown]   sys_shutdown,[SYS_reboot]   sys_reboot,[SYS_setpriority]   sys_setpriority,[SYS_getpriority]   sys_getpriority,";

// console.log(string.split(/[\s,]+/).filter(string => string[0]!=="[").join(","));

// let arr = [ "sys_fork",
// "sys_exit",
// "sys_wait",
// "sys_pipe",
// "sys_read",
// "sys_kill",
// "sys_exec",
// "sys_fstat",
// "sys_chdir",
// "sys_dup",
// "sys_getpid",
// "sys_sbrk",
// "sys_sleep",
// "sys_uptime",
// "sys_open",
// "sys_write",
// "sys_mknod",
// "sys_unlink",
// "sys_link",
// "sys_mkdir",
// "sys_close",
// "sys_shutdown",
// "sys_reboot",
// "sys_setpriority",
// "sys_getpriority",
// ]

// console.log(arr.length)
// let x = [];
// let y = [];
// for(let i = -5 ; i<6;i = i+= 0.5){
//     x.push(i + Math.random());
//     y.push(Math.pow(i,3)+Math.random());
// }
// console.log(x);
// console.log(y);

let str = "";

for(let i = 0.1 ;i<5;i+=0.25){
    str+=Math.round( i * 10 ) / 10;;
    let y = Math.log(i);
    y = Math.round( y * 10 ) / 10;
    str+=` ${y}\n`
}
console.log(str);


// let strx = "";
// let stry = "";
// let start = "<item>";
// let end = "</item>";
// for(let i = -3;i<2;i+=0.3){
//     strx+=start+i+end+"\n";
//     let y = Math.sin(i);
//     stry +=start+y+end+"\n";
// }
// console.log(strx);
// console.log(stry);
