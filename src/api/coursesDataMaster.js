import axios from "axios";
import { serverApiClient } from "./apiClient";

// Getter methods------------
export const fetchCourseDetailsData = async ({ courseId }) => {
  const courseDetails = await serverApiClient().get(`api/courses/${courseId}`);
  return courseDetails.data;
};

// Setter Methods-------
export const addCourse = async (formData) => {
  for (let [key, value] of formData.entries()) {
    console.log(`${key}:`, value);
  }

  const response = await serverApiClient().post(
    "/api/courses/add_course",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};
