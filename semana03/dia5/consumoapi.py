import requests
import json

URL = 'https://cmaytaapi.herokuapp.com'
headers = {'Content-type': 'application/json'}
body = {'nombre':'Luis Estrella','email':'luisestrella@gmail.com'}
r = requests.post(URL + '/setAlumno', data = json.dumps(body) ,headers= headers)
print(r)

g = requests.get(URL + '/alumnos')
print(g.text)