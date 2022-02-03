// CALCULO GENERAL DEL PROMEDIO

// CALCULO GENERAL
function promedio(list) {
  const sumatoria = list.reduce(function (elementStill = 0, elementNew) {
    return elementStill + elementNew;
  });

  const promedioGeneral = sumatoria / list.length;
  return promedioGeneral;
}

// OBTENER LOS SALARIOS DE CADA UNO

const salariosAltaSociedad = hightSociety.map(function (personita) {
  return personita.salary;
});

const salariosMediaSociedad = mediumSociety.map(function (personita) {
  return personita.salary;
});

const salariosBajaSociedad = lowSociety.map(function (personita) {
  return personita.salary;
});

function mostrarPromedioList() {
  const Element = document.getElementById("TipoStatus");
  const valueElement = Element.value;
  if (valueElement === "1") {
    const promedioList = promedio(salariosAltaSociedad);
    const textList = document.getElementById("ResultPromedio");
    return (textList.innerText = `El valor del promedio de la Sociedad seleccionada es: ${promedioList}`);
  } else if (valueElement === "2") {
    const promedioList = promedio(salariosMediaSociedad);
    const textList = document.getElementById("ResultPromedio");
    return (textList.innerText = `El valor del promedio de la Sociedad seleccionada es: ${promedioList}`);
  } else {
    const promedioList = promedio(salariosBajaSociedad);
    const textList = document.getElementById("ResultPromedio");
    return (textList.innerText = `El valor del promedio de la Sociedad seleccionada es: ${promedioList}`);
  }
}

// CALCULOS PARA LA MEDIANA

// ORDENAR LA LISTA
const listSortyHightSociety = salariosAltaSociedad.sort(function (
  salaryA,
  salaryB
) {
  return salaryA - salaryB;
});

const listSortyMediumtSociety = salariosMediaSociedad.sort(function (
  salaryA,
  salaryB
) {
  return salaryA - salaryB;
});

const listSortyLowtSociety = salariosBajaSociedad.sort(function (
  salaryA,
  salaryB
) {
  return salaryA - salaryB;
});

// MITAD DE CADA LISTA PARA LA MEDIANA
const mitadHight = parseInt(hightSociety.length / 2);
const mitadMedium = parseInt(mediumSociety.length / 2);
const mitadLow = parseInt(lowSociety.length / 2);

// CALCULO GENERAL PARA ENCONTRAR LA MEDIA

function esParoNO(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// CALCULO DE LA MEDIANA GENERAL
function calculoMediana(lista) {
      if (esParoNO(lista.length)) {
        const mitad1 = lista[mitadHight - 1];
        const mitad2 = lista[mitadHight];

        const mediana = promedio([mitad1, mitad2]);
        return mediana;
      } else {
        const mitadTotal = lista[mitadHight];
        return mitadTotal;
      }
}

// MOSTAR LA MEDIANA

function mostrarMediana(){
  const Element = document.getElementById("TipoStatus");
  const valueElement = Element.value;
  if (valueElement === "1") {
    const medianaList = calculoMediana(salariosAltaSociedad);
    const textList = document.getElementById("ResultMediana");
    return (textList.innerText = `El valor del mediana de la Sociedad seleccionada es: ${medianaList}`);
  } else if (valueElement === "2") {
    const medianaList = calculoMediana(salariosMediaSociedad);
    const textList = document.getElementById("ResultMediana");
    return (textList.innerText = `El valor del mediana de la Sociedad seleccionada es: ${medianaList}`);
  } else {
    const medianaList = calculoMediana(salariosBajaSociedad);
    const textList = document.getElementById("ResultMediana");
    return (textList.innerText = `El valor del mediana de la Sociedad seleccionada es: ${medianaList}`);
  }
}
