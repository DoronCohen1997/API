const Wrapper = require("./apiWrapper")
const wrapper = new Wrapper()
const logger = require("./logger")



const putPokemon = async function(type, value, changedType, changedValue) {
    logger.info(`Put user with type ${type}, value ${value}, changedType ${changedType}, changedValue ${changedValue}`)
    let putPokemon = await wrapper.putPokemon(type, value, changedType, changedValue)
    logger.info(`Status Code: ${putPokemon.status}`)
    
    if(putPokemon.status != '200'){
        logger.warn(`Error: Status Code: ${putPokemon.status}, Body: ${putPokemon.body}`)
    }
    else{
        console.table(putPokemon.body)
    }
  }

putPokemon("id", "2700", "height", "900")