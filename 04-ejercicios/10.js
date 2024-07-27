/**
 * crear array de logitud n  que sus elemntos sean numeroos de 1 hasta n


*/

let longitud = 7777777;

function craerArray(n){

    if ( n < 0){
        return 'tiene que ser mayor a cero';
    }
    let idx = [];

    for(let i = 0 ; i < n ; i++){
      
        idx[i] = i + 1;
        
    }
    return idx;
    

}

let resulatado = craerArray(longitud);
console.log(resulatado);