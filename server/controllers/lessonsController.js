const express = require("express");
const router = express.Router();
const pool = require("../config/db");

const addLessonsToCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { title, textDescription, duration, videoUrl } = req.body;

    if (!title || !textDescription) {
      return res
        .status(400)
        .json({ error: "Title and description are needed" });
    }

    let lessonsResult = await pool.query(
      "SELECT lessons from courses where id= $1",
      [courseId]
    );
    if (lessonsResult.rowCount <= 0)
      return res.status(400).json({ error: `No course with id ${courseId}` });

    let lessons = [];
    try {
      lessons = lessonsResult.rows[0].lessons;
    } catch (error) {}

    let lastLessonId = 1;
    if (lessons.length > 0) lastLessonId = lessons[lessons.length - 1].id + 1;
    const newLesson = {
      id: lastLessonId,
      title,
      textDescription,
      videoUrl: videoUrl || null,
      duration: duration || 0,
    };

    lessons.push(newLesson);
    await pool.query("UPDATE courses SET lessons = $1 WHERE id = $2", [
      JSON.stringify(lessons),
      courseId,
    ]);

    res.status(201).json({ message: "Lesson added sucessfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Unable to find lessons" });
  }
};

module.exports = { addLessonsToCourse };
