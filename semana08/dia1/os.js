const os = require('os');

console.log(os.arch());
console.log(os.platform());
console.log(os.cpus().length);
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.hostname());
//console.log(os.networkInterfaces());

const SIZE = 1024;
function kb(bytes) { return bytes / SIZE}
function mb(bytes) { return kb(bytes) / SIZE}
function gb(bytes) { return mb(bytes) / SIZE}
console.warn("MEMORIA RAM : " + os.totalmem);
console.log("EN KB : " + kb(os.totalmem()));
console.log("EN MB : " + mb(os.totalmem()));
console.log("EN GB : " + gb(os.totalmem()));
console.table([{capacidad : 'KB',tam:kb(os.totalmem())},{capacidad : 'MB',
tam:mb(os.totalmem())},{capacidad : 'GB',tam:gb(os.totalmem())}]);
