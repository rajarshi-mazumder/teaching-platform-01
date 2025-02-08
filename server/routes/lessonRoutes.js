const express = require("express");
const router = express.Router();

const { addLessonsToCourse } = require("../controllers/lessonsController");

router.post("/:courseId/add_lesson", addLessonsToCourse);

module.exports = router;
