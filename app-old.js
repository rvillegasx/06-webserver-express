const http = require('http');

http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});

    let salida = {
        nombre: 'Roberto',
        edad: 52,
        url: req.url
    }
    res.write( JSON.stringify( salida ));
    res.end();
})
.listen(4200);

console.log('Escuchando el puerto 4200');