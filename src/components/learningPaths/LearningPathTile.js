import React from "react";
import "./LearningPath.css";
import { useNavigate } from "react-router-dom";

const LearningPath = ({ learningPath, onClick }) => {
  return (
    <div className="learning-path" onClick={() => onClick()}>
      <p className="learning-path-title">{learningPath.title}</p>
      <p className="learning-path-description">{learningPath.description}</p>
    </div>
  );
};

export default LearningPath;
