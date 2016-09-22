var os = require('os');
module.exports={
    RemoveDuplicate:function(array){
        //array 去掉重复
        var arr=[];
        array.map(function(obj){
            if(!arr.includes(obj)){
                arr.push(obj);
            }
        });
        return arr;
    },
    each:function(arr,cb){
        arr.map(function(obj){
            cb(obj);
        });
    }
}