//Personajes de Tv

let nombre = "Tanjiro";
let anime = "Emon Slayer";
let edad = 16;

let personaje = {
    nombre: "Tanjiro",
    anime:"Emon Slayer",
    edad:16,
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime'])
console.log()


personaje.edad= 13;


let llave = ' edad';

personaje[llave] = 16;


delete personaje.anime;
console.log(personaje);
