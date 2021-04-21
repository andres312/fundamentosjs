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

//sabemos el orden de ejecucion callback hell
getPersonaje(1)
    .then((person) => {
        console.log(`Hola yo soy ${person.name}`)
    })
    .catch(onError)
    


