import React from "react";
import useLearningPathDetails from "../hooks/useLearningPathDetails";
import { useLocation, useParams } from "react-router-dom";
import CourseTile from "../components/courses/CourseTile";

const LearningPathDetailsPage = () => {
  const { learningPathId } = useParams();
  const { state } = useLocation();

  const learningPath = state?.learningPathObject || {};

  const { learningPathCourses, learningPathCoursesError } =
    useLearningPathDetails({ courseIdList: learningPath.courseIds });
  console.log(`BON JOVI ${JSON.stringify(learningPathCourses)}`);
  return (
    <div>
      {learningPathCourses && learningPathCourses.length > 0 && (
        <div className="courses-container">
          <h2 className="section-title">Courses in this Learning Path</h2>
          <ul className="courses-grid">
            {learningPathCourses.map((course) => (
              <CourseTile key={course.id} course={course} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LearningPathDetailsPage;
