const Wrapper = require("./apiWrapper")
const wrapper = new Wrapper()
const logger = require("./logger")




const deletePokemon = async function(type, value) {
    console.log(`Delete user with type ${type}, value ${value}`)
    let deletePokemon = await wrapper.deletePokemon(type, value)
    let ob = await wrapper.getPokemons(type, value)
    logger.info(`Status Code: ${deletePokemon.status}`)
    
    if(deletePokemon.status != '200'){
        logger.error(`Error: Status Code: ${deletePokemon.status}, Body: ${deletePokemon.body}`)
    }
    else{
        logger.info("Test Pass -> the pokemon with " + type + " and value " + value + " deleted")
    }
  }

deletePokemon("id1", "0")