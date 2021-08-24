import requests
url = 'http://127.0.0.1:8000/api/'
headers = {
    'Authorization' : 'Token 59df8326ac6703c36a565eaef61ef5abda447ab0'
}
r = requests.get(url,headers=headers)
print(r.text)