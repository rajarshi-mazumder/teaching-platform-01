const express = require("express");
const router = express.Router();

const {
  getAllCourses,
  getCoursesByLearningPath,
} = require("../controllers/courseController");

router.get("/", getAllCourses);
router.get("/:learningPathId", getCoursesByLearningPath);

module.exports = router;
