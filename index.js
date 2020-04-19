const express = require("express");
const app = express();

app.get('/', function (req, res) {
res.send('La conexión con el servidor fue realizado correctamente...')
});

app.post('/prueba', function (req, res) {
  res.send('[POST]Ejecutando pruebas POST...');
});

app.get('/prueba', function (req, res) {
  res.send('[GET]Ejecución de pruebas GET....');
});

app.listen(3000, () => {
	console.log("El servidor esta iniciando en el puerto 3000");
});