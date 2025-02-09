import { createContext, useContext, useEffect, useState } from "react";
import { fetchLearningPaths } from "../api/learningPathsDataMaster";

const LearningPathContext = createContext();

export const LearningPathsProvider = ({ children }) => {
  const [learningPaths, setLearningPaths] = useState([]);
  const [learningPathsError, setLearningPathsError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchLearningPaths();
        setLearningPaths(data);
      } catch (error) {
        setLearningPathsError(error);
      }
    };
    fetchData();
  }, []);

  return (
    <LearningPathContext.Provider
      value={{ learningPaths, setLearningPaths, learningPathsError }}
    >
      {children}
    </LearningPathContext.Provider>
  );
};

export const useLearningPathsContext = () => {
  return useContext(LearningPathContext);
};
