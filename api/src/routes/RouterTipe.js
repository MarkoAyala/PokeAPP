const { default: axios } = require('axios');
const {Tipe} = require('../db')
const router= require('express').Router();


router.get('', async(req,res)=> {
    /* const tiposApi = await axios.get('https://pokeapi.co/api/v2/type');
    const tiposArray = await tiposApi.data.results;
                                    
                                   
    tiposArray.forEach(puntero => {   
        Tipe.findOrCreate({
            where:{tipo : puntero.name}
        })
    }) */

    const tiposEnBD = await Tipe.findAll();
    res.send(tiposEnBD)
})

module.exports= router;