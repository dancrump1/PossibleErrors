module.exports = function (sequelize, DataTypes) {
  var Starter = sequelize.define("Starter", {
    livingSpace: DataTypes.STRING,
    yardSize: DataTypes.STRING,
    hoursAlone: DataTypes.STRING,
    otherPets: DataTypes.STRING,
    dogPersonality: DataTypes.STRING
  },
  {
    timestamps: true,
    freezeTableName: true
  });
  return Starter;
};
