import axios from "axios";
import { localApiClient, serverApiClient } from "./apiClient";

const dataMode = {
  LOCAL: "local",
  DB: "db",
};

const fetchData = async ({ port, path, dataFetchMode = dataMode.LOCAL }) => {
  console.log(`MODE ${dataFetchMode}`);

  try {
    let response = null;
    switch (dataFetchMode) {
      case "db":
        response = await serverApiClient().get(path);
        console.log(`DATA ${JSON.stringify(response.data)}`);
        return response.data;
      default:
        response = await localApiClient({ port }).get(path);
        console.log(`DATA ${JSON.stringify(response.data)}`);
        return response.data;
    }
  } catch (error) {
    console.error("Error fetching learning paths");
    throw error;
  }
};

export const fetchLearningPaths = async () => {
  return await fetchData({
    port: "3001",
    path: "/api/learning_paths",
    dataFetchMode: dataMode.DB,
  });
};

export const fetchCourseDetailsData = async ({ port }) => {
  // id = parseInt(id) + 1;
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
