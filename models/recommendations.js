module.exports = function (sequelize, DataTypes) {
  var Recommendation = sequelize.define("Recommendation", {
    recommendation: DataTypes.STRING
  },
  {
    timestamps: true,
    freezeTableName: true
  });
  Recommendation.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Recommendation.belongsTo(models.Starter, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Recommendation;
};