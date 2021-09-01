from pymongo import MongoClient

cliente = MongoClient('mongodb://127.0.0.1:27017')
#accediendo a la base de datos
db = cliente['bootcamp']
#accidendo a la colección
colAlumnos = db["alumno"]

aluId = colAlumnos.insert_one({"nombre":"Jorge Lapadula","email":"lapadula@gmail.com","nota":0})
print(aluId)
#print(colAlumnos.find())
for a in colAlumnos.find():
        print(a["nombre"] + " - " + a["email"])
        
