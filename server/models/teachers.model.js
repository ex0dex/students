const sequelize = require("../db");
const { DataTypes } = require("sequelize");
const Lesson_Teachers = require("./lesson_teachers");
const Lesson_Students = require("./lesson_students");
const Lessons = require("./lessons.model");

const Teachers = sequelize.define(
  "teachers",
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
  { timestamps: false },

);

module.exports = Teachers;
