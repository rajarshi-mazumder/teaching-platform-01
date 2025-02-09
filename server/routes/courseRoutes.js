const express = require("express");
const router = express.Router();

const {
  getAllCourses,
  getCourseById,
  addCourse,
} = require("../controllers/courseController");
const { upload } = require("../controllers/fileUpload");

router.get("/", getAllCourses);
router.get("/:courseId", getCourseById);
router.post("/add_course", upload.single("image"), addCourse);

module.exports = router;
