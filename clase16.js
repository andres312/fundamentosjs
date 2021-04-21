let andres = {
    nombre: 'andres',
    apellido: 'rodriguez',
    edad: 35,
    peso: 75
}


console.log(`Al inicio del anio ${andres.nombre} pesa ${andres.peso}`)
const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANIO = 365
const META = andres.peso - 3;
let dias = 0;

const aumentarDePeso = (persona) => (persona.peso) += INCREMENTO_PESO
const disminuirDePeso = (persona) => (persona.peso) -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

while (andres.peso > META) {
    if (comeMucho()) {
        aumentarDePeso(andres)
    }

    if (realizaDeporte()) {
        disminuirDePeso(andres)
    }

    dias++;
}

console.log(`Pasaron ${dias} hasta que  ${andres.nombre} adelgazo 3kg`)
