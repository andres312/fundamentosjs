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


function esMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona) {
    console.log(`${persona.nombre} es:`)
    if (esMayorDeEdad(persona)) {
        console.log('mayor de edad')
    } else {
        console.log('menor de edad')
    }
}

imprimirSiEsMayorDeEdad(juan)
imprimirSiEsMayorDeEdad(andres)