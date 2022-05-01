const express = require("express");
const router = express.Router();
const Lessons = require("../models/lessons.model");
const Students = require("../models/students.model");
const Teachers = require("../models/teachers.model");

router.get("/", async (req, res) => {
  await Lessons.findAll({
    include: [
      {
        model: Students,
      },
      {
        model: Teachers,
      },
    ],
  })
    .then((lessons) => res.json(lessons))
    .catch(console.error);
});

router.get("/s", (req, res) => {
  Students.findAll().then((students) => res.json(students));
});
router.get("/t", (req, res) => {
  Teachers.findAll({}).then((teachers) => res.json(teachers));
});

module.exports = router;
