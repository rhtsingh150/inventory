'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    profession: DataTypes.STRING,
    profile_pic: DataTypes.STRING,
    gender: DataTypes.STRING,
    role: DataTypes.STRING,
    varified: DataTypes.STRING
  },{});
  
  User.associate = function(models) {
    // associations can be defined here
  };

  // User.classMethods = function(models) {
  //   validPassword = function(password) {
  //     return password == this.password;
  //   }
  // }

  // User.Instance.prototype.validPassword = function (password) {
  //   return User.password == this.password;
  // }
  // User.validPassword = function(password){
  //   return User.password == password;
  // }
  return User;
};