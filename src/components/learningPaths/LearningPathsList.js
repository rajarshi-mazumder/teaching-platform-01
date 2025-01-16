import React, { useEffect, useState } from "react";
import { fetchLearningPaths } from "../../api/coursesData";
import useLearningPaths from "../../hooks/uselearningPaths";
import LearningPath from "./LearningPathTile";
import { useNavigate } from "react-router-dom";

const LearningPaths = () => {
  const { learningPath, learningPathsError } = useLearningPaths();
  const navigate = useNavigate();

  function handleCourseClick({ courseId }) {
    navigate(`courses/${courseId}`);
  }
  return (
    <div className="learning-paths-list">
      {!learningPathsError &&
        learningPath.map((e) => (
          <LearningPath
            key={e.id}
            learningPath={e}
            onClick={() => handleCourseClick({ courseId: e.id })}
          />
        ))}
    </div>
  );
};

export default LearningPaths;
