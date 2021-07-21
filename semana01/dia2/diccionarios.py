#MANEJO DE DICCIONARIOS
capitales = {'Perú':'Lima','Ecuador':'Quito','Chile':'Santiago','Uruguay':'Montevideo','Brasil':'Brasilia'}
print(capitales)
capital = {'USA':'Washington DC'}
capitales.update(capital)
print(capitales)

alumnos = {
    'nombre':'cesar mayta',
    'email':'cesarmayta@gmail.com',
    'celular':'956290589'
}

print(alumnos['email'])
alumnoModelo = alumnos.copy()
alumnos['email'] = 'cmayta@gmail.com'
print(alumnos['email'])
print(alumnoModelo)
a = alumnos.pop('dni','NO EXISTE DNI')
print(a)
print(alumnos)
print(alumnos.keys())
print(alumnos.values())

for clave in alumnos:
    print(clave,alumnos[clave])
    
for clave in alumnos.keys():
    print(clave,alumnos[clave])
    
for clave,valor in alumnos.items():
    print(clave,valor)
