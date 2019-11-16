const Wrapper = require("./apiWrapper")
const wrapper = new Wrapper()
const logger = require("./logger")



const postPokemon = async function(id, name, type, height, weight) {
    logger.info(`Post user with id ${id}, name ${name}, type ${type}, height ${height}, weight ${weight}`)
    let arrayOfValues = [id, name, type, height, weight]
    let arrayOfAttr = ["id", "name", "type", "height", "weight"]
    let postPokemon = await wrapper.postPokemon(id, name, type, height, weight)
    logger.info(`Status Code: ${postPokemon.status}`)
    
    if(postPokemon.status != '200'){
        logger.warn(`Error: Status Code: ${postPokemon.status}, Body: ${postPokemon.body}`)
    }
    else{
        console.table(postPokemon.body)
    }
  }

//postPokemon("5400", "sosi", "name", "123123", "1444444")


