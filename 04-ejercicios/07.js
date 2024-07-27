/**
 * crear algiritmos que devuelva el precio del producto mas impuesto
 */

// function precioCompleto(precio,impuesto){

//     montototal = precio * impuesto;



//    return precio + montototal;


// }
// let resultado = precioCompleto(19.90,0.15);
// console.log(resultado);


function precioCompleto(precio,impuesto){

    return precio + precio * impuesto;

}
let resultado = precioCompleto(19.90,0.15);
console.log(resultado);