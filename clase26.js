function heredaDe(prototipoHijo, prototipoPadre) {
    var fn = function () {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}
function Persona (nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function () {
    console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function() {
    this.altura > 1.8 ? console.log('Soy alto') : console.log('soy chaparro')
}

function Desarrollador (nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}

heredaDe(Desarrollador,Persona);

Desarrollador.prototype.saludar = function () {
    console.log(`hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
}

var andres = new Persona('andres', 'rodriguez', 1.68)
var arturo = new Desarrollador('Arturo', 'Martinez', 1.92)
andres.saludar()
arturo.saludar()
arturo.soyAlto()
/*
var andres = new Persona('andres', 'rodriguez', 1.68)
var erika = new Persona('Erika', 'Luna', 1.90)
var arturo = new Persona('Arturo', 'Martinez', 1.92)
*/