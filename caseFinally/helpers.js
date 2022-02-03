
// const formulariosStatus = document.getElementById("SalariosStatus");

// formulariosStatus.addEventListener("submit", function(evt) {
//     evt.preventDefault();
//     mostrarSociedad();
// }, true);




  function mostrarSociedad(){
    const sociedad = document.getElementById("TipoStatus");
    const valueSociedad = sociedad.value;

    const valorLista = document.getElementById("ValorListaSelect");
    return valorLista.innerText = `El valor de la lista es: ${valueSociedad}`;
  }






