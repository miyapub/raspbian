var os = require('os');
var net = require('net');
exports.find=function(){
        var ip_list=(function(){
        var ip_arr=[];
        var ifaces = os.networkInterfaces();
        //console.log(ifaces);
        for (var dev in ifaces) {
            //console.log(ifaces[dev]);
            var items = ifaces[dev];
            for (var item in items) {
                if (items[item].netmask === '255.255.255.0') {
                    var ip=items[item].address;
                    ip_arr.push(ip);
                }
            }
        }
        
        return ip_arr;
    })();

    var segments=(function(ip_list){
        var segments=[];
        ip_list.map(function(ip){
            
            var ip = ip.split('.');
            var segment = '';
            for (i = 0; i < 3; i++) {
                segment += ip[i] + '.';
            }
            segments.push(segment);
        }); 
        return segments;
    })(ip_list);

    segments=(function(array){
        //array 去掉重复
        var arr=[];
        array.map(function(obj){
            if(!arr.includes(obj)){
                arr.push(obj);
            }
        });
        return arr;
    })(segments);

    var target_ip_arr=(function(segments){
        var target_ip_arr=[];
        segments.map(function(segment){
            for (i = 1; i < 255; i++) {
                var ip = segment + i;
                target_ip_arr.push(ip);
            }
            
        });
        return target_ip_arr;
    })(segments);

    (function(target_ip_arr){
        var ports=[22];
        target_ip_arr.map(function(ip){
            (function(ip){
                ports.map(function(port){
                    (function(ip,port){
                        var client = new net.Socket();
                        client.on('error', function (err) {
                            this.destroy();
                        });
                        client.on('data', function (data) {
                            if((data+'').toLowerCase().includes('raspbian')){
                                console.log(ip);
                            }
                            client.destroy();
                        });
                        client.on('close', function () {
                        });
                        client.connect(port, ip, function () {
                            client.write('.');
                        });
                        setTimeout(function() {
                            client.destroy();
                        }, 3000);
                    })(ip,port);
                });
            })(ip);
        });
    })(target_ip_arr);
}