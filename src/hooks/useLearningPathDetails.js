import { fetchLearningPathDetailsData } from "../api/coursesData";

const { useState, useEffect } = require("react");

const useLearningPathDetails = ({ courseIdList }) => {
  const [learningPathCourses, setLearningPathCourses] = useState([]);
  const [learningPathCoursesError, setleaningPathCoursesError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchLearningPathDetailsData({ courseIdList });

        setLearningPathCourses(data);
      } catch (error) {}
    };
    fetchData();
  }, []);
  return { learningPathCourses, learningPathCoursesError };
};

export default useLearningPathDetails;
