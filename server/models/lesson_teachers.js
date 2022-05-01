const sequelize = require("../db");
const { DataTypes } = require("sequelize");
const Teachers = require("../models/teachers.model");
const Lessons = require("./lessons.model");

const Lesson_Teachers = sequelize.define(
  "lesson_teachers",
  {
    lesson_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "lesson_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "lessons_model"
      }
    },
    teacher_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "teacher_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "teachers_model"
      }
    }
  },
  { timestamps: false }
);


module.exports = Lesson_Teachers;
