var andres = {
    nombre: 'Andres',
    apellido: 'Rodriguez',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

const ALTA =1.80
var personas = [andres, alan, martin, dario, vicky, paula]
//console.log(personas);

const esAlta = ({altura}) => altura > ALTA
const esBaja = ({altura}) => altura < ALTA

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)
/*var personasAltas = personas.filter(
    function (persona) {
        return persona.altura > ALTA
    }
)
*/
console.log(personasAltas)
console.log(personasBajas)