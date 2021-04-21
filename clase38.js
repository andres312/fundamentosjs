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

let ids = [1, 2, 3, 4, 5, 6, 7]
let promesas = ids.map( id => getPersonaje(id))
Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)

// promesas en orden

