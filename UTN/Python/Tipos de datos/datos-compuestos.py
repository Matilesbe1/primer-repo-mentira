
lista=['hola', 5, 'jaja', 1.88 ]
tupls=('hola', 5, 'jaja', 1.88 ) 
""" ES LO MISMO PERO LA TUPLA NO SE PUEDE MODIFICAR """
print(lista[2])#jaja

#ESTO SE PUEDE
lista[3]='holahola'

#ESTO NO
#tupla[3]='holahola'

conjunto={'hola', 5, 'jaja', 1.88}
""" SE PUEDE REDEFINIR, PERO NO SE PUEDE CAMBIAR LOS ELEMENTOS DE LAS LISTAS, LO DIFERENTE ES QUE EN EL CONJUNTO NO SE PUEDE LLAMAR A UN ELEMENTO POR SU INDICE
EN EL CONJUNTO NO PUEDEN HABER ELEMENTOS DUPLICADOS
PRINT (CONJUNTO[3])--> NO SE PUEDE
"""
diccionario={
    'nombre': 'matias',
    'edad':'18',
    'altura':'1.60',
}
print(diccionario['edad'])
print(diccionario['altura'] + 5)


