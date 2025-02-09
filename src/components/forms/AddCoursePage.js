import React, { useState } from "react";
import { addCourse } from "../../api/coursesDataMaster";

const AddCoursePage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    if (image) {
      formData.append("image", image); // Attach the selected image
    }

    try {
      await addCourse(formData);
      setTitle("");
      setDescription("");
      setPrice(0);
      setImage(null);
    } catch (error) {
      console.error("Upload failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Add a New Course</h2>
      <form
        className="form"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <input
          type="text"
          name="title"
          placeholder="Course Title"
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
          type="text"
          name="price"
          placeholder="Course Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
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

export default AddCoursePage;
