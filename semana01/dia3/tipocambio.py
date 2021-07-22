#EJEMPLO DE WEBSCRAPPING CON PYTHON
from bs4 import BeautifulSoup
import requests 

url = requests.get("https://www.sbs.gob.pe/app/pp/sistip_portal/paginas/publicacion/tipocambiopromedio.aspx")

status_code = url.status_code
if status_code == 200:
    html = BeautifulSoup(url.text,"html.parser")
    """<tr class="rgRow" id="ctl00_cphContent_rgTipoCambio_ctl00__0">
				<td class="APLI_fila3" style="width:40%;">Dólar de N.A.</td><td class="APLI_fila2" style="width:30%;">3.948</td><td class="APLI_fila2" style="width:30%;">3.954</td>
			</tr>"""
    empresas = html.find_all('tr',{'class':'rgRow'})
    #print(empresas)
    for empresa in empresas:
        moneda = empresa.find('td',{'class':'APLI_fila3'})
        tipocambio = empresa.find('td',{'class':'APLI_fila2'})
        print(moneda)
        print(tipocambio)
else:
    print("error nro" + str(status_code))