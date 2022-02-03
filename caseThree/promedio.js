function calcularMediaAritmetica(lista) {

  const sumaLista = lista.reduce(function (elementoSumar = 0, nuevoElemento) {
    return elementoSumar + nuevoElemento;
  });

  const promedio = sumaLista / lista.length;
  return promedio;
}

// METODO ESPECIAL PARA LA MEDIANA

function calcularMediana(listaCalcular) {
  const listaOrdenada = listaCalcular.sort(function (
    firstelement,
    secondElement
  ) {
    return firstelement - secondElement;
  });

  const mitadLista = parseInt(listaOrdenada.length / 2);

  function esParONo(numero) {
    if (numero % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  if (esParONo(listaOrdenada.length)) {
    const element1 = listaOrdenada[mitadLista - 1];
    const element2 = listaOrdenada[mitadLista];

    const promedioElementos = calcularMediaAritmetica([element1, element2]);
    var mediana = promedioElementos;
  } else {
    var mediana = listaOrdenada[mitadLista];
  }

  return mediana;
}

// CALCULO DE LA MODA

function calcularModa(list) {
  const list1Count = {};

  list.map(function (element) {
    if (list1Count[element]) {
      list1Count[element] += 1;
    } else {
      list1Count[element] = 1;
    }
  });

  const list1Array = Object.entries(list1Count).sort(function (
    elementStill,
    elementNew
  ) {
    return elementStill[1] - elementNew[1];
  });

  const moda = list1Array[list1Array.length - 1];
  return moda;
}
