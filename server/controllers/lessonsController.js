const express = require("express");
const router = express.Router();
const pool = require("../config/db");

const getAllLessonsFromCourse = async (req, res) => {
  console.log("SKILLET");
  try {
    const { courseId } = req.params;

    const result = await pool.query(
      "SELECT * FROM lessons where couse_id = $1",
      [courseId]
    );
  } catch (error) {
    res.status(500).json({ error: "Unable to find lessons" });
  }
};

module.exports = { getAllLessonsFromCourse };
