const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id: {
      type: DataTypes.STRING(3),  // Código de tres letras
      allowNull: false,
      primaryKey: true,          // Clave primaria
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flagImage: {
      type: DataTypes.STRING,     // Imagen de la bandera
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING,     // Continente
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,     // Capital
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,     // Subregión
    },
    area: {
      type: DataTypes.FLOAT,     // Área
    },
    population: {
      type: DataTypes.INTEGER,   // Población
      allowNull: false,
    },
  },
  {timestamps: false});//Dice la fecha de creación
};