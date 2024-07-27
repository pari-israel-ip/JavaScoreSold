function getbyIdx(arr,idx){

    // if( idx !== 0   )
    // {
    //     return arr;
    // }else{
    //     return 'no valido';
    // }
   
    if(idx<0){
        console.log("el indice debe ser mayor a 0");
    }

    else if(idx > arr.length - 1 ){
        console.log("El indice no exite")
    }
    else{
        return arr[idx];
    }

}

let resultado = getbyIdx([1,2],3);
console.log(resultado);