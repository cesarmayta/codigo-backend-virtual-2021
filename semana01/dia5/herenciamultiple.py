class Rectangulo:
    
    def __init__(self,ancho,alto):
        self.ancho = ancho
        self.alto = alto
        
    def area(self):
        return self.ancho * self.alto

class Cuadrado:
    
    def __init__(self,lado):
        self.lado = lado
        
    def area(self):
        return self.lado ** 2
    
class FiguraGeometrica(Rectangulo,Cuadrado):
    
    def __init__(self,tipo,v1,v2=0):
        self.tipo = tipo
        Rectangulo.__init__(self,v1,v2)
        Cuadrado.__init__(self,v1)
        
    def area(self):
        if self.tipo == "Rectangulo":
            return Rectangulo.area(self)
        else:
            return Cuadrado.area(self)
        
        
c = FiguraGeometrica("Cuadrado",20)
area = c.area()
print(area)

r = FiguraGeometrica("Rectangulo",20,30)
area = r.area()
print(area)
