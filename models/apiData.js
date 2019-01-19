module.exports = function(sequelize, DataTypes) {
  var apiData = sequelize.define("apiData", {
    petBreed: DataTypes.STRING,
    petSize: DataTypes.STRING,
    petGender: DataTypes.STRING,
    petCity: DataTypes.STRING,
    petAge: DataTypes.STRING
  },
  {
    timestamps: true,
    freezeTableName: true
  });
  return apiData;
};



