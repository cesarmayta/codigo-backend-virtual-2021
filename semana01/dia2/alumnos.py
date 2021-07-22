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
    
def readAlumno():
    print("LISTADO DE ALUNMOS")
    for a in alumnos:
        print("=====================")
        for clave,valor in a.items():
            print(clave + " : " + valor)

def updateAlumno():
    print(" ACTUALIZAR ALUMNO ")
    posAlumno = -1
    alumnoBusqueda = input("INGRESE EL NOMBRE DEL ALUMNO :")
    for i in range(len(alumnos)):
        a = alumnos[i]
        for clave,valor in a.items():
            if valor == alumnoBusqueda:
                print(a)
                posAlumno = i
                print("posición del alumno:" + str(posAlumno))
                break
    print("ACTUALIZANDO DATOS DEL ALUMNO:")
    nombre = input("NOMBRE : ")
    email = input("EMAIL : ")
    celular = input("CELULAR : ")
    actAlumno =  {
            'nombre': nombre,
            'email': email,
            'celular': celular
        }
    del alumnos[posAlumno]
    alumnos.insert(posAlumno,actAlumno)
    
def menuopciones():
    print("*" * 20)
    print("[1] REGISTRAR ALUMNO")
    print("[2] MOSTRAR ALUMNOS")
    print("[3] ACTUALIZAR ALUMNO")
    print("[4] ELIMINAR ALUMNO")
    print("*" * 20)
    
while(salir == 'no'):
    menuopciones()
    opcion = input("INGRESE OPCIÓN: ")
    if(opcion == "1"):
        print("REGISTRO DE NUEVO ALUMNO:")
        nombre = input("NOMBRE : ")
        email = input("EMAIL : ")
        celular = input("CELULAR : ")
        r = createAlumno(nombre,email,celular)
        
    elif(opcion == "2"):
        readAlumno()
    elif(opcion == "3"):
        updateAlumno()
    else:
        print("MARCO UNA OPCIÓN INCORRECTA")
        continue
    print("Desea salir del programa? ")
    salir = input()
#MOSTRAR RESULTADOS