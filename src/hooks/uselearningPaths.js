import { useEffect, useState } from "react";
import { fetchLearningPaths } from "../api/coursesData";

const useLearningPaths = () => {
  const [learningPath, setLearningPaths] = useState([]);
  const [learningPathsError, setLearningPathsError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchLearningPaths();
        setLearningPaths(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return { learningPath, learningPathsError };
};

export default useLearningPaths;
