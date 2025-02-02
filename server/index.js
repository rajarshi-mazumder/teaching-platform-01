const express = require("express");
const cors = require("cors");

require("dotenv");

const learningPathsRoutes = require("./routes/learningPathRoutes");
const courseRoutes = require("./routes/courseRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/learning-paths", learningPathsRoutes);
app.use("/api/courses", courseRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
