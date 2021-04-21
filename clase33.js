const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const opts = {
    crossDomain: true
}
const onPeopleResponse = (person) => console.log(`Hola yo soy ${person.name}`)

const getPersonaje = (id) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(url, opts, onPeopleResponse)
}

// no sabemos en que orden van a llegar las respuestas
getPersonaje(1)
getPersonaje(2)
getPersonaje(3)