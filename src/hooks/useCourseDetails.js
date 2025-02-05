import { useEffect, useState } from "react";
import { fetchCourseDetailsData } from "../api/coursesData";
import axios from "axios";

const useCourseDetails = ({ id }) => {
  const [courseDetails, setCourseDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const port = getRandomInt(3001, 3005);
        const data = await fetchCourseDetailsData({ port });
        setCourseDetails(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return { courseDetails, error };
};

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

export default useCourseDetails;
