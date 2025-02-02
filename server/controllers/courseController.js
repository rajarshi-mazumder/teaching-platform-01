const express = require("express");
const router = express.Router();
const pool = require("../config/db");

const getAllCourses = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM courses");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch courses" });
  }
};

const getCoursesByLearningPath = async (req, res) => {
  try {
    const { learningPathId } = req.params;

    const result = await pool.query(
      "SELECT * FROM courses where learning_path_id  = $1",
      [learningPathId]
    );
    res.json(result.rows);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Could not find courses  iwth learning path id" });
  }
};

module.exports = { getAllCourses, getCoursesByLearningPath };
