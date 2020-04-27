'use strict';
module.exports = (sequelize, DataTypes) => {
  const Part = sequelize.define('Part', {
    sapcode: DataTypes.STRING,
    name: DataTypes.STRING,
    returnable: DataTypes.STRING,
    image: DataTypes.STRING,
    quantity: DataTypes.STRING,
    machineId: DataTypes.STRING
  }, {});
  Part.associate = function(models) {
    // associations can be defined here
  };
  return Part;
};