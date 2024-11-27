'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Issue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Issue.belongsTo(models.Book, {
        foreignKey: 'bookId',
        as: 'book',
      });

      Issue.belongsTo(models.Reader, {
        foreignKey: 'readerId',
        as: 'reader',
      });
    }
  }
  Issue.init(
    {
      issueDate: DataTypes.DATEONLY,
      bookId: DataTypes.INTEGER,
      readerId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Issue',
    }
  );
  return Issue;
};
