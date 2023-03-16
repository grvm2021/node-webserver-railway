const http = require('http');
http.createServer( ( req, res ) => {
 
    res.write( 'Hola Mundo');
    res.end(); // para avisar a node que se terminó escribir
               // respuesta
})
.listen( 8080 ); // es el puerto tradicional de pruebas web
console.log('Escuchando el puerto', 8080);
