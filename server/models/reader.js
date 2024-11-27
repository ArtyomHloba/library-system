'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Reader extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Reader.hasMany(models.Issue, {
        foreignKey: 'readerId',
        as: 'issues'
      })
    }
  }
  Reader.init(
    {
      name: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Reader'
    }
  )
  return Reader
}
