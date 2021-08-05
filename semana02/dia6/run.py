from flask import Flask,jsonify,request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow


app = Flask(__name__)
#app.config['SQLALCHEMY_DATABASE_URI']='mysql+libreriamysql://user:pass:@localhost/bdname
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:@localhost/flaskapi'
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
    
    


if __name__ == "__main__":
    app.run(debug=True)