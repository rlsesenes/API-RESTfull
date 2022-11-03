var express = require('express');
var app = express();
const path = require('path');
app.use(express.json());
app.use(express.urlencoded());

app.get('/', function (req, res) {
   res.send("Hola");
});

app.listen(8000, function () {
   console.log('Servidor corriendo en el puerto 8000');
});
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/html/index.html'));
 });
 