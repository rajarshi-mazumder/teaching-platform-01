const express = require("express");
const router = express.Router();
const {
  getAllLearningPaths,
  getLearningPathCoursesList,
  addLearningPath,
} = require("../controllers/learningPathsController");

const { upload, storage } = require("../controllers/fileUpload");

router.get("/", getAllLearningPaths);
router.get("/:learningPathId/courses", getLearningPathCoursesList);
router.post("/add_learning_path", upload.single("image"), addLearningPath);

module.exports = router;
