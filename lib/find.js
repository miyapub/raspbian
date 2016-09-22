var os = require('os');
var net = require('net');
var getlocalhost = require('./base/getlocalhost');
var getsegments = require('./base/getsegments');
var array = require('./base/array');
var scanner = require('./base/scanner');
var getFullIpListFromSegment = require('./base/getfulliplistfromsegment');
module.exports = function () {
    var ip_list = getlocalhost();//获得 本机 ip 地址
    var segments = getsegments(ip_list);//获得 网段
    segments = array.RemoveDuplicate(segments);//去重复
    var target_ip_arr = getFullIpListFromSegment(segments);//得到全网段的所有ip
    array.each(target_ip_arr, function (ip) {
        scanner(ip, 22, function (data) {
            if (data.toLowerCase().includes('raspbian')) {
                console.log(ip);
            }
        });
    });
}