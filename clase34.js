const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const opts = {
    crossDomain: true
}
const onPeopleResponse = (person) => {
    console.log(`Hola yo soy ${person.name}`)
}

const getPersonaje = (id, callback) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(url, opts, (person) => {
        console.log(`Hola yo soy ${person.name}`)
        if(callback) {
            callback()
        }
    })
}

//getPersonaje(1,getPersonaje(2)) //se invoca primero 1 luego el 2
//sabemos el orden de ejecucion callback hell
getPersonaje(1, () => {
    getPersonaje(2, () => {
        getPersonaje(3, () => {
            getPersonaje(4, () => {
                getPersonaje(5, () => {
                    console.log('aqui se termina')
                })
            })
        })
    })
})

