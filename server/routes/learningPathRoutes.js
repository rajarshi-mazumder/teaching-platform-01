const express = require("express");
const router = express.Router();
const {
  getAllLearningPaths,
  getLearningPathCoursesList,
  addLearningPath,
} = require("../controllers/learningPathsController");

router.get("/", getAllLearningPaths);
router.get("/:learningPathId/courses", getLearningPathCoursesList);
router.post("/add_learning_path", addLearningPath);

module.exports = router;
