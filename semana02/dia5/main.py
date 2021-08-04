from flask import Flask,render_template,request,redirect,url_for
from flask_bootstrap import Bootstrap
from flask_mysqldb import MySQL
from flask_wtf import FlaskForm
from wtforms import StringField,SubmitField,HiddenField
from wtforms.validators import DataRequired

#CREAMOS OBJETO DE CLASE FLASK PARA INICIAR LA APLICACIÓN
app = Flask(__name__)

#Configuracion de BASE DE DATOS
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'db_sistemapos'

#AGREGAR CONEXIÓN A BASE DE DATOS DE NUESTRA APP
mysql = MySQL(app)

#VALOR SECRETO PARA FORMULARIOS
app.secret_key = "mysecretkey"

#AÑADIMOS BOOTSTRAP A NUESTRO APP
Bootstrap(app)


############################# FORMULARIOS ################################
class frmProducto(FlaskForm):
    id = HiddenField("hdnId")
    categoria = StringField('Categoria :',validators=[DataRequired()])
    nombre = StringField('Nombre :',validators=[DataRequired()])
    marca = StringField('Marca :',validators=[DataRequired()])
    modelo = StringField('Modelo :',validators=[DataRequired()])
    serie = StringField('Nro Serie :',validators=[DataRequired()])
    ram = StringField('Memoria RAM :',validators=[DataRequired()])
    procesador = StringField('Procesador :',validators=[DataRequired()])
    discoduro = StringField('Disco Duro :',validators=[DataRequired()])
    precio = StringField('Precio :',validators=[DataRequired()])
    stock = StringField('Stock :',validators=[DataRequired()])
    submit = SubmitField('Guardar')

################################# RUTAS ###################################
@app.route('/')
def index():
    cur = mysql.connection.cursor()
    cur.execute('SELECT c.id,t.nombre AS tipo,c.nro_doc AS nro,c.nombre AS cliente,c.telefono,c.email FROM clientes c JOIN tipo_doc_ide t ON c.tipo_doc_ide_id = t.id ')
    data = cur.fetchall()
    cur.close()

    print(data)
    context = {
        'data':data
    }
    return render_template('index.html',**context)


