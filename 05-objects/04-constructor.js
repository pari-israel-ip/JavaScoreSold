// {id: 1, recuperarClave: function(){}}

function Usuario(){
    this.id = 1;
    this.recuperarClave = function(){ //Esta dejan de ser funciones y pasan a ser metodos
        console.log('recuperando clave...');

    }
}

let usuario = new Usuario(); 

console.log(usuario);


