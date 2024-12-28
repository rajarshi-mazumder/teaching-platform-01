import React, { useEffect, useState } from "react";
import { fetchLearningPaths } from "../../api/coursesData";
import useLearningPaths from "../../hooks/uselearningPaths";
import LearningPath from "./LearningPathTile";

const LearningPaths = () => {
  const { learningPath, learningPathsError } = useLearningPaths();

  return (
    <div className="learning-paths-list">
      {!learningPathsError &&
        learningPath.map((e) => <LearningPath key={e.id} learningPath={e} />)}
    </div>
  );
};

export default LearningPaths;
