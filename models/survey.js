module.exports = function(sequelize, DataTypes) {
  var Survey = sequelize.define("Survey", {
    breed: DataTypes.STRING,
    size: DataTypes.STRING,
    gender: DataTypes.STRING,
    location: DataTypes.STRING,
    age: DataTypes.STRING
  },
  {
    timestamps: true,
    freezeTableName: true
  });
  return Survey;
};
