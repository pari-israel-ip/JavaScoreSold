




let pairs = [
    [1,{name:"Nicolas"}],
    [2,{name:"Felipe"}],
    [3,{name:"Chanchito"}],
]

let array = [
    {
        id:1,
        name:'nicolas',
    },
    {
        id:2,
        name:'felipe',
    },
    {
        id:3,
        name:'chanchito',
    }];


    function toCollection(arr){

        
    let collection = [];
    for (idx in arr){
        let aumento = arr[idx];
        collection[idx] = aumento[1];
        collection[idx].id = aumento[0]; 
    }
    return collection;
    }

   

    let resultado = toCollection(pairs);
    console.log(resultado);