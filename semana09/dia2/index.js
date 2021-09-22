const express = require('express');
const path = require('path');
const app = express();

app.set('port',process.env.PORT || 3000);

//archivos estaticos
app.use(express.static(path.join(__dirname,'public')));


const server = app.listen(app.get('port'),() =>{
    console.log(`servidor : http://localhost:${app.get("port")}`);
})

//creación de socket
const SocketIO = require('socket.io');

const io = SocketIO(server);

io.on('connection',(socket) =>{
    console.log("nueva conexion",socket.id);

    socket.on('chat:message',(data)=>{
        console.log(data);
        io.sockets.emit('chat:message',data);
    });

});

