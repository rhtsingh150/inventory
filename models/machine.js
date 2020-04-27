'use strict';
module.exports = (sequelize, DataTypes) => {
  const Machine = sequelize.define('Machine', {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    technologyId: DataTypes.STRING
  }, {});
  Machine.associate = function(models) {
    // associations can be defined here
  };
  return Machine;
};