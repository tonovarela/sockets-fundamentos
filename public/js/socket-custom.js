var socket = io();

//Escuchar eventos
socket.on('connect', function () {
    console.log("Conectando al servidor")
});
socket.on('disconnect', function () {
    console.log("Se perdio la conexion con el servidor")
});
//Son para enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'varela',
    mensaje: 'Hola mundo'
},function(resp){
    console.log("Respuesta Server: ",resp);
});
//Escuchando la informacion
socket.on('enviarMensaje',function(mensaje){
  console.log("Servidor: ",mensaje);
});