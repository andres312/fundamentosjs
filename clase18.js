var signo = prompt('Cual es tu signo');

switch (signo) {
    case 'geminis' : 
    case 'géminis':
    case 'GEMINIS':
        console.log('Aprenda que no conseguirá nada si no empieza a luchar por lo que quiere. No se agote en el intento, siempre los resultados justifican los esfuerzos.');
        break;
    case 'aries':
        console.log('No pierda tiempo en cosas que no valen la pena y empiece a pensar en su futuro. Aproveche esta nueva etapa para innovar y cambiar de rumbo su vida cotidiana.')
        break; 
    case 'acuario':
        console.log('Relájese, ya que su visión lo ayudará a descubrir la verdad que usted no ve a simple vista. Desconfíe de aquellos que repentinamente le ofrecen todo tipo de ayuda.')
        break;       
    case 'capricornio':
        console.log('Procure manejar las cuestiones profesionales con mayor racionalidad en la vida. Sepa que necesitará ser más sensato en el análisis de su situación laboral.')
        break;
    default:
        console.log(`Escriba en minusculas el signo sodiacal. ${signo} no es un signo sodiacal`)
        break
}