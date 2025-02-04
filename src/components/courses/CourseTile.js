import React from "react";

const CourseTile = ({ course }) => {
  return (
    <li className="course-card">
      <h3 className="course-title">{course.title}</h3>
      <p className="course-description">{course.description}</p>
    </li>
  );
};

export default CourseTile;
