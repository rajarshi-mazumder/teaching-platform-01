import apiClient from "./apiClient";

export const fetchLearningPaths = async () => {
  try {
    const response = await apiClient.get("/paths");
    return response.data;
  } catch (error) {
    console.error("Error fetching learning paths");
    throw error;
  }
};
