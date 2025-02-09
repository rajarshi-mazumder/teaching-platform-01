import React, { useState } from "react";
import { addLearningPathData } from "../api/learningPathsDataMaster";
import "../components/forms/FormStyles.css";

const AddLearningPathPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({ title, description, image }));

    setLoading(true);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (image) {
      formData.append("image", image); // Attach the selected image
    }

    try {
      await addLearningPathData(formData);
      setTitle("");
      setDescription("");
      setImage(null);
    } catch (error) {
      console.error("Upload failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Add a New Learning Path</h2>
      <form
        className="form"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <input
          type="text"
          name="title"
          placeholder="Learning Path Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleFileChange}
        />
        <button className="form-button" type="submit" disabled={loading}>
          {loading ? "Loading.." : "Add learning path"}
        </button>
      </form>
    </div>
  );
};

export default AddLearningPathPage;
