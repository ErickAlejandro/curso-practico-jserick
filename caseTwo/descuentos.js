const precioOriginar = 120;
const descuento = 18;


function calcularPrecioConDescuento(precio, descuento){
    const procentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * procentajePrecioConDescuento)/100;

    return precioConDescuento;
}

// este es el evento o funcion la cual colocamos en el boton 

function onClickPriceDiscountAction(){
    const precio = document.getElementById("Precio");
    const descuento = document.getElementById("Descuento");

    const valuePrecio = precio.value;
    const valueDiscount = descuento.value;

    const calcularPrecioDescuento = calcularPrecioConDescuento(valuePrecio, valueDiscount);
    
    const resultPrice = document.getElementById("ResultPrice");
    return resultPrice.innerText = `El precio con el descuento es: $ ${calcularPrecioDescuento}`;
}

function descuentoConCupon(precio, cupon){
    const procentajePrecioConDescuento = 100 - cupon;
    const precioConCupon = (precio * procentajePrecioConDescuento)/ 100;

    return precioConCupon;
}


function onClickObtenerInformacionCupon(){
    const TipoCupon = document.getElementById("CuponesDescuento");
    const valorCupon =  TipoCupon.value;

    const precio = document.getElementById("Precio");
    const valueP = precio.value;

    const calculoDescuentoCupon = descuentoConCupon(valueP, valorCupon);
    const resultcalculoDescuentoCupon = document.getElementById("ResultPrice");
    return resultcalculoDescuentoCupon.innerText = `El precio con el descuento es: $ ${calculoDescuentoCupon}`;
}



// console.log({
//     precioOriginar,
//     descuento,
//     procentajePrecioConDescuento,
//     precioConDescuento,
// });