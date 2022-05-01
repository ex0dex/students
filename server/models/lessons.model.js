const sequelize = require("../db");
const { DataTypes } = require("sequelize");
const Lesson_Students = require("./lesson_students");
const Students = require('../models/students.model');
const Teachers = require("./teachers.model");
const Lesson_Teachers = require("./lesson_teachers");

const Lessons = sequelize.define(
  "lessons",
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
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "date",
      autoIncrement: false
    },
    title: {
      type: DataTypes.CHAR(100),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "title",
      autoIncrement: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "0", 
      comment: null,
      primaryKey: false,
      field: "status",
      autoIncrement: false
    }
  },
  { timestamps: false }
);


Students.belongsToMany(Lessons, {through:Lesson_Students, foreignKey: 'lesson_id'})
Lessons.belongsToMany(Students,{through:Lesson_Students, foreignKey:"student_id"})

Lessons.belongsToMany(Teachers,{through:Lesson_Teachers, foreignKey:'teacher_id'})
Teachers.belongsToMany(Lessons, {through:Lesson_Teachers, foreignKey:'lesson_id'})

module.exports = Lessons;
