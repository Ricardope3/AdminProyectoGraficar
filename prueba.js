let string = "sys_fork,[SYS_exit]    sys_exit,[SYS_wait]    sys_wait,[SYS_pipe]    sys_pipe,[SYS_read]    sys_read,[SYS_kill]    sys_kill,[SYS_exec]    sys_exec,[SYS_fstat]   sys_fstat,[SYS_chdir]   sys_chdir,[SYS_dup]     sys_dup,[SYS_getpid]  sys_getpid,[SYS_sbrk]    sys_sbrk,[SYS_sleep]   sys_sleep,[SYS_uptime]  sys_uptime,[SYS_open]    sys_open,[SYS_write]   sys_write,[SYS_mknod]   sys_mknod,[SYS_unlink]  sys_unlink,[SYS_link]    sys_link,[SYS_mkdir]   sys_mkdir,[SYS_close]   sys_close,[SYS_shutdown]   sys_shutdown,[SYS_reboot]   sys_reboot,[SYS_setpriority]   sys_setpriority,[SYS_getpriority]   sys_getpriority,";

console.log(string.split(/[\s,]+/).filter(string => string[0]!=="[").join(","));

let arr = [ "sys_fork",
"sys_exit",
"sys_wait",
"sys_pipe",
"sys_read",
"sys_kill",
"sys_exec",
"sys_fstat",
"sys_chdir",
"sys_dup",
"sys_getpid",
"sys_sbrk",
"sys_sleep",
"sys_uptime",
"sys_open",
"sys_write",
"sys_mknod",
"sys_unlink",
"sys_link",
"sys_mkdir",
"sys_close",
"sys_shutdown",
"sys_reboot",
"sys_setpriority",
"sys_getpriority",
]

console.log(arr.length)
