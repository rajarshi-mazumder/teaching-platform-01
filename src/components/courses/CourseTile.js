import React from "react";

const CourseTile = ({ course, onClick }) => {
  return (
    <li
      className="course-card"
      onClick={() => onClick({ courseId: course.id })}
    >
      <h3 className="course-title">{course.title}</h3>
      <p className="course-description">{course.description}</p>
    </li>
  );
};

export default CourseTile;
