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
      `SELECT * FROM courses WHERE id IN (SELECT course_id FROM learning_path_courses WHERE learning_path_id = $1)`,
      [learningPathId]
    );
    console.log(`LP ${learningPathId}`);

    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllLearningPaths, getLearningPathCoursesList };
