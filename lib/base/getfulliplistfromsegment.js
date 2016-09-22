var os = require('os');
module.exports = function (segments) {
    var target_ip_arr = [];
    segments.map(function (segment) {
        for (i = 1; i < 255; i++) {
            var ip = segment + i;
            target_ip_arr.push(ip);
        }
    });
    return target_ip_arr;
}