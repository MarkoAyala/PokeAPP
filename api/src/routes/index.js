const { Router } = require('express');
require('dotenv').config()
const router = Router();


const tipo = require('./RouterTipe.js');
const pokemones = require('./RouterPokemones.js');


router.use('/pokemons' , pokemones)
router.use('/types' , tipo);



module.exports = router;
