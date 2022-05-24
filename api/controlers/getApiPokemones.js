const axios = require('axios');
const {Tipe} = require('../src/db')

let creeTiposEnBS = false


const getAplicacionInfo = async ()=>{

    const primeraPagina = await axios.get('https://pokeapi.co/api/v2/pokemon');                // me traigo lo que contiene la url ---> contiene 20 items en .result y una prop . next que me lleva a los proximos 20 items
    const segundaPagina = await axios.get(primeraPagina.data.next); 
    const pokemones = primeraPagina.data.results.concat(segundaPagina.data.results)            // Hasta aca tengo un array con 40 items 
    // pokemones = array de objetos y en esos objetos url
   

    //Array de objetos
    const PokemonesProps = await Promise.all( 
        pokemones.map(async elemento=>{
            const pokemon = await axios.get(elemento.url);
            return{
                id: pokemon.data.id,
                img: pokemon.data.sprites.other.home.front_default,
                nombre: pokemon.data.name,
                vida: pokemon.data.stats[0].base_stat,
                ataque: pokemon.data.stats[1].base_stat,
                defensa: pokemon.data.stats[2].base_stat,
                velocidad: pokemon.data.stats[5].base_stat,
                altura: pokemon.data.height,
                peso: pokemon.data.weight,
                tipo: pokemon.data.types && pokemon.data.types.map(elemento=> elemento.type.name)
               
            }
        }) 
    ) 

    // Solucion al error de la ruta POST 
    if(!creeTiposEnBS){
        creeTiposEnBS = true
        const tiposApi = await axios.get('https://pokeapi.co/api/v2/type');
        const tiposArray = await tiposApi.data.results; // array de objetos y cada objeto contiene un NAME y una URL 
                                        
        tiposArray.forEach(puntero => { 
            Tipe.findOrCreate({
                where:{tipo : puntero.name}
            })
        })
    }

   return PokemonesProps;
   //Array de objetos con la info que preciso (40 pokemones)
}

module.exports = {
    getAplicacionInfo
}