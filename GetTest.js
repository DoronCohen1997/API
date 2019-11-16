const Wrapper = require("./apiWrapper")
const wrapper = new Wrapper()
const logger = require("./logger")



const getPokemons = async function(type, value) {
    logger.info(`Get user with type ${type} = ${value}`)
    let getPokemons = await wrapper.getPokemons(type, value)
    logger.info(`Status Code: ${getPokemons.status}`)
    
    if(getPokemons.status != '200'){
        logger.error(`Error: Status Code: ${getPokemons.status}, Body: ${getPokemons.body}`)
    }
    else{
        console.table(getPokemons.body)
    }
  }


getPokemons("id" , "2700")