module.exports = function (sequelize, Sequelize) {

  var User = sequelize.define("user", {

    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    firstname: {
      type: Sequelize.STRING,
      notEmpty: true
    },

    lastname: {
      type: Sequelize.STRING,
      notEmpty: true
    },

    username: {
      type: Sequelize.TEXT
    },

    about: {
      type: Sequelize.TEXT
    },

    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true
      }
    },

    password: {
      type: Sequelize.STRING,
      allowNull: false
    },

    lastLogin: {
      type: Sequelize.DATE
    },

    active: {
      type: Sequelize.BOOLEAN,
      defaultValue: 1
    }


  });

  return User;

};