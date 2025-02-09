import axios from "axios";
import { localApiClient, serverApiClient } from "./apiClient";

export const addLearningPathData = async ({ newlearningPath }) => {
  const response = await serverApiClient().post(
    "/api/learning_paths/add_learning_path",
    newlearningPath
  );
  return response.data;
};
