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
    $.
        get(url, opts, callback)
        .fail(() => {
            console.log(`an error ocurred can not get ${id}`)
        })
    }

//getPersonaje(1,getPersonaje(2)) //se invoca primero 1 luego el 2
//sabemos el orden de ejecucion callback hell
getPersonaje(1, (person) => {
    console.log(`Hola yo soy ${person.name}`)   
    
    getPersonaje(2, (person) => {
        console.log(`Hola yo soy ${person.name}`)   
        
        getPersonaje(3, (person) => {
            console.log(`Hola yo soy ${person.name}`)   
            
            getPersonaje(4, (person) => {
                console.log(`Hola yo soy ${person.name}`)   
                
                getPersonaje(5, (person) => {
                    console.log(`Hola yo soy ${person.name}`)   
                    
                    getPersonaje(6, (person) => {
                        console.log(`Hola yo soy ${person.name}`)   
                        
                        getPersonaje(7,  (person) => {
                            console.log(`Hola yo soy ${person.name}`) 
                        })     
                    })     
                })
            })    
        }) 
    })   
})
    


