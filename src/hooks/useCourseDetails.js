import { useEffect, useState } from "react";
import { fetchCourseDetailsData } from "../api/coursesData";
import axios from "axios";

const useCourseDetails = ({ id }) => {
  const [courseDetails, setCourseDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCourseDetailsData({ id });
        setCourseDetails(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return { courseDetails, error };
};

export default useCourseDetails;
