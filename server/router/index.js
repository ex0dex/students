const express = require("express");
const router = express.Router();
const Lessons = require('../models/lessons.model')
const Students = require('../models/students.model')

router.get('/', (req, res)=>{
    Lessons.findAll().then(lessons => res.json(lessons))
})
router.get('/s', (req, res)=>{
    Students.findAll().then(students => res.json(students))
})

module.exports = router