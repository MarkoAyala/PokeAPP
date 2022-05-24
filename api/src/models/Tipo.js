const sequelize = require("sequelize");
const { DataTypes, Model } = require("sequelize");


module.exports = (sequelize) => {
  class Tipo extends Model {}
  Tipo.init({
    tipo: {
        type: DataTypes.STRING,
        allowNull:false,
    }
  }, {sequelize , modelName: 'tipe'})
};









































