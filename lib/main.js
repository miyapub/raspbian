#!/usr/bin/env node
var options = process.argv;
var find = require('./find');
var scan = require('./scan');
var gpio = require('./gpio');
//console.log('options', options);

if (options.length === 2) {
    console.log('raspbian 一款树莓派的工具集');
    console.log('-help 获得帮助');
}
if (options.includes('-help') || options.includes('-h')) {
    console.log('-find 查找所在网段的树莓派');
    console.log('-scan 发现所在网段的端口服务');
}
if (options.includes('-find')) {
    find();
}
if (options.includes('-scan')) {
    
    if (options.length === 3) {
        scan();
    }
    if (options.length === 4) {
        var param = options[3];
        if(isNaN(parseInt(param))){
            //not num、ip
            //string
        }else{
            //
            if((parseInt(param)+'').length===param.length){
                //number port
                scan('all',param);
            }else{
                //string ip
                scan(param);
            }
        }
    }
    // ip and port
    if (options.length === 5) {
        var ip = options[3];
        var port = options[4];
        scan(ip,port);
    }

}

if (options.length === 4) {
    var param = options[3];
    if (options.includes('-on')) {
        gpio.on(param);
    }
    if (options.includes('-off')) {
        gpio.off(param);
    }
}

