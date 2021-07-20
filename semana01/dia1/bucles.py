#PROGRAMA PARA BUCLES
n = int(input("ingrese tabla de multiplicar:"))
for x in range(1,13,2):
    tabla = n * x
    print(str(n) + " x " + str(x) + " = " + str(tabla))
i = 1
while i < 12:
    tabla = n * i
    print(str(n) + " x " + str(i) + " = " + str(tabla))
    i += 1