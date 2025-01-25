import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useCourseDetails from "../hooks/useCourseDetails";
import useLearningPaths from "../hooks/uselearningPaths";
import axios from "axios";
import LessonListItem from "../components/courses/lessons/LessonListItem";
import LessonDetails from "../components/courses/lessons/LessonDetails";

const CourseDetails = () => {
  const { courseId } = useParams();
  const { courseDetails, setCourseDetails } = useCourseDetails({
    id: courseId,
  });

  const [lessonInProgress, setLessonInProgress] = useState(null);
  const handleLessonClick = (lesson) => {
    setLessonInProgress(lesson);
  };
  console.log(courseDetails);
  return (
    <div>
      {courseDetails && courseDetails.length > 0 ? (
        courseDetails.map((lesson) => (
          <div key={lesson.id}>
            <LessonListItem lesson={lesson} onLessonClick={handleLessonClick} />
          </div>
        ))
      ) : (
        <p>No lessons available.</p>
      )}
      {lessonInProgress && <LessonDetails lesson={lessonInProgress} />}
    </div>
  );
};

export default CourseDetails;
