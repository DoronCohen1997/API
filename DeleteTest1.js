const Wrapper = require("./apiWrapper")
const wrapper = new Wrapper()
const logger = require("./logger")




const deletePokemon = async function(type, value) {
    let delete1 = await wrapper.deletePokemon(type, value)
    let ob = await wrapper.getPokemons(type, value)
    if(!(ob['body'] instanceof(Array)))
    {
        logger.info("Test Pass -> the pokemon with " + type + " and value " + value + " deleted")
    }
    else{
         logger.info("Test Fail -> the pokemon with type" + type + "and value" + value + " not deleted")

    }
}


    deletePokemon("doron", "")