/**
 * crear algoritmo que devuela solo la cantidad de positivos de un array
 */

// let array = [2,5,7,15,-5,-100,55]
// function cuantosPositivos(arr){

//     return arr.filter(numero => numero > 0 )
// }
// let resultado = cuantosPositivos(array);
// console.log(resultado);


let array1 = [2,5,7,15,-5,-100,55]
function cuantosPositivos(arr){

    let cantidad = 0 ;
    for ( elemnto of arr){
        if (elemnto > 0)
        {
            cantidad ++;
        }
    }
    return cantidad;


}
let resultado1 = cuantosPositivos(array1);
console.log(resultado1);
