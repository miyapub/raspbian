var os = require('os');
module.exports=function(ip_list){
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
}