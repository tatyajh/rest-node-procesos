//importar modulos
var express = require("express");
var bodyParser = require("body-parser");
var routesProfes = require("./rutas/rutasProfesor");
var routesCursos = require("./rutas/rutasCursos");
var routesCursoXProfesor = require("./rutas/rutasCursoXProfesor");
//llmar instancia de express
//permite ahorrarnos la parte de configuración del servidor
var app = express();
//asiganar puerto
//app.listen(4242,function(){
  //  console.log("Puerto 4242 escuchando");
//});

//express que use el bodyparser
//asignar la ruta donde debe estar el bodyparser
app.use(bodyParser.urlencoded({estend: true}));
app.use(function(req, res, next) {	
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

var port = process.env.PORT || 5000;
//en todas las direcciones invoque el metodo rut
app.use('/Profesor',routesProfes);
app.use('/Cursos',routesCursos);
app.use('/cursoXProfesor',routesCursoXProfesor);

app.listen(port, function() {
  console.log('Node Server Running in the port:'+port);
});
