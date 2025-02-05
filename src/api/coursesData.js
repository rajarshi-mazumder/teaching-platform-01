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

export const fetchCourseDetailsData = async ({ port }) => {
  // id = parseInt(id) + 1;
  console.log(`PORT${port}`);
  return await fetchData({ port, path: "/lessons" });
};

export const fetchLearningPathDetailsData = async ({ courseIdList }) => {
  const coursesList = [];
  for (let i = 0; i < courseIdList.length; i++) {
    const courseData = await fetchData({
      port: `4001`,
      path: `/courses/${courseIdList[i]}`,
    });
    coursesList.push(courseData);
  }
  return coursesList;
};
