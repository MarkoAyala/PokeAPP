const {Animal , Tipe} = require('../src/db')

const getBaseDatos = async () => {
    return await Animal.findAll({
    include:{
         model: Tipe,
         attributes: ['tipo'],
         through: {
             attributes:[],
         },
    }
    })
}

module.exports = {
    getBaseDatos
}