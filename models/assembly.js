'use strict';
module.exports = (sequelize, DataTypes) => {
  const Assembly = sequelize.define('Assembly', {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    machineId: DataTypes.STRING
  }, {});
  Assembly.associate = function(models) {
    // associations can be defined here
  };
  return Assembly;
};