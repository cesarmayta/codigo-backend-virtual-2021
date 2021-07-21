from random import choice
#JUEGO DE DE PIEDRA PAPEL O TIJERA
#DEFINIR VARIABLES ENTRADA Y SALIDA
opciones = ("piedra","papel","tijera")
jugador = input("ingresa tu judada:")
computadora = choice(opciones + opciones)
print("la computadora jugo " + computadora)
ganador = ""
#LOGICA DE LA SOLUCIÓN
if jugador == "piedra":
    if computadora == "piedra":
        ganador = "empate"
    elif computadora == "papel":
        ganador = "computador"
    elif computadora == "tijera":
        ganador = "jugador"
elif jugador == "papel":
    if computadora == "piedra":
        ganador = "jugador"
    elif computadora == "papel":
        ganador = "empate"
    elif computadora == "tijera":
        ganador = "computador"
elif jugador == "tijera":
    if computadora == "piedra":
        ganador = "computador"
    elif computadora == "papel":
        ganador = "jugador"
    elif computadora == "tijera":
        ganador = "empate"
#MUESTRO RESULTADOS
print("El ganador es  : " + ganador)