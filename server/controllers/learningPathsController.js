const pool = require("../config/db");

const getAllLearningPaths = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM learning_paths");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getLearningPathCoursesList = async (req, res) => {
  const { learningPathId } = req.params;
  try {
    const result = await pool.query(
      `SELECT id, title, description, price, created_at FROM courses WHERE id IN (SELECT course_id FROM learning_path_courses WHERE learning_path_id = $1)`,
      [learningPathId]
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addLearningPath = async (req, res) => {
  const { title, description, image } = req.body;

  if (!title || !description) {
    return res
      .status(400)
      .json({ error: "Title and description are required" });
  }
  try {
    const result = await pool.query(
      "INSERT INTO learning_paths (title, description, image) VALUES ($1, $2, $3) RETURNING *",
      [title, description, image || null]
    );
    return res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Database Error:", error); // ✅ Log the actual error
    res
      .status(500)
      .json({ error: "Error occured while creating learning path" });
  }
};

module.exports = {
  getAllLearningPaths,
  getLearningPathCoursesList,
  addLearningPath,
};
