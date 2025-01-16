import axios from "axios";
import apiClient from "./apiClient";

const fetchData = async ({ port, path }) => {
  try {
    const response = await apiClient({ port }).get(path);
    return response.data;
  } catch (error) {
    console.error("Error fetching learning paths");
    throw error;
  }
};

export const fetchLearningPaths = async () => {
  return await fetchData({ port: "3001", path: "/paths" });
};

export const fetchCourseDetailsData = async ({ id }) => {
  id = parseInt(id) + 1;
  return await fetchData({ port: `300${id}`, path: "/lessons" });
};
