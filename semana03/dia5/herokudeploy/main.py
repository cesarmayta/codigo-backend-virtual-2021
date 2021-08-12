from flask import Flask

app = Flask(__name__)

@app.route("/")
def index():
    return "<h1>BIENVENIDO A MI APP DE PRODUCCIÓN EN HEROKU</h1>"
