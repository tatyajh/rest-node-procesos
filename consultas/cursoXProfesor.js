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
function getAllcursoXProfesor(req, res, next){
    db.any('select *from cursoXProfesor')
    .then(function(data){
        res.status(200)//mandar esa informacion en archivo json
        .json({
            status: 'Exitoso',
            data: data,
            message: 'Recuperado'
        });

    })
    .catch(function(err){
        return next(err);
    });

};


function createcursoXProfesor(req, res, next){
    
    db.any('insert into cursoXProfesor(idProfesor,idCurso,referencia)' + ' values($1,$2,$3)',
        [req.body.idProfesor, req.body.idCurso, req.body.referencia])
    .then(function(data){
    res.status(200)
    .json({
        status: 'Exitoso',
        data: data,
        message: 'Insertado'
    });
    })
    .catch(function(err){
        return next(err);
        });

};

function removecursoXProfesor(req, res, next){

    var menuId = parseInt(req.params.id);//ubicacion del paratmetro
    db.result('delete  from cursoXProfesor where idProfesor = $1 and idCurso = $2', idProfesor, idCurso)
    .then(function(){
    res.status(200)
    .json({
        status: 'Exitoso',
        data: data,
        message: 'Removido'
    });
    })
    .catch(function(err){
        return next(err);
        });

};

function updatecursoXProfesor(req, res, next){
 db.none('update cursoXProfesor set  idProfesor=$1, idCurso=$2, referencia=$3 where idProfesor = $4 and idCurso = $5 '),
    [parseInt(req.body.idProfesor), parseInt(req.body.idCurso), req.body.referencia]
    .then(function(){
    res.status(200)
    .json({
        status: 'Exitoso',
        message: 'actualizado'
    });
    })
    .catch(function(err){
        return next(err);
        });

};

module.exports = {
    getAllcursoXProfesor : getAllcursoXProfesor,
    createcursoXProfesor : createcursoXProfesor,
    removecursoXProfesor : removecursoXProfesor,
    updatecursoXProfesor : updatecursoXProfesor
}

