//archivo donde se almacenarán todos los métodos para la base de datos

//importar modulo promise
var promise=require('bluebird');//controlar promesas
//variable de opcioens que servirá para la base de datos
var options={
    promiseLib: promise
};
//cargar modelo pg promise
var pgp = require('pg-promise')(options);
//string de conexion
var connectionString='postgres://womdtsey:mSXMmTV8j8Lts6xO-IX6XsS72WgXkGco@elmer.db.elephantsql.com:5432/womdtsey';
//cargar bd
var db = pgp(connectionString);

//metodos
//obtener todos lso restauratnes
function getAllCursos(req, res, next){
    db.any('select * from curso')
    .then(function(data){
        res.status(200)//mandar esa informacion en archivo json
        .json({
            status: 'Exitoso',
            data: data,
            message: 'Recuperados todos los datos de cursos'
        });

    })
    .catch(function(err){
        return next(err);
    });

};


function createCurso(req, res, next){
    
    db.any('insert into curso(id,nombre)' + ' values($1,$2)',
        [req.body.id, req.body.nombre])
    .then(function(data){
    res.status(200)
    .json({
        status: 'Exitoso',
        data: data,
        message: 'Insertado un curso'
    });
    })
    .catch(function(err){
        return next(err);
        });

};

function removeCurso(req, res, next){

    var menuId = parseInt(req.params.id);//ubicacion del paratmetro
    db.result('delete  from curso where id = $1', id)
    .then(function(){
    res.status(200)
    .json({
        status: 'Exitoso',
        data: data,
        message: 'Removido un curso'
    });
    })
    .catch(function(err){
        return next(err);
        });

};

function updateCurso(req, res, next){
 db.none('update curso set  id=$1, nombre=$2 where id=$3 '),
    [parseInt(req.body.id), req.body.nombre]
    .then(function(){
    res.status(200)
    .json({
        status: 'Exitoso',
        message: 'Curso actualizado'
    });
    })
    .catch(function(err){
        return next(err);
        });

};

module.exports = {
    getAllCursos : getAllCursos,
    createCurso : createCurso,
    removeCurso: removeCurso,
    updateCurso : updateCurso
}

