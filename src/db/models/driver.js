'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Driver extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Driver.init({
    name: {
      type: DataTypes.STRING,
      allowNull:false,                             //improve the attributes description
      unique:true
    },
    team: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    number: {
      type:DataTypes.INTEGER,
      allowNull:false,
      unique:true
    }
}, {
    sequelize,
    modelName: 'Driver',
  });
  return Driver;
};