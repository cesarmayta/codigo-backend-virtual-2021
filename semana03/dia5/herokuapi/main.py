from flask import Flask,jsonify,request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

""" PARA DESPLIGUE EN HEROKU
heroku login
git init
heroku git:remote -a [nombreapp]
heroku addons:create heroku-postgresql:hobby-dev
pip install flask psycopg2 SQLAlchemy marshmallow marshmallow-sqlalchemy Flask-SQLAlchemy flask-marshmallow gunicorn
"""

app = Flask(__name__)
#app.config['SQLALCHEMY_DATABASE_URI']='mysql+libreriamysql://user:pass@localhost/bdname
#postgres://nckyrenwthbcxf:670e4d46cc9e08f722c99d405637616c4ed43feeabc0646205f9c1c95ee31b33@ec2-44-194-225-27.compute-1.amazonaws.com:5432/d2hruecefdl5gk
# USUARIO  : nckyrenwthbcxf
# PASSWORD : 670e4d46cc9e08f722c99d405637616c4ed43feeabc0646205f9c1c95ee31b33
# SERVIDOR : ec2-44-194-225-27.compute-1.amazonaws.com:5432
# NOMBRE BASE DE DATOS : d2hruecefdl5gk
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://nckyrenwthbcxf:670e4d46cc9e08f722c99d405637616c4ed43feeabc0646205f9c1c95ee31b33@ec2-44-194-225-27.compute-1.amazonaws.com:5432/d2hruecefdl5gk'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

#CLASES PARA BD

class Alumno(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    nombre = db.Column(db.String(100),nullable=False)
    email = db.Column(db.String(100),unique= True)
    
    def __init__(self,nombre,email):
        self.nombre = nombre
        self.email = email
        
db.create_all()


class AlumnosSchema(ma.Schema):
    class Meta:
        fields = ('id','nombre','email')
    
alumno_schema = AlumnosSchema()
alumnos_schema = AlumnosSchema(many=True)

@app.route('/')
def index():
    return jsonify({'mensaje':'Bienvenido a mi API'})

@app.route('/setAlumno',methods=['POST'])
def setAlumno():
    nombre = request.json['nombre']
    email = request.json['email']
    
    #EQUIVALENTE A INSERT INTO ALUMNO
    nuevoAlumno = Alumno(nombre,email)
    db.session.add(nuevoAlumno)
    db.session.commit()
    
    return alumno_schema.jsonify(nuevoAlumno)

@app.route('/alumnos',methods=['GET'])
def getAlumnos():
    listadoAlumnos = Alumno.query.all() #SELECT * FROM ALUMNOS
    print(listadoAlumnos)
    dataAlumnos = alumnos_schema.dump(listadoAlumnos)
    print(dataAlumnos)
    return jsonify(dataAlumnos)

@app.route('/getAlumno/<id>',methods=['GET'])
def getAlumno(id):
    alumno = Alumno.query.get(id) #select * from alumno where id=
    print(alumno)
    
    return alumno_schema.jsonify(alumno)

@app.route('/updAlumno/<id>',methods=['PUT'])
def updateAlumno(id):
    alumno = Alumno.query.get(id) #select * from alumno where id=
    print(alumno)
    
    nombre = request.json['nombre']
    email = request.json['email']
    #UPDATE ALUMNO SET 
    alumno.nombre = nombre
    alumno.email = email
    
    db.session.commit()
    
    return alumno_schema.jsonify(alumno)
    
@app.route('/delAlumno/<id>',methods=['DELETE'])
def deleteAlumno(id):
    alumno = Alumno.query.get(id)
    #DELETE FROM ALUMNOS WHERE id=
    db.session.delete(alumno)
    db.session.commit()
    
    return alumno_schema.jsonify(alumno)