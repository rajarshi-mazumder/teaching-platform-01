import React from "react";
import "./LearningPath.css";

const LearningPath = ({ learningPath }) => {
  return (
    <div className="learning-path">
      <p className="learning-path-title">{learningPath.title}</p>
      <p className="learning-path-description">{learningPath.description}</p>
    </div>
  );
};

export default LearningPath;
