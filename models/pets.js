module.exports = function(sequelize, DataTypes) {
  var Pets = sequelize.define("Pets", {
    petType: DataTypes.STRING,
    petBreed: DataTypes.STRING,
    petAge: DataTypes.INTEGER,
    petLocation: DataTypes.STRING,
  },
  {
    timestamps: true,
    freezeTableName: true
  });
  return Pets;
};
