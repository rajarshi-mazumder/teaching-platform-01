import { useEffect, useState } from "react";
import { fetchCourseDetailsData } from "../api/coursesData";
import axios from "axios";

const useCourseDetails = ({ id }) => {
  const [courseDetails, setCourseDetails] = useState(null);
  const [courseDetailsError, setCourseDetailsError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCourseDetailsData({ courseId: id });
        setCourseDetails(data);
      } catch (error) {
        setCourseDetailsError(error);
      }
    };
    fetchData();
  }, []);
  return { courseDetails, courseDetailsError };
};

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

export default useCourseDetails;
