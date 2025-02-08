import React from "react";
import useLearningPathDetails from "../hooks/useLearningPathDetails";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CourseTile from "../components/courses/CourseTile";
import DataFetchError from "../components/errors/DataFetchError";

const LearningPathDetailsPage = () => {
  const { learningPathId } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const learningPath = state?.learningPathObject || {};

  const { learningPathCourses, learningPathCoursesError } =
    useLearningPathDetails({ learningPathId: learningPath.id });

  function handleLearningPathClick({ courseId }) {
    navigate(`/courses/${courseId}`);
  }

  return (
    <div>
      {learningPathCourses && learningPathCourses.length > 0 && (
        <div className="courses-container">
          <h2 className="section-title">Courses in this Learning Path</h2>
          <ul className="courses-grid">
            {learningPathCourses.map((course) => (
              <CourseTile
                key={course.id}
                course={course}
                onClick={handleLearningPathClick}
              />
            ))}
          </ul>
        </div>
      )}

      {learningPathCoursesError != null && (
        <DataFetchError message={learningPathCoursesError.message} />
      )}
    </div>
  );
};

export default LearningPathDetailsPage;
