function Persona (nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function () {
    console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function() {
    return this.altura > 1.8 
}

var andres = new Persona('andres', 'rodriguez', 1.68)
var erika = new Persona('Erika', 'Luna', 1.90)
var arturo = new Persona('Arturo', 'Martinez', 1.92)

arturo.soyAlto()