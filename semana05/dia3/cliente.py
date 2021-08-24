import requests
import json
url = 'http://127.0.0.1:8000/api/'

headers_post = {'Content-type': 'application/json'}
usuario = input("Ingrese Usuario :")
clave = input("Ingrese clave:")
data_post = {'usuario':usuario,'password':clave}
p = requests.post(url + 'login',data=json.dumps(data_post),headers=headers_post)

if(p.status_code == 200):
    response  = json.loads(p.text)
    token_key = response['token']
    print("tu token para mi api es :" + token_key)
    headers = {
        'Authorization' : 'Token ' + token_key
    }
    r = requests.get(url,headers=headers)
    print(r.text)
else:
    print("error : " + p.text)

