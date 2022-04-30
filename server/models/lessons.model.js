const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Lessons = sequelize.define(
  "lessons",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATEONLY,
    },
    title: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.INTEGER,
    },
  },
  { timestamps: false }
);

module.exports = Lessons;
