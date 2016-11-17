var express = require('express');
var router = express.Router();
var db= require('../consultas/cursos');

//asignar a cada ruta los metodos de la bd
router.get('/obtener',db.getAllCursos);
router.post('/crear', db.createCurso);
router.delete('/eliminar/:id',db.removeCurso);
router.put('/actualizar/:id', db.updateCurso);
//exportar modulo par aqu elo pueda leer
module.exports=router;