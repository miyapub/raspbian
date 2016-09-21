var options = process.argv;
var find = require ('./find.js');
if(options.includes('-find')){
    find.find();
}