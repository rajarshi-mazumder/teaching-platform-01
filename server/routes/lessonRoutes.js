const express = require("express");
const router = express.Router();

const { getAllLessonsFromCourse } = require("../controllers/lessonsController");

router.get("/", getAllLessonsFromCourse);

module.exports = router;
