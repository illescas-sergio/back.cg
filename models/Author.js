const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  
  sequelize.define("Author", {
    dni: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};