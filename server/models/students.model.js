const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Students = sequelize.define(
  "students",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id",
      autoIncrement: true
    },
    name: {
      type: DataTypes.CHAR(10),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "name",
      autoIncrement: false
    }
  },
  { timestamps: false }
);

module.exports = Students;