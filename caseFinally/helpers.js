
// const formulariosStatus = document.getElementById("SalariosStatus");

// formulariosStatus.addEventListener("submit", function(evt) {
//     evt.preventDefault();
//     mostrarSociedad();
// }, true);

// OBTENER LOS SALARIOS DE CADA UNO

const salariosAltaSociedad = hightSociety.map(
    function (personita) {
      return personita.salary;
    }
  );

  const salariosMediaSociedad = mediumSociety.map(
    function (personita) {
      return personita.salary;
    }
  );

  const salariosBajaSociedad = lowSociety.map(
    function (personita) {
      return personita.salary;
    }
  );

  function mostrarPromedioList(){
      const lista = document.getElementById("TipoStatus");
      const valueSociedad = lista.value;

      const promedioList = promedio(valueSociedad);
      const textList = document.getElementById("promedioList");
      return textList.innerText = `El valor del promedio de la Sociedad seleccionada es: ${promedioList}`;
  }


  function mostrarSociedad(){
    const sociedad = document.getElementById("TipoStatus");
    const valueSociedad = sociedad.value;

    const valorLista = document.getElementById("ValorListaSelect");
    return valorLista.innerText = `El valor de la lista es: ${valueSociedad}`;
  }



