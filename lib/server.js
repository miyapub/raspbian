var http = require('http');
var getLocalhost = require('./base/getlocalhost')
module.exports = function (port) {
    http.createServer(function (request, response) {
        console.log(request);
        var headers = request.headers;
        var userAgent = headers['user-agent'];
        var referer = headers['referer'];
        
        // 发送 HTTP 头部 
        // HTTP 状态值: 200 : OK
        // 内容类型: text/plain
        response.writeHead(200, { 'Content-Type': 'text/plain' });

        // 发送响应数据 "Hello World"
        
        var out = JSON.stringify({a:0}, null, 4);
        response.end(out);
    }).listen(port);

    // 终端打印如下信息
    console.log('Server running at http://' + getLocalhost()[0] + ':' + port);
}