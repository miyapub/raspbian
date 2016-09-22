var os = require('os');
var net = require('net');
var getlocalhost = require('./base/getlocalhost');
var getsegments = require('./base/getsegments');
var array = require('./base/array');
var scanner = require('./base/scanner');
var getFullIpListFromSegment = require('./base/getfulliplistfromsegment');
var ip_list = getlocalhost();//获得 本机 ip 地址
var segments = getsegments(ip_list);//获得 网段
segments = array.RemoveDuplicate(segments);//去重复
var target_ip_arr = getFullIpListFromSegment(segments);//得到全网段的所有ip
var ports = [21, 22, 80, 8080, 3389];
module.exports = function (_ip, _port) {
    if (_ip && !_port) {
        array.each(ports, function (port) {
            scanner(_ip, port, function (data) {
                console.log(_ip, port, data);
            });
        });
    }

    if (_ip && _port) {
        if (_ip === 'all') {
            array.each(target_ip_arr, function (ip) {

                scanner(ip, _port, function (data) {
                    console.log(ip, _port, data);
                });

            });
        } else {
            scanner(_ip, _port, function (data) {
                console.log(_ip, _port, data);
            });
        }

    }
    if (!_port && !_ip) {


        array.each(target_ip_arr, function (ip) {
            array.each(ports, function (port) {
                scanner(ip, port, function (data) {
                    console.log(ip, port, data);
                });
            });
        });
    }
}