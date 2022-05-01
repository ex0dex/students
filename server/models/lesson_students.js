const sequelize = require("../db");
const { DataTypes } = require("sequelize");
const Teachers = require("../models/teachers.model");
const Lessons = require("./lessons.model");

const Lesson_Students = sequelize.define(
  "lesson_students",
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
      student_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
        comment: null,
        primaryKey: false,
        field: "student_id",
        autoIncrement: false,
        references: {
          key: "id",
          model: "students_model"
        }
      },
      visit: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null,
        comment: null,
        primaryKey: false,
        field: "visit",
        autoIncrement: false
      }
  },
  { timestamps: false }
);


module.exports = Lesson_Students;
