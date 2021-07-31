from flask import Flask,render_template,request
from flask_bootstrap import Bootstrap

app = Flask(__name__)

Bootstrap(app)

lstProductos = ['LAPTOP','IMPRESORA HP','SILLA GAMER']

@app.route('/')
def index():
    name = request.args.get('n','invalido')
    user_ip = request.remote_addr
    context = {
        'nombre':name,
        'user_ip':user_ip,
        'productos':lstProductos
    }
    return render_template('index.html',**context)

@app.route('/productos')
def productos():
    context = {
        'productos':lstProductos
    }
    return render_template('productos.html',**context)

if __name__ == '__main__':
    app.run(debug=True,port=5000)


