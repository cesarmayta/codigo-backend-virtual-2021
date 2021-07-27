from flask import Flask,request

app = Flask(__name__)

@app.route('/')
def index():
    return '<h1>HOLA MUNDO FLASK</h1>'

@app.route('/saludo')
def saludo():
    nombre = request.args.get('n','no puso su nombre')
    return 'Hola {}'.format(nombre)

@app.route('/suma')
def sumando():
    n1 = request.args.get('n1','no hay valor para n1')
    n2 = request.args.get('n2','no hay valor para n2')
    suma = int(n1) + int(n2)
    return 'la suma de {} + {} es {}'.format(n1,n2,suma)

@app.route('/operacion')
@app.route('/operacion/<tipo>/')
@app.route('/operacion/<tipo>/<int:n1>/<int:n2>')
def operacion(tipo="indicar tipo",n1=0,n2=0):
    if tipo == "suma" and n1 > 0 and n2 > 0:
        suma = int(n1) + int(n2)
        resultado = "<b>suma de 2 números</b><br>La suma de {} + {} es {}".format(n1,n2,suma)
    elif tipo == "resta" and n1 > 0 and n2 > 0:
        resta = int(n1) - int(n2)
        resultado = "<b>resta de 2 números</b><br>La resta de {} - {} es {}".format(n1,n2,resta)
    else:
        resultado = "falto ingresar datos"

    return '{}'.format(resultado)

@app.route('/calculadora',methods=['GET','POST'])
def calculadora():
    form = "<form action='calculadora' method='POST'>"
    form +="<input type='text' name='n1' size='2'/> "
    form +="<select name='tipo'><option>+</option><option>-</option></select>"
    form +="<input type='text' name='n2' size='2'/> "
    form +="<input type='submit' value='='/>"
    form +="</form>"
    if request.method == 'POST':
        n1 = request.form['n1']
        n2 = request.form['n2']
        ope = request.form['tipo']
        if ope == "+":
            resultado = int(n1) + int(n2)
        elif ope == "-":
            resultado = int(n1) - int(n2)
            
        form += '<h2>El resultado es : {}</h2>'.format(resultado)
    return form

if __name__ == '__main__':
    app.run(debug = True,port = 5000)