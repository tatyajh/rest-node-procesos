var express = require('express');
var router = express.Router();
var db= require('../consultas/cursoXProfesor');

//asignar a cada ruta los metodos de la bd
router.get('/obtener',db.getAllcursoXProfesor);
router.post('/crear', db.createcursoXProfesor);
router.delete('/eliminar/:idProfesor/:idCurso',db.removecursoXProfesor);
router.put('/actualizar/:idProfesor/:idCurso', db.updatecursoXProfesor);
//exportar modulo par aqu elo pueda leer
module.exports=router;