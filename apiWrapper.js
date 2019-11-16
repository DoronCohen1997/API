const ApiManager = require("./apiManager")
const apiManager = new ApiManager()


class RealWrapper{

 // Recieve type ("id"/"name"/"username"/"email") and value (number or string)
  // Return an object with a key of "status" (status code) and a key of "body" (array of objects with the filtered users)
  async getPokemons(type, value){
    const response = await apiManager.getPokemons(type, value)
    return response
  }
  
  async postPokemon(id, name, type, height, weight){
        const response = await apiManager.postPokemon(id, name, type, height, weight)
        return response
      }

  async putPokemon(type, value, changedType, changedValue){
            const response = await apiManager.putPokemon(type, value, changedType, changedValue)
            return response
          }

   async deletePokemon(type, value){
                const response = await apiManager.deletePokemon(type, value)
                return response
              }
}

module.exports = RealWrapper