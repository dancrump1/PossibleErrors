module.exports = function(sequelize, DataTypes) {
  var Pets = sequelize.define("Pets", {
    pet_type: DataTypes.STRING,
    pet_breed: DataTypes.STRING,
    pet_age: DataTypes.INTEGER,
    pet_location: DataTypes.STRING,
  },
  {
    timestamps: true,
    freezeTableName: true
  });
  return Pets;
};
