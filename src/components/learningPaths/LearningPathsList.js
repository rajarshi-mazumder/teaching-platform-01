import React, { useEffect, useState } from "react";
import LearningPath from "./LearningPathTile";
import { useNavigate } from "react-router-dom";
import { useLearningPathsContext } from "../../contexts/LearningPathsProvider";

const LearningPaths = () => {
  const { learningPaths, learningPathsError } = useLearningPathsContext();
  const navigate = useNavigate();

  function handleCourseClick({ learningPathId, learningPathObject }) {
    navigate(`/learning_paths/${learningPathId}`, {
      state: { learningPathObject },
    });
  }
  return (
    <div className="learning-paths-list">
      {!learningPathsError &&
        learningPaths.length > 0 &&
        learningPaths.map((e) => (
          <LearningPath
            key={e.id}
            learningPath={e}
            onClick={() =>
              handleCourseClick({ learningPathId: e.id, learningPathObject: e })
            }
          />
        ))}
    </div>
  );
};

export default LearningPaths;
