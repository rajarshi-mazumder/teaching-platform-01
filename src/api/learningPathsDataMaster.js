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
export const addLearningPathData = async (formData) => {
  for (let [key, value] of formData.entries()) {
    console.log(`${key}:`, value);
  }
  const response = await serverApiClient().post(
    "/api/learning_paths/add_learning_path",
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
  return response.data;
};
