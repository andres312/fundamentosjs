class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar () {
        console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
    }

    soyAlto() {
        this.altura > 1.8 ? console.log('Soy alto') : console.log('soy chaparro')
    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }
    saludar () {
        console.log(`hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
    }
}

var andres = new Persona('andres', 'rodriguez', 1.68)
var arturo = new Desarrollador('Arturo', 'Martinez', 1.92)
andres.saludar()
arturo.saludar()
arturo.soyAlto()

