import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useCourseDetails from "../hooks/useCourseDetails";
import useLearningPaths from "../hooks/uselearningPaths";
import axios from "axios";
import LessonListItem from "../components/courses/lessons/LessonListItem";
import LessonDetails from "../components/courses/lessons/LessonDetails";
import CourseDetails from "../components/courses/CourseDetails";

const CourseDetailsPage = () => {
  const { courseId } = useParams();
  const { courseDetails, setCourseDetails } = useCourseDetails({
    id: courseId,
  });

  console.log(courseDetails);
  return <CourseDetails courseDetails={courseDetails} />;
};

export default CourseDetailsPage;
