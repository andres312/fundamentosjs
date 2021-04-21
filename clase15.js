let andres = {
    nombre: 'andres',
    apellido: 'rodriguez',
    edad: 35,
    peso: 75
}

console.log(`Al inicio del anio ${andres.nombre} pesa ${andres.peso}`)
const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANIO = 365
const aumentarDePeso = (persona) => (persona.peso) += INCREMENTO_PESO
const disminuirDePeso = (persona) => (persona.peso) -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_ANIO; i++) {
    var random = Math.random()
/*
random = 0.043234
random = 0.5423276
random = 0.998312
*/
    if (random < 0.25) {
        aumentarDePeso(andres)
    } else if (random < 0.5){
       disminuirDePeso(andres)
    }
}


console.log(`Al final del anio ${andres.nombre} pesa ${andres.peso.toFixed(1)}`)