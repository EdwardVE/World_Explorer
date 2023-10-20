const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define(
    "Activity",
    {
        id: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        autoIncrement: true,
        primaryKey: true, // Clave primaria
        },
        name: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        difficulty: {
        type: DataTypes.INTEGER, // Número del 1 al 5 para la dificultad
        allowNull: false,
        validate: {
          min: 1, // Valor mínimo de 1
          max: 5, // Valor máximo de 5
        },
    },
        duration: {
        type: DataTypes.FLOAT, // Duración en horas
    },
        season: {
        type: DataTypes.ENUM("Verano", "Otoño", "Invierno", "Primavera"), // Temporada
        allowNull: false,
    },
    },
    { timestamps: false }//Dice la fecha de creación
);
};