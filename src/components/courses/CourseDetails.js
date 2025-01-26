import React, { useEffect, useState } from "react";
import LessonDetails from "./lessons/LessonDetails";
import LessonListItem from "./lessons/LessonListItem";
import "./CourseDetails.css";

const CourseDetails = ({ courseDetails }) => {
  const [lessonInProgress, setLessonInProgress] = useState(null);
  const handleLessonClick = (lesson) => {
    setLessonInProgress(lesson);
  };

  useEffect(() => {
    if (courseDetails && courseDetails.length > 0) {
      const initialLesson = courseDetails[0];
      setLessonInProgress(initialLesson);
    }
  }, [courseDetails]);
  return (
    <div className="course-details">
      <div className="lessons-list-container">
        {courseDetails && courseDetails.length > 0 ? (
          courseDetails.map((lesson) => (
            <div key={lesson.id}>
              <LessonListItem
                lesson={lesson}
                onLessonClick={handleLessonClick}
              />
            </div>
          ))
        ) : (
          <p>No lessons available.</p>
        )}
      </div>
      <div className="lesson-details-container">
        {lessonInProgress && <LessonDetails lesson={lessonInProgress} />}
      </div>
    </div>
  );
};

export default CourseDetails;
