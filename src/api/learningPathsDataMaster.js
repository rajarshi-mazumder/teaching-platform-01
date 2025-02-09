import axios from "axios";
import { localApiClient, serverApiClient } from "./apiClient";

// Getter methods------------
export const fetchLearningPaths = async () => {
  const result = await serverApiClient().get("/api/learning_paths");
  return result.data;
};

export const fetchLearningPathCoursesList = async ({ learningPathId }) => {
  const coursesList = await serverApiClient().get(
    `api/learning_paths/${learningPathId}/courses`
  );
  return coursesList.data;
};

// Setter Methods-------
export const addLearningPathData = async ({ newlearningPath }) => {
  const response = await serverApiClient().post(
    "/api/learning_paths/add_learning_path",
    newlearningPath
  );
  return response.data;
};
