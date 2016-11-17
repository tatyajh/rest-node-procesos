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
function getAllProfesores(req, res, next){
    db.any('select *from profesor')
    .then(function(data){
        res.status(200)//mandar esa informacion en archivo json
        .json({
            status: 'Exitoso',
            data: data,
            message: 'Recuperados todos los datos de profesores'
        });

    })
    .catch(function(err){
        return next(err);
    });

};


function createProfesor(req, res, next){
    
    db.any('insert into profesor(nombre,cedula,telefono,correo)' + ' values($1,$2,$3,$4)',
        [req.body.nombre, req.body.cedula, req.body.telefono, req.body.correo])
    .then(function(data){
    res.status(200)
    .json({
        status: 'Exitoso',
        data: data,
        message: 'Insertado un profesor'
    });
    })
    .catch(function(err){
        return next(err);
        });

};

function removeProfesor(req, res, next){

    var cedula = parseInt(req.params.cedula);//ubicacion del paratmetro
    db.result('delete  from profesor where cedula = $1', cedula)
    .then(function(result){
   res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} profesor`
        });
      /* jshint ignore:end */
    })
    .catch(function (err) {
      return next(err);
    });

};

function updateProfesor(req, res, next){
 db.none('update profesor set  nombre=$1, cedula=$2, telefono=$3, correo=$4 where cedula=$5 '),
    [parseInt(req.body.cedula), req.body.nombre, req.body.telefono,req.body.correo]
    .then(function(){
    res.status(200)
    .json({
        status: 'Exitoso',
        message: 'profesor actualizado'
    });
    })
    .catch(function(err){
        return next(err);
        });

};

module.exports = {
    getAllProfesores : getAllProfesores,
    createProfesor : createProfesor,
    removeProfesor: removeProfesor,
    updateProfesor : updateProfesor
}

