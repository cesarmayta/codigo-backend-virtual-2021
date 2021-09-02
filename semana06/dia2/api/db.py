from bson.json_util import dumps, ObjectId
from flask import current_app
from pymongo import MongoClient, DESCENDING
from werkzeug.local import LocalProxy


# Este método se encarga de configurar la conexión con la base de datos
def get_db():
    mongo_db = current_app.config['DB_URI']
    client = MongoClient(mongo_db)
    return client.codigo


# Use LocalProxy to read the global db instance with just `db`
db = LocalProxy(get_db)


def test_connection():
    return dumps(db.collection_names())


def collection_stats(collection_nombre):
    return dumps(db.command('collstats', collection_nombre))

# -----------------Carreras-------------------------

def crear_carrera(json):
    return str(db.carrera.insert_one(json).inserted_id)

def consultar_carrera_por_id(carrera_id):
    return dumps(db.carrera.find_one({'_id':ObjectId(carrera_id)}))

def actualizar_carrera(carrera):
    return str(db.carrera.update_one({'_id':ObjectId(carrera['_id'])},{'$set':{'nombre':carrera['nombre']}}))

def borrar_carrera_por_id(carrera_id):
    return str(db.carrera.delete_one({'_id':ObjectId(carrera_id)}))

def consultar_carrera(skip, limit):
    return dumps(db.carrera.find())

def agregar_curso(json):
    curso = consultar_curso_por_id_proyeccion(json['id_curso'],proyeccion={'nombre':1})
    return str(db.carrera.update_one({'_id':ObjectId(json['id_carrera'])},{'$addToSet':{'cursos':curso}}).modified_count)

#------------------- Cursos ----------------------------
def consultar_curso(skip,limit):
    return dumps(db.curso.find())

def crear_curso(json):
    return str(db.curso.insert_one(json).inserted_id)

def consultar_curso_por_id_proyeccion(id_curso,proyeccion=None):
    return db.curso.find_one({'_id': ObjectId(id_curso)},proyeccion)
