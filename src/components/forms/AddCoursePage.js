import React, { useEffect, useState } from "react";
import { addCourse } from "../../api/coursesDataMaster";
import { useLearningPathsContext } from "../../contexts/LearningPathsProvider";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const AddCoursePage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [courselearningPath, setCourseLearningPath] = useState("");

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
    formData.append("learningPathIds", [courselearningPath]);
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

  const handleLearningPathSelect = async ({ path }) => {
    setCourseLearningPath(path.id);
  };

  const { learningPaths, setLearningPaths } = useLearningPathsContext();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <div className="form-container">
      {JSON.stringify(learningPaths)}
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

        <DropdownButton
          as={ButtonGroup}
          title="Select Learning Path"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {learningPaths.map((path) => (
            <Dropdown.Item
              key={path.id}
              className="dropdown-item"
              onClick={() => {
                handleLearningPathSelect({ path });
              }}
            >
              {path.title}
            </Dropdown.Item>
          ))}
        </DropdownButton>

        <button className="form-button" type="submit" disabled={loading}>
          {loading ? "Loading.." : "Add learning path"}
        </button>
      </form>
    </div>
  );
};

export default AddCoursePage;
