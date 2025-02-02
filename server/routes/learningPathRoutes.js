const express = require("express");
const router = express.Router();
const {
  getAllLearningPaths,
} = require("../controllers/learningPathsController");

router.get("/", getAllLearningPaths);

module.exports = router;
