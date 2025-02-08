const express = require("express");
const router = express.Router();

const {
  getAllCourses,
  getCourseById,
  addCourse,
} = require("../controllers/courseController");

router.get("/", getAllCourses);
router.get("/:courseId", getCourseById);
router.post("/add_course", addCourse);

module.exports = router;
