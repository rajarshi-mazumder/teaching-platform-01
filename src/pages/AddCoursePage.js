import React, { useEffect, useState } from "react";
import { addCourse } from "../api/coursesDataMaster";
import { useLearningPathsContext } from "../contexts/LearningPathsProvider";
import AddCourseForm from "../components/forms/AddCourseForm";

const AddCoursePage = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [courselearningPaths, setCourseLearningPath] = useState([]);
  const { learningPaths, setLearningPaths } = useLearningPathsContext();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async ({ title, description, price }) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    courselearningPaths.forEach((id) =>
      formData.append("learningPathIds[]", id)
    );

    // formData.append("learningPathIds", courselearningPaths);
    formData.append("price", price);
    if (image) {
      formData.append("image", image); // Attach the selected image
    }

    try {
      await addCourse(formData);

      setImage(null);
    } catch (error) {
      console.error("Upload failed", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLearningPathSelect = async ({ path }) => {
    setCourseLearningPath([...courselearningPaths, path.id]);
  };

  return (
    <AddCourseForm
      learningPaths={learningPaths}
      handleFileChange={handleFileChange}
      handleLearningPathSelect={handleLearningPathSelect}
      loading={loading}
      handleSubmit={handleSubmit}
    />
  );
};

export default AddCoursePage;
