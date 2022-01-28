// PERIMETRO DE UN CUADRADO
console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log(`Los lados del cuadrado miden ${ladoCuadrado} cm`);

function perimetroCuadrado(lado){
    return lado * 4;
} 

// console.log(`El perimetrol del cuadrado es ${perimetroCuadrado} cm`);

function areaCuadrado(lado){
    return lado ** 2;
} 
// console.log(`El area del caudrado es ${areaCuadrado} cm^2`);

console.groupEnd();

// PERIMETRO DEL TRIANGULO

console.group("Triangulo");

// const ladoTriangulo = 4;
// const baseTriagulo = 3;
// console.log(`La base del triangulo mide ${baseTriagulo} cm y los lados ${ladoCuadrado} cm`);

function perimetroTriangulo(trianguloLadoA, trianguloLadoB, baseTriagulo){
    return (trianguloLadoA * trianguloLadoB) + baseTriagulo;
} 

// console.log(`El perimetro de un triangulo es ${perimetroTriangulo} cm`);

function areaTriangulo(ladoTrianguloA, ladoTrianguloB, baseTriagulo){
    if(ladoTrianguloA == ladoTrianguloB){
        return (ladoTrianguloA * baseTriagulo) / 2
    } else {
        var perimetro = (ladoTrianguloA + ladoTrianguloB + baseTriagulo) / 2;
        return Math.sqrt((perimetro * (perimetro - ladoTrianguloA) * (perimetro - ladoTrianguloB) * (perimetro - baseTriagulo)));
    }
} 
// console.log(`El area de una triangulo es ${areaTriangulo} cm^2`); 

function alturaTriangulo(ladoTriangulo, baseTriagulo){
    return Math.sqrt((ladoTriangulo ** 2) - ((baseTriagulo / 2) ** 2));
}

console.groupEnd();

// FORMULAS PARA EL CIRCULO

console.group("Circulo");

// const radioCirculo = 7;
// const diametroCirculo = radioCirculo * 2;
// const PI = Math.PI;

function perimetroCirculo(radioCirculo){
    return radioCirculo * Math.PI;
} 
// console.log(`El perimetro del circulo es ${perimetroCirculo}`);

function areaCirculo(radioCirculo){
    return Math.PI * (radioCirculo ** 2);
} 
// console.log(`El area del circulo es ${areaCirculo}`);

console.groupEnd();

// AQUI IRAN LAS FUNCIONES PARA EL FORMULARIO

// CALCULOS DEL CUADRADO

function calcularPerimetroCuadrado(){
    const lado = document.getElementById("cuadradoLado");
    const value = lado.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const lado = document.getElementById("cuadradoLado");
    const value = lado.value;

    const area = areaCuadrado(value);
    alert(area);
}

// CALCULOS DE ACUERDO AL TRIANGULO 

function calcularPerimetroTriangulo(){
    const ladoA = document.getElementById("trianguloLadoA");
    const ladoB = document.getElementById("trianguloLadoB");
    const base = document.getElementById("trianguloBase");

    const valueLA = Number(ladoA.value);
    const valueLB = Number(ladoB.value);
    const valueB = Number(base.value);

    const perimetro = perimetroTriangulo(valueLA, valueLB, valueB);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const ladoA = document.getElementById("trianguloLadoA");
    const ladoB = document.getElementById("trianguloLadoB");
    const base = document.getElementById("trianguloBase");

    const valueLA = Number(ladoA.value);
    const valueLB = Number(ladoB.value);
    const valueB = Number(base.value);

    const area = areaTriangulo(valueLA, valueLB, valueB);
    alert(area);
}

function calcularAltura(){
    const base = document.getElementById("trianguloBase");
    const lado = document.getElementById("trianguloLadoA");

    const valuB = Number(base.value);
    const valueL = Number(lado.value);

    const altura = alturaTriangulo(valueL, valuB);
    alert(altura);
}

// CALCULOS DEL CIRCULO 

function calcularPerimetroCirculo(){
    const radio = document.getElementById("radioCirculo");
    const value = radio.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const radio = document.getElementById("radioCirculo");
    const value = radio.value;

    const area = areaCirculo(value);
    alert(area);
}

