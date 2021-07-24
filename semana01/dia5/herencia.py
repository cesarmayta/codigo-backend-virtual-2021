class vehiculo:
    
    def __init__(self,mar,km,col):
        self.marca = mar
        self.kilometraje = km
        self.color = col
        
    def encender(self):
        print("Encendiendo ...")
        
class auto(vehiculo):
    
    def __init__(self,mar,km,col,cap):
        super().__init__(mar,km,col)
        self.capacidad = cap
        
    def encender(self):
        super().encender()
        print("Auto ..")
        
class camion(vehiculo):
    
    def __init__(self,mar,km,col,ej):
        super().__init__(mar,km,col)
        self.ejes = ej
        
    def encender(self):
        super().encender()
        print("tu camión")

#ferrari = auto('ferrari','0','amarillo',2)
#ferrari.encender()

hino = camion('vw','100000','verde',8)
hino.encender()
print(hino.color)