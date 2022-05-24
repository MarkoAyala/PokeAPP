const {getBaseDatos} = require('./getDBPokemones');
const {getAplicacionInfo} = require('./getApiPokemones');


const getTodosLosPokemones = async ()=> {
    const aplicacionInfo = await getAplicacionInfo();
    const bdInfo = await getBaseDatos();
    const InfoTotal = aplicacionInfo.concat(bdInfo);
    return InfoTotal;
}

module.exports = {
    getTodosLosPokemones
}