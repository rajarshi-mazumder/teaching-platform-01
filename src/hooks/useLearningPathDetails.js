import {
  fetchLearningPathCoursesList,
  fetchLearningPathDetailsData,
} from "../api/coursesData";

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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await fetchLearningPathDetailsData({ courseIdList });
  //       setLearningPathCourses(data);
  //     } catch (error) {}
  //   };
  //   fetchData();
  // }, [courses]);
  return { learningPathCourses, learningPathCoursesError };
};

export default useLearningPathDetails;
