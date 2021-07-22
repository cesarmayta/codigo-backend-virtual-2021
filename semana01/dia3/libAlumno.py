#libreria alumno
def cargarAlumnos(strAlumnos):
    lstAlumnosData = []
    lstAlumnos = strAlumnos.splitlines()
    del lstAlumnos[0]
    for objAlumno in lstAlumnos:
        lstObjAlumno = objAlumno.split(',')
        nombre = lstObjAlumno[0]
        email = lstObjAlumno[1]
        celular = lstObjAlumno[2]
        dictAlumno = {
            'nombre':nombre,
            'email':email,
            'celular':celular
        }
        lstAlumnosData.append(dictAlumno)
    return lstAlumnosData

def grabarAlumnos(lstAlumnos):
    strAlumnos = ""
    for a in lstAlumnos:
        strAlumnos += "\n"
        for clave,valor in a.items():
            strAlumnos += valor
            if clave != 'celular':
                strAlumnos += ','
    return strAlumnos     

def createAlumno(nombre,email,celular,alumnos):
    nuevoAlumno = {
            'nombre': nombre,
            'email': email,
            'celular': celular
        }
    alumnos.append(nuevoAlumno)
    return alumnos
    
def readAlumno(alumnos):
    print("LISTADO DE ALUNMOS")
    for a in alumnos:
        print("=====================")
        for clave,valor in a.items():
            print(clave + " : " + valor)

def updateAlumno(alumnos):
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