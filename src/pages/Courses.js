import React from "react";
import LearningPathsList from "../components/learningPaths/LearningPathsList";
import { useNavigate } from "react-router-dom";

const CoursesPage = () => {
  return (
    <div>
      <LearningPathsList />
    </div>
  );
};

export default CoursesPage;
