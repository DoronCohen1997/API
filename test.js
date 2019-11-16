const Wrapper = require("./apiWrapper")
const wrapper = new Wrapper()


const getPokemons = async function(type, value) {
    console.log(`Get user with type ${type} = ${value}`)
    let getPokemons = await wrapper.getPokemons(type, value)
    console.log(`Status Code: ${getPokemons.status}`)
    
    if(getPokemons.status != '200'){
        console.error(`Error: Status Code: ${getPokemons.status}, Body: ${getPokemons.body}`)
    }
    else{
        console.table(getPokemons.body)
    }
  }


getPokemons("id", "2")