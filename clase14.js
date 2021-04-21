let andres = {
    nombre: 'andres',
    apellido: 'rodriguez',
    edad: 35,
    ingeniero: false,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: false,
    drone: false
}

let juan = {
    nombre: 'juan',
    edad: 16
}

const MAYORIA_DE_EDAD = 18;

const esMayorDeEdad = ({edad})  => edad >= MAYORIA_DE_EDAD

/*
const esMayorDeEdad = persona  => persona.edad >= MAYORIA_DE_EDAD

const esMayorDeEdad = persona  => {
    return persona.edad >= MAYORIA_DE_EDAD
}

const esMayorDeEdad = (persona)  => {
    return persona.edad >= MAYORIA_DE_EDAD
}

const esMayorDeEdad = function(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}
*/

function imprimirSiEsMayorDeEdad(persona) {
    console.log(`${persona.nombre} es:`)
    if (esMayorDeEdad(persona)) {
        console.log('mayor de edad')
    } else {
        console.log('menor de edad')
    }
}

const permitirAcceso = ({edad}) => !esMayorDeEdad({edad}) ? console.log('Acceso denegado') : console.log('Acceso autorizado')

permitirAcceso(juan)
permitirAcceso(andres)