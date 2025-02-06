const express = require("express");
const router = express.Router();
const {
  getAllLearningPaths,
  getLearningPathCoursesList,
} = require("../controllers/learningPathsController");

router.get("/", getAllLearningPaths);
router.get("/:learningPathId", getLearningPathCoursesList);

module.exports = router;
