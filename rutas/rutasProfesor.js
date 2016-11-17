var express = require('express');
var router = express.Router();
var db= require('../consultas/profesor');

//asignar a cada ruta los metodos de la bd
router.get('/obtener',db.getAllProfesores);
router.post('/crear', db.createProfesor);
router.delete('/eliminar/:cedula',db.removeProfesor);
router.put('/actualizar/:cedula', db.updateProfesor);
//exportar modulo par aqu elo pueda leer
module.exports=router;