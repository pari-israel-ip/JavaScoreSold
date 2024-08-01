


function crearUsuario(name,email){
    return{ 
        email,
        name,
        activo: true,
        recuperaClave: function (){
            console.log('recuperando clave..');
        },
    };
}


let user1 = crearUsuario('Israel','israelpr2020@mail.com');

let user2 = crearUsuario('Pari','goshy.hex@mail.com');

console.log(user1,user2);