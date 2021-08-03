from flask import Flask,render_template,request
from flask_bootstrap import Bootstrap
from flask_mysqldb import MySQL

#pip install flask-mysqldb
#pip install flask-bootstrap4

app = Flask(__name__)

#Configuracion de BASE DE DATOS
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'db_sistemapos'

mysql = MySQL(app)

app.secret_key = "mysecretkey"

Bootstrap(app)

#lstProductos = ['LAPTOP','IMPRESORA HP','SILLA GAMER']

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

@app.route('/productos')
def productos():
    print("productos:::::")
    cur = mysql.connection.cursor()
    cur.execute('SELECT * from producto')
    data = cur.fetchall()
    cur.close()

    print(data)
    context = {
        'data':data
    }
    return render_template('productos.html',**context)

if __name__ == '__main__':
    app.run(debug=True,port=5000)


