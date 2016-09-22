var os = require('os');
var net = require('net');
module.exports = function (ip, port,cb) {
    var client = new net.Socket();
    client.on('error', function (err) {
        this.destroy();
    });
    client.on('data', function (data) {
        cb(data+'');
        client.destroy();
    });
    client.on('close', function () {
    });
    client.connect(port, ip, function () {
        client.write('.');
    });
    setTimeout(function () {
        client.destroy();
    }, 3000);
}