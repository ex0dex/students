const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Students = sequelize.define(
  "students",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false }
);

module.exports = Students;