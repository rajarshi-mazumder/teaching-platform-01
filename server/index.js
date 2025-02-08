const express = require("express");
const cors = require("cors");

require("dotenv");

const learningPathsRoutes = require("./routes/learningPathRoutes");
const courseRoutes = require("./routes/courseRoutes");
const lessonsRoutes = require("./routes/lessonRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/learning_paths", learningPathsRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/courses", lessonsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
