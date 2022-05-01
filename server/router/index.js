const express = require("express");
const router = express.Router();
const Lessons = require('../models/lessons.model');
const Lesson_Students = require("../models/lesson_students");
const Lesson_Teachers = require("../models/lesson_teachers");
const Students = require('../models/students.model');
const Teachers = require("../models/teachers.model");

router.get('/', (req, res)=>{
    Lessons.findAll(
        {
            include:[{
                model:Students
             }]
        }
    ).then(lessons => res.json(lessons))
})
router.get('/s', (req, res)=>{
    Students.findAll().then(students => res.json(students))
})
router.get('/t', (req, res)=>{
    Teachers.findAll(
{
   
}
    ).then(teachers => res.json(teachers))
})

module.exports = router