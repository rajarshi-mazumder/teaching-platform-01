const pool = require("../config/db");

const getAllLearningPaths = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM learning_paths");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllLearningPaths };
