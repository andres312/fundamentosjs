const andres = {
    nombre: 'andres',
    edad: 35,
}

//se modifica persona
function cumpleanos(persona) {
    persona.edad += 1
}

//no modifica edad
function cumpleanosEdad(edad) {
    edad += 1
}

//regresa nuevo objeto copiando atributos
function cumpleanosPersonaNueva(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }
}
const andresMasViejo = cumpleanosPersonaNueva(andres);
console.log(andres);
console.log(andresMasViejo);