@app.route('/productos',methods=['GET','POST'])
def productos():
    print("productos:::::")
    #CURSOR CATEGORIAS
    curCategoria = mysql.connection.cursor()
    curCategoria.execute('SELECT * from cat_producto')
    dataCategoria = curCategoria.fetchall()
    curCategoria.close()
    
    catId = 0
    
    if request.method == 'POST' and int(request.form['categoria']) > 0 :
        catId = request.form['categoria']
        sqlProducto = "SELECT * FROM PRODUCTO where cat_producto_id=" + catId
    else:
        sqlProducto = "SELECT * FROM PRODUCTO"
    
    #CURSOR PRODUCTOS
    curProducto = mysql.connection.cursor()
    curProducto.execute(sqlProducto)
    dataProducto = curProducto.fetchall()
    curProducto.close()

    
    frmNuevoProducto = frmProducto()
    
    
    pId = request.args.get('pid','0')
    
    print("ID DEL PRODUCTO SELECCIONADO = " + pId)
    #CARGAMOS EL PRODUCTO A EDITAR
    if pId != '0' and request.method == 'GET':
        curProductoEditar = mysql.connection.cursor()
        curProductoEditar.execute("select * from producto where id=%s",(pId))
        dataProductoEditar = curProductoEditar.fetchone()
        curProductoEditar.close()
        print("DATOS DEL PRODUCTO A EDITAR :")
        print(dataProductoEditar)
        #llenamos los valores del producto a editar en el formulario
        frmNuevoProducto.id.data = dataProductoEditar[0]
        frmNuevoProducto.categoria.data = dataProductoEditar[1]
        frmNuevoProducto.nombre.data = dataProductoEditar[2]
        frmNuevoProducto.marca.data = dataProductoEditar[3]
        frmNuevoProducto.modelo.data = dataProductoEditar[4] 
        frmNuevoProducto.serie.data = dataProductoEditar[5]
        frmNuevoProducto.ram.data = dataProductoEditar[6]
        frmNuevoProducto.procesador.data = dataProductoEditar[7]
        frmNuevoProducto.discoduro.data = dataProductoEditar[8]
        frmNuevoProducto.precio.data = dataProductoEditar[9]
        frmNuevoProducto.stock.data = dataProductoEditar[10]
    
    context = {
        'dataCategoria':dataCategoria,
        'dataProducto':dataProducto,
        'catId':catId,
        'frmProducto':frmNuevoProducto
    }
    
    if frmNuevoProducto.validate_on_submit():
        
        id = frmNuevoProducto.id.data
        categoriaId = frmNuevoProducto.categoria.data
        nombre = frmNuevoProducto.nombre.data
        marca = frmNuevoProducto.marca.data
        modelo = frmNuevoProducto.modelo.data
        serie = frmNuevoProducto.serie.data
        ram = frmNuevoProducto.ram.data
        procesador = frmNuevoProducto.procesador.data
        discoduro = frmNuevoProducto.discoduro.data
        precio = frmNuevoProducto.precio.data
        stock = frmNuevoProducto.stock.data
        
        print("producto a editar:" + id)
        
        if id != '0':
            #actualizar producto
            print("actualizamos")
            curUpdateProducto = mysql.connection.cursor()
            
            sqlActualizarProducto = "UPDATE producto "
            sqlActualizarProducto +="SET cat_producto_id='" + categoriaId + "'" 
            sqlActualizarProducto +=",nombre='" + nombre + "'"
            sqlActualizarProducto +=",marca='" + marca + "'"
            sqlActualizarProducto +=",modelo='" + modelo + "'"
            sqlActualizarProducto +=",nro_serie='" + serie + "'"
            sqlActualizarProducto +=",mem_ram='" + ram + "'"
            sqlActualizarProducto +=",procesador='" + procesador + "'"
            sqlActualizarProducto +=",disco_duro='" + discoduro + "'"
            sqlActualizarProducto +=",precio='" + precio + "'"
            sqlActualizarProducto +=",stock='" + stock + "'"
            sqlActualizarProducto +=" where id=" + id + ""
            
            print("SQL UPDATE:" + sqlActualizarProducto)
            
            #curUpdateProducto.execute(sqlActualizarProducto)
            curUpdateProducto.execute("UPDATE producto SET cat_producto_id=%s,nombre=%s,marca=%s,modelo=%s,nro_serie=%s,mem_ram=%s,procesador=%s,disco_duro=%s,precio=%s,stock=%s WHERE id=%s",(categoriaId,nombre,marca,modelo,serie,ram,procesador,discoduro,precio,stock,id))
            mysql.connection.commit()
        else:
            #registrar producto
            print("registramos")
            curNuevoProducto = mysql.connection.cursor()
            curNuevoProducto.execute("INSERT INTO producto(cat_producto_id,nombre,marca,modelo,nro_serie,mem_ram,procesador,disco_duro,precio,stock) values (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)",(categoriaId,nombre,marca,modelo,serie,ram,procesador,discoduro,precio,stock))
            mysql.connection.commit()
        
        return redirect(url_for('productos'))
        
    
    
    return render_template('productos.html',**context)

#RUTA PARA ELIMINAR PRODUCTOS
@app.route("/eliminarProducto",methods=['POST'])
def eliminarProducto():
    id = request.form['eid']
    print("ID A ELIMINAR : " + id)
    
    curEliminarProducto = mysql.connection.cursor()
    curEliminarProducto.execute("DELETE FROM producto WHERE id=%s",(id))
    mysql.connection.commit()

    return redirect(url_for('productos'))

#METODO PRINCIPAL
if __name__ == '__main__':
    app.run(debug=True,port=5001)

