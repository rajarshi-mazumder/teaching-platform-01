const express = require("express");
const router = express.Router();
const pool = require("../config/db");

const getAllCourses = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT id, title, description, price, learning_path_id, created_at FROM courses"
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch courses" });
  }
};

const getCourseById = async (req, res) => {
  const { courseId } = req.params;
  console.log(`COURSE ID ${courseId}`);
  try {
    const result = await pool.query(`SELECT * FROM courses WHERE id = $1`, [
      courseId,
    ]);
    res.json(result.rows[0]);
  } catch (error) {
    res
      .status(500)
      .json({ error: `Could not find lessons for courseId ${courseId}` });
  }
};

module.exports = { getAllCourses, getCourseById };
