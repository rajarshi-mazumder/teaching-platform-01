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

const addCourse = async (req, res) => {
  const { title, description, price, learningPathIds } = req.body;
  const imagePath = req.file ? `uploads/${req.file.filename}` : null;

  if (!title || !description) {
    return res
      .status(400)
      .json({ error: "Title, description and price are needed" });
  }
  try {
    const result = await pool.query(
      "INSERT INTO courses (title, description, price) VALUES ($1, $2, $3) RETURNING *",
      [title, description, price || 0]
    );
    const course = result.rows[0];
    if (learningPathIds && learningPathIds.length > 0)
      for (let pathId of learningPathIds) {
        await pool.query(
          "INSERT INTO learning_path_courses (learning_path_id, course_id) VALUES ($1, $2)",
          [pathId, course.id]
        );
      }

    return res.status(201).json(course);
  } catch (error) {
    console.log(`Error entering course ${error}`);
  }
};

module.exports = { getAllCourses, getCourseById, addCourse };
