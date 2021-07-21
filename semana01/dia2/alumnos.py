#PROGRAMA PARA GESTÓN DE ALUMNOS
#CRUD : CREATE , READ, UPDATE, DELETE
#DEFINIR VARIABLES DE ENTRADA Y SALIDA
alumnos = []
alumno = {}
salir = 'no'
#LOGICA

def createAlumno(nombre,email,celular):
    nuevoAlumno = {
            'nombre': nombre,
            'email': email,
            'celular': celular
        }
    alumnos.append(nuevoAlumno)
    return 1
def readAlumno():
    print("LISTADO DE ALUNMOS")
    for a in alumnos:
        print("=====================")
        for clave,valor in a.items():
            print(clave + " : " + valor)

while(salir == 'no'):
    print("OPCIONES : 1 - registrar alumno 2 - mostrar alumnos")
    opcion = input()
    if(opcion == "1"):
        print("REGISTRO DE NUEVO ALUMNO:")
        nombre = input("NOMBRE : ")
        email = input("EMAIL : ")
        celular = input("CELULAR : ")
        r = createAlumno(nombre,email,celular)
        if r == 1:
            print("REGISTRO EXITOSO")
    elif(opcion == "2"):
        readAlumno()
    else:
        print("MARCO UNA OPCIÓN INCORRECTA")
        continue
    print("Desea salir del programa? ")
    salir = input()
#MOSTRAR RESULTADOS