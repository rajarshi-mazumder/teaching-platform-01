import axios from "axios";
import { serverApiClient } from "./apiClient";

export const fetchCourseDetailsData = async ({ courseId }) => {
  const courseDetails = await serverApiClient().get(`api/courses/${courseId}`);
  return courseDetails.data;
};
