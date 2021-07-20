#PROGRAMA PARA CONVERTIR MONEDAS
print("==========================")
print(" CAMBISTA 1.0             ")
print("==========================")
tipoCambio = 0
while(tipoCambio != 1):
    print("Ingresa el valor en dolares:")
    moneda = float(input())
    print("Ingrese la moneda a convertir:")
    monedaConvertir = input()
    if monedaConvertir == "soles":
        tipoCambio = 3.98
    elif monedaConvertir == "euros":
        tipoCambio = 0.85
    else:
        tipoCambio = 1
        
    valorMonedaConvertir = moneda * tipoCambio

    if(valorMonedaConvertir == moneda):
        print("No indico una moneda valida ADIOS!!!!")
    else:
        print(" el valor en "+ monedaConvertir + " es de " + str(valorMonedaConvertir))