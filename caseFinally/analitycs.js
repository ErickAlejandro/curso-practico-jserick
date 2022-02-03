
// CALCULO GENERAL DEL PROMEDIO




// CALCULO GENERAL
function promedio(list){
    const sumatoria = list.reduce(function(elementStill = 0, elementNew){
        return elementStill + elementNew;
    });

    const promedioGeneral = sumatoria / list.length;
    return promedioGeneral;
}


// CALCULOS PARA LA MEDIANA



// MITAD DE CADA LISTA PARA LA MEDIANA
const mitadHight = parseInt(hightSociety.length / 2);
const mitadMedium = parseInt(mediumSociety.length / 2);
const mitadLow = parseInt(lowSociety.length / 2);