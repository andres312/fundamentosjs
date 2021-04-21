var andres = {
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

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`)
    
    if (persona.ingeniero) {
        console.log(`Ingeniero`)
    } else {
        console.log('No es ingeniero')
    }

    if (persona.cocinero) {
        console.log(`cocinero`)
    }

    if (persona.cantante) {
        console.log(`cantante`)
    }

    if (persona.dj) {
        console.log(`dj`)
    }

    if (persona.guitarrista) {
        console.log(`guitarrista`)
    }

    if (persona.drone) {
        console.log(`Piloto drone`)
    }
    
}

function imprimirSiEsMayorDeEdad(persona) {
    console.log(`${persona.nombre} es:`)
    if(persona.edad >= 18) {
        console.log('mayor de edad')
    } else {
        console.log('menor de edad')
    }
}

imprimirProfesiones(andres)
imprimirSiEsMayorDeEdad(andres)