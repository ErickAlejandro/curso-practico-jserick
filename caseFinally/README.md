# SALARY

## PROBLEM:
Encontrar el promedio y la mediana de salarios dependiendo del status enconomico de las personas en la Zona de Ecuador, despues realizar una suma de estos dos valores y encontrar los valores mas altos y mas bajos.

## ANALISIS
- Lo primero seria encontrar el promedio de personas en alta, media y baja sociedad, luego la media, lo cual corresponderia en 3 listas por status.
- Despues Crear las operaciones y probarlas en cada una de las listas.
- Luego extraer el top 10 y los valos mas pequenos por medio de una funcion con el metodo SPLITE.
- Por ultimo mostrar en el Document para la visualizaicon de nuestros usuarios.
- Es importante integrar esto con el HTML.

# DANGER: 
Se necesita transformar a array los valores de las listas para poder realizar las operaciones, se especula que se puede usar un SPLIT para separar los valores usando el siguiente comando:

```javascript
  var valueOne= $('#Testing').val().split(',')[0];
  var valueTwo =$('#Testing').val().split(',')[1];
  console.log(valueOne); //output 1
  console.log(valueTwo); //output 2010
```