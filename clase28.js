class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar (fn) {
        let {nombre, apellido} = this
        //nombre = this.nombre
        //apellido = this.apellido
        console.log(`hola, me llamo ${nombre} ${apellido}`)
        if (fn) {
            fn(nombre, apellido)
        }
    }

    soyAlto() {
        this.altura > 1.8 ? console.log('Soy alto') : console.log('soy chaparro')
    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }
    saludar (fn) {
        let {nombre, apellido} = this
        console.log(`hola, me llamo ${nombre} ${apellido} y soy desarrollador`)
        if (fn) {
            fn(nombre, apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen dia ${nombre} ${apellido}`)
    if (esDev) {
        console.log(`No sabia que eras desarrollador/a`)
    }
}

var andres = new Persona('andres', 'rodriguez', 1.68)
var erika = new Persona('Erika', 'Luna', 1.65)
var arturo = new Desarrollador('Arturo', 'Martinez', 1.92)
andres.saludar()
erika.saludar(responderSaludo)
arturo.saludar(responderSaludo)

