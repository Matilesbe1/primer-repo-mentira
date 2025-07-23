a=2
b=8
c=a+b
nombre='Matias'
nombre='Lesbe'
""" SE PUEDE USAR HOLA + NOMBRE+ COMO ESTAS. PERO ESTA FORMA ES MUCHO MEJOR, AL PONER LAS LLAVES NECESITAS PONER LA F ADELANTE DE LA ORACION """
bienvenida= f'hola {nombre} como estas?'
numero=10
numero+=10
numero-=5
""" 10+10-5=15 """

nombre2='Matu'
bienvenida2='hola {nombre2} como estas?'
del nombre2
print (bienvenida2)
"""  HOLA MATU COMO ESTAS? """
""" SI YO BORRO EL NOMBRE DESPUES DE QUE SE 'AGREGUE' A LA VARIABLE BIENVENIDA2, LA VARIABLE YA SE SUMO Y YA ES 'HOLA MATU COMO ESTAS?', SI QUERES BORRAR UNA VARIABLE, LO TENES QUE HACER ANTES DE QUE SE AGREGUE A ALGO, SINO YA SE VA A SUMAR A ESA VARIABLE  """

nombre2='Matu'
del nombre2
bienvenida2='hola {nombre2} como estas?'
print (bienvenida2)
""" Tira error porque ya borramos el nombre2 """

print ('Hola' not in bienvenida)
""" True porque 'Hola' no esta en bienvenida, esta 'hola' """
print ('Hola in bienvenida2')
""" False porque 'Hola' no esta en bienvenida """

