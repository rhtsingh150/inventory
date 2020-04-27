'use strict';
module.exports = (sequelize, DataTypes) => {
  const Technology = sequelize.define('Technology', {
    name: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  Technology.associate = function(models) {
    // associations can be defined here
  };
  return Technology;
};