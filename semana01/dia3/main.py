from libAlumno import *
import os
#PROGRAMA PARA GESTÓN DE ALUMNOS
#CRUD : CREATE , READ, UPDATE, DELETE
#DEFINIR VARIABLES DE ENTRADA Y SALIDA
alumnos = []
alumno = {}
salir = 'no'

def menuopciones():
    print("*" * 20)
    print("[1] REGISTRAR ALUMNO")
    print("[2] MOSTRAR ALUMNOS")
    print("[3] ACTUALIZAR ALUMNO")
    print("[4] ELIMINAR ALUMNO")
    print("*" * 20)

fileName = r"alumnos2.txt"

if(os.path.isfile(fileName)):
    fr = open(fileName,'r')
    fAlumnos = fr.read()
    print(fAlumnos)
    alumnos = cargarAlumnos(fAlumnos)
    fr.close()
else:
    fr = open('alumnos2.txt','w')
    fr.write("\n")
    alumnos = []
    fr.close()

while(salir == 'no'):
    menuopciones()
    opcion = input("INGRESE OPCIÓN: ")
    if(opcion == "1"):
        print("REGISTRO DE NUEVO ALUMNO:")
        nombre = input("NOMBRE : ")
        email = input("EMAIL : ")
        celular = input("CELULAR : ")
        alumnos = createAlumno(nombre,email,celular,alumnos)
    elif(opcion == "2"):
        readAlumno(alumnos)
    elif(opcion == "3"):
        updateAlumno(alumnos)
    else:
        print("MARCO UNA OPCIÓN INCORRECTA")
        continue
    print("Desea salir del programa? ")
    salir = input()
    if(salir == "si"):
        strAlumnosGrabar = grabarAlumnos(alumnos)
        fw = open(fileName,'w')
        fw.write(strAlumnosGrabar)
        fw.close()