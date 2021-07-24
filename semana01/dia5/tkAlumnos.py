from tkinter import *
from tkinter.ttk import Treeview

import sqlite3

class Alumno:
    
    db_name = 'database.s3db'
    
    def ejecutarSql(self,sql,parametros = ()):
        with sqlite3.connect(self.db_name) as conn:
            cursor = conn.cursor()
            resultado = cursor.execute(sql,parametros)
            conn.commit()
        return resultado
    
    def readAlumnos(self):
        rsALumnos = self.trvAlumnos.get_children()
        #limpiando la tabla
        for a in rsALumnos:
            self.trvAlumnos.delete(a)
        
        sqlAlumnos = 'select * from alumnos'
        resultado = self.ejecutarSql(sqlAlumnos)
        for fila in resultado:
            self.trvAlumnos.insert('',0,text= fila[0],values = fila[1])
            
    def createAlumno(self):
        sqlInsertAlumno = "insert into alumnos values(?,?)"
        parametros = (self.nombre.get(),self.email.get())
        self.ejecutarSql(sqlInsertAlumno,parametros)
        self.readAlumnos()
    
    def __init__(self,window):
        self.wind = window
        self.wind.title('Alumnos')
        
        #CREAMOS UN FRAME
        frame  = LabelFrame(self.wind,text = 'Registro de Nuevo Alumno')
        frame.grid(row=0,column = 0,columnspan = 3, pady = 10)
        #CAMPOS DEL FORMULARIO
        #AGREGAR CAMPO NOMBRE
        #CREAMOS LABEL PARA NOMBRE DEL ALUMNO
        lbNombre = Label(frame,text = 'Nombre :')
        lbNombre.grid(row=1,column=0)
        #CREAMOS TEXTFIELD PARA CAJA DE TEXTO DEL ALUMNO  Y LO ASIGNAMOS AL ATRIBUTO NOMBRE DEL ALUMNO
        self.nombre = Entry(frame)
        self.nombre.grid(row=1,column=1)
        
        #CREAMOS LABEL PARA NOMBRE DEL EMAIL
        lbEmail = Label(frame,text = 'Email :')
        lbEmail.grid(row=2,column=0)
        #CREAMOS TEXTFIELD PARA CAJA DE TEXTO DEL ALUMNO  Y LO ASIGNAMOS AL ATRIBUTO NOMBRE DEL ALUMNO
        self.email = Entry(frame)
        self.email.grid(row=2,column=1)
        
        #CREAMOS LABEL PARA NOMBRE DEL CELULAR
        #lbCelular = Label(frame,text = 'Celular :')
        #lbCelular.grid(row=3,column=0)
        #CREAMOS TEXTFIELD PARA CAJA DE TEXTO DEL ALUMNO  Y LO ASIGNAMOS AL ATRIBUTO NOMBRE DEL ALUMNO
        #self.celular = Entry(frame)
        #self.celular.grid(row=3,column=1)
        
        #BOTON PARA CREAR NUEVO ALUMNO
        btnNuevoAlumno = Button(frame,text='Registrar Alumno',command=self.createAlumno)
        btnNuevoAlumno.grid(row=4,columnspan=2,sticky=W + E)
        
        self.trvAlumnos = Treeview(height = 10,columns = 2)
        self.trvAlumnos.grid(row=5,column=0,columnspan=2)
        self.trvAlumnos.heading('#0',text='Nombre',anchor=CENTER)
        self.trvAlumnos.heading('#1',text='Email',anchor=CENTER)
        #trvAlumnos.heading('#2',text='Celular',anchor=CENTER)
        
        self.readAlumnos()


window = Tk()
app = Alumno(window)
window.mainloop()