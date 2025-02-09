import React, { useState } from "react";
import { addLearningPathData } from "../api/learningPathsDataMaster";

const AddLearningPathPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    console.log(JSON.stringify({ title, description, image }));
    setLoading(true);
    await addLearningPathData({ newlearningPath: { title, description } });
    setTitle("");
    setDescription("");
    setImage("");
    setLoading(false);
  };

  return (
    <div className="learning-path-form-container">
      <h2>Add a New Learning Path</h2>
      <form action={handleSubmit}>
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
          type="text"
          name="image"
          placeholder="Image URL (Optional)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Loading.." : "Add learning path"}
        </button>
      </form>
    </div>
  );
};

export default AddLearningPathPage;
