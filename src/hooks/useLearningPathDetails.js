import { fetchLearningPathCoursesList } from "../api/learningPathsDataMaster";

const { useState, useEffect } = require("react");

const useLearningPathDetails = ({ learningPathId }) => {
  const [learningPathCourses, setLearningPathCourses] = useState([]);
  const [learningPathCoursesError, setleaningPathCoursesError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchLearningPathCoursesList({ learningPathId });
        setLearningPathCourses(data);
      } catch (error) {
        setleaningPathCoursesError(error);
      }
    };
    fetchData();
  }, []);

  return { learningPathCourses, learningPathCoursesError };
};

export default useLearningPathDetails;
