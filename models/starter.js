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
  Starter.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Starter.hasMany(models.Recommendation, {
      onDelete: "cascade"
    });
  };
  return Starter;
};
