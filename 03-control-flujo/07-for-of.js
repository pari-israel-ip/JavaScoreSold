//while
//do while
//for

// let animales = ['Chanchito','Dragon','Perrito'];

// for (let animal of animales)
// {
//     console.log(animal);
// }


// let i = 0;
// while (i < animales.length){

//     console.log(animales[i]);
//     i++;
// }

// let orden = [88, 5, 6, 15, -5, -239, 44];

// function ordenarMayoryMenor(arr){
   
// //return arr.sort((a, b) => a - b)
// //return arr.filter(numero => numero > 0)
   
        
// }

// let resultado = ordenarMayoryMenor(orden);
// console.log(resultado);

function precio(precio,impuesto){
    let impuestototal = precio * impuesto;
    let total = precio + impuestototal;
    return total;
}

let resultado =precio(19.90,0.15);
console.log(resultado);
