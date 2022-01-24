1. 

- Una variable es un espacio de memoria que se usa para almacenar algun tipo de dato.
- Al iniciar una variable le estamos dando un valor en especifico, mientras que al declararla solo estamos reservando la palabra como variable dentro del scope global.
- Al realizar una suma de dos variables de tipo numero se realiza la operacion matematica, mientras que al concatenar solo estamos uniendo las dos cadenas String para que sean una sola.
- El operador es: +.
2. 
- Nombre de la variable: name, tipo: String.
- Nombre de la variable: lastName, tipo: String.
- Nombre de la variable: userName, tipo: String.
- Nombre de la variable: age, tipo: Number.
- Nombre de la variable: email, tipo: String.
- Nombre de la variable: adult, tipo: Boolean.
- Nombre de la variable: capital, tipo: Number.
- Nombre de la variable: debts, tipo: Number.
3. 

```
var name = "";
var lastName = "";
var userName = "";
var age = ;
var email = "";
var adult = true ; // or false
var capital = ;
var debts = ;
```
4. 

```
var nameComplete = console.log(name + lastName);
var capitalReal = console.log(capital - debts);
```
FUNCTION
1.
- Una funcion es un bloque de codigo que permite encapsular ciertas aperaciones que pueden repetirce varias veces dentro de nuestro codigo.
- Cuando tenemos que realizar la misma operacion varias veces.
- Los parametros tiene un nombre los cuales son requeridos por la funcion, mientras que un argumento es el valor que se le asigna a este parametro.
2. 

```
function informationPerson(name, lastName, completeName, nickName){
	return console.log(`Mi nombre es ${completeName}, pero prefiero que me digas ${nickName}.`);
}

// Creo que debi hacer las variables afuera y ahi proceder a unirlas para el nombre completo, pero no estoy seguro.
```
CONDITIONALS
1. 

- Es un fracmento de codigo que nos permite tomar distintas rutas del proceso en caso de que se cumplan ciertas condiciones.
- If, else if, else; estas son condicionales por asi decirlo lineales, si no se cumple una va a la siguiente dependiendo de la condicion, switch and case, estas condicionales es dependiendo del caso, es decir si una variable guardada en el switch tiene un valor, el caso se cumplira y ahi terminara el proceso.
- Si, se puede crear una funcion la cual guarde cualquier tipo de condicional en caso de que sea necesaria.
2. 


```
function process(typeSuscription){
	if(typeSuscription == "Free"){
		console.log("Solo puedes tomar los cursos gratis");
	} else if(typeSuscription == "Basic"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    } else if(typeSuscription == "Expert"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    } else if(typeSuscription == "ExpertPlus"){
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    }
}
```
3.

```
function process(typeSuscription){
	if(typeSuscription == "Free"){
		console.log("Solo puedes tomar los cursos gratis");
	} if(typeSuscription == "Basic"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    } if(typeSuscription == "Expert"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    } if(typeSuscription == "ExpertPlus"){
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    }
}
```
CICLOS
1. 
- Es una sentencia que permite que un proceso se repita un numero determinado de veces, siempre y cuando la condicion se cumpla.
- Exiten: for, while, do while.
- Un ciclo infinito normalmente se lo hace con un while pero es poco practico, puesto que normalmente hace que nuestro navegador caiga y se mantenga en un ciclo sin fin arrojando datos.
- Por supuesto, ay que a veces se necesita que dependiendo de la condicion se repita un proceso, esto normalmente lo vemos cuando se trabaja con arreglos.
2.

```
var i = 0;
while (i < 5) {
	console.log("El valor de i es: " + i);
	i++;
}
```

```
i = 10;
while (i >= 2) {
	console.log("El valor de i es: " + i);
	i--;
}
```
3.

```
let respuesta = 0;
do {
  respuesta = prompt('¿Cual es el resultado de 2 + 2?')
  respuesta *= 1;
} while (!(respuesta === 4))
```
LIST
1.
- Un array es una variable de tipo objeto la cual permite almacenar un numero de elementos.
- Un objeto es una variable que posee propiedades que se toman como elementos individuales.
- Es bueno usar array cuando se requiere tener un control de los elementos guardados ahi, ubicacion, posicion o valor, mientras que un objeto guarda informacion de una misma entidad, es decir ciertas propiedades que lo identifican.
- Si, se puede crear un arrray el cual contenga objetos.
2.


```
function informationArray(array){
    return console.log(array[0]);
}
```
3. 

```
function foundArray(array){
    for(i = 0; i <= array.lenght; i++){
        return console.log(array[i])
    }
}
```
4. 

```
var estudiante= {
  nombre: 'Oscar',
  apellido: 'Aguilar',
  edad: 21
}
const unaFuncion = (objeto) => {
  Object.values(objeto).forEach((elem) => {
    console.log(elem);
  });
};

unaFuncion(estudiante);
```
Estuvo algo complicado, puesto que el curso lo hice hace tiempo, sin embargo con forme avance me iba acordando.




