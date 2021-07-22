#EJEMPLO DE WEBSCRAPPING CON PYTHON
from bs4 import BeautifulSoup
import requests 

url = requests.get("https://camara-arequipa.org.pe/dirempresarial/")

status_code = url.status_code
if status_code == 200:
    html = BeautifulSoup(url.text,"html.parser")
    
    empresas = html.find_all('div',{'class':'card-body'})
    
    for empresa in empresas:
        nombre = empresa.find('h5',{'class':'card-title'})
        print(nombre.value)
else:
    print("error nro" + str(status_code))