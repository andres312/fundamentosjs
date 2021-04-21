const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const opts = {
    crossDomain: true
}

const getPersonaje = (id) => {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
        $.
            get(url, opts, (data) => {
                resolve(data)
            })
            .fail(() => reject(id))
    })       
}

const onError = (id) => {
    console.log(`No se pudo obtener ${id}`)
}

async function  obtenerPersonajes (){
    let ids = [1, 2, 3, 4, 5, 6, 7]
    let promesas = ids.map( id => getPersonaje(id))
    
    try {
        let personajes = await Promise.all(promesas)
        console.log(personajes)
    } catch (id) {
        onError(id)
    }    
}

obtenerPersonajes()



