const { DataTypes, UUID, ENUM } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true, 
        
      },
    dificulted:{
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            min: 1,
            max: 5,
          },
    },
    duration:{
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          min: 1,
          max: 24,
        },
  
    },
    season:{
        type: DataTypes.ENUM("Verano", "Otoño","Invierno","Primavera"),
        allowNull: false,

    },

  });
};
