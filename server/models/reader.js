'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reader extends Model {
    static associate (models) {
      Reader.hasMany(models.Issue, {
        foreignKey: 'readerId',
        as: 'issues',
      });
    }
  }
  Reader.init(
    {
      name: DataTypes.STRING,
      phoneNumber: DataTypes.STRING, // Added phoneNumber field
    },
    {
      sequelize,
      modelName: 'Reader',
    }
  );
  return Reader;
};
