from flask import Flask,render_template,request
from flask_bootstrap import Bootstrap
from flask_mysqldb import MySQL

app = Flask(__name__)

#Configuracion de BASE DE DATOS
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'db_sistemapos'

mysql = MySQL(app)

app.secret_key = "mysecretkey"

Bootstrap(app)

lstProductos = ['LAPTOP','IMPRESORA HP','SILLA GAMER']

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

    print(catId)
    
    context = {
        'dataCategoria':dataCategoria,
        'dataProducto':dataProducto,
        'catId':catId
    }
    return render_template('productos.html',**context)

if __name__ == '__main__':
    app.run(debug=True,port=5001)

