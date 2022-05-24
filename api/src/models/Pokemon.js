const sequelize = require("sequelize");
const { DataTypes, Model } = require("sequelize");


module.exports = (sequelize) => {
  class Pokemon extends Model {}
  Pokemon.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      img:{
        type: DataTypes.STRING,
        allowNull:true,
        get(){
          return this.getDataValue('img') || 'https://img-16.ccm2.net/_SqzzXVDSG50FWb_UBrCl3XwV78=/440x/1685e17045e747a899925aa16189c7c6/ccm-encyclopedia/99776312_s.jpg'
        }
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vida: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ataque: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      defensa: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      velocidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      altura: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      peso: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      creado:{
        type: DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:true,
      }
    },
    { sequelize, modelName: "animal" }
  );
};

// la conexion a sequelize.


/* module.exports = (sequelize) => {
  sequelize.define('animal', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      img:{
        type: DataTypes.STRING,
        allowNull:true,
        get(){
          return this.getDataValue('img') || 'https://img-16.ccm2.net/_SqzzXVDSG50FWb_UBrCl3XwV78=/440x/1685e17045e747a899925aa16189c7c6/ccm-encyclopedia/99776312_s.jpg'
        }
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vida: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ataque: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      defensa: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      velocidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      altura: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      peso: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      creado:{
        type: DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:true,
      }
  });
}; */
