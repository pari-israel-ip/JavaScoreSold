/*
crear algoritmo que devuelva numero
menor y mayor de un array
*/
// let array = [2,5,7,15,-5,-100,55]
// function getMenorMayor(arr){

//     return arr.sort((a,b) => a - b)
// }
// let numeros = getMenorMayor(array);
// console.log(numeros[0],numeros[6])


//  let array1 = [2,5,7,15,-5,-100,55]
//  let menor;
//  let mayor;


// for(let i=0;i<array1.length;i++){

//      if(i==0){
//     mayor = array1[0];
//      menor = array1[0];
//         }

//     if(i>0){
//         if(mayor <array1[i]){
//             mayor =array1[i]
//         }

//         if(menor >array1[i]){
//             menor =array1[i]
//         }

//     }
// }

// console.log("El número mayor del arreglo es:", mayor);
// console.log("El número menor del arreglo es:", menor);


let array2 = [2,5,7,15,-5,-100,55]

function getMenor(arr2){
    let menor = arr2[0];
    let mayor= arr2[0];
    for(numero of arr2){

        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? mayor : numero;

    }
    return [menor,mayor];

}

let numerooo = getMenor (array2)
console.log(numerooo);