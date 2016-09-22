module.exports = {
    on:function(io){
        console.log('on',io);
    },
    off:function(io){
        console.log('off',io);
    }
}