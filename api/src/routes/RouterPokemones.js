const { default: axios } = require('axios');
const {getTodosLosPokemones} = require('../../controlers/getTodosP')
const {Animal , Tipe} = require('../db')
const router= require('express').Router();



router.get('' , async (req ,res) => {
    const name = req.query.name;                
    let pokemones = await getTodosLosPokemones();
    if(name){
        let pokemonNombre = pokemones.filter(e => e.nombre.toLowerCase().includes(name.toLowerCase()))
        console.log(pokemonNombre)
        if(pokemonNombre.length){
            return res.status(200).send(pokemonNombre)
        }  
        try{
            let endpoint = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            let poke =  {
                id:  endpoint.data.id,
                img:  endpoint.data.sprites.other.home.front_default,
                nombre:  endpoint.data.name,
                vida:  endpoint.data.stats[0].base_stat,
                ataque:  endpoint.data.stats[1].base_stat,
                defensa:  endpoint.data.stats[2].base_stat,
                velocidad:  endpoint.data.stats[5].base_stat,
                altura:  endpoint.data.height,
                peso:  endpoint.data.weight,
                tipo:  endpoint.data.types && endpoint.data.types.map(elemento=> elemento.type.name)
               
            }
            endpoint = [poke]
            console.log(endpoint)
            return res.status(200).send(endpoint)
        }catch(error){
            console.log(error)
        }
       
        
    } else {
        res.status(200).send(pokemones)
    }
})



router.get('/:id', async (req,res)=> {
    const {id} = req.params;
    const pokemones = await getTodosLosPokemones();
    if(id){
        let pokemonId = await pokemones.filter(elemento => elemento.id == id);
        pokemonId.length? res.status(200).json(pokemonId) : res.status(404).send('No existe ese personaje');
    }
})


router.delete('/:id', async (req, res)=>{
    try{
       const {id} = req.params;
       res.json(await Animal.destroy({
            where: {id} 
       }))
    } catch(error){
        console.log(error)
    }
})



router.post('', async (req,res) => {
    let {
        nombre,
        img,
        vida,
        ataque,
        defensa,
        velocidad,
        altura,
        peso,
        tipo,
        creado
    } = req.body

    let tipoDB = await Tipe.findAll({
        where: {tipo : tipo }
    })
    
    if(tipoDB[0]!== undefined){
        let pokemonCreado = await Animal.create({
            img,
            nombre,
            vida,
            ataque,
            defensa,
            velocidad,
            altura,
            peso,
            creado
        })
        pokemonCreado.addTipe(tipoDB);
        res.send('Pokemon creado correctamente!')
    } else {
        res.status(404).send('El tipo que le quiere asignar al pokemon, no existe') // autenticacion 
    }
   
})



// filtro de Z-A desde el back

/* router.get('/abc/order' , async (req ,res) => {                
    let pokemones = await getTodosLosPokemones();
    let pokemonAtack =  pokemones.sort(function (a, b) {
            if (a.ataque > b.ataque) {
              return -1;
            }
            if (b.ataque > a.ataque) {
              return 1;
            }
            return 0;
          });
         
        pokemonAtack? res.status(200).send(pokemonAtack) : res.status(404).send('No se pudieron cargar los pokemones') 
}) */


module.exports = router;