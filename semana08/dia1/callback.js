
function hola(nombre,micallback){
    setTimeout(function (){
        console.log('Hola ' + nombre);
        micallback(nombre);
    },1000);
}

function adios(nombre,otrocallbak){
    setTimeout(function(){
        console.log('Adios ',nombre);
        otrocallbak();
    },1500);
}

console.log('Iniciando proceso ... ');

hola('César',function (nombre){
    adios(nombre,function (){
        console.log('Terminado proceso ... ');
    });
});
