'use strict';
module.exports = (sequelize, DataTypes) => {
  const Timeline = sequelize.define('Timeline', {
    userId: DataTypes.STRING,
    partId: DataTypes.STRING,
    action: DataTypes.STRING,
    quantity: DataTypes.STRING,
    message: DataTypes.STRING
  }, {});
  Timeline.associate = function(models) {
    // associations can be defined here
  };
  return Timeline;
};