import React from "react";

const AddCourseForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [courselearningPaths, setCourseLearningPath] = useState([]);
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

        <DropdownButton
          as={ButtonGroup}
          title="Select Learning Path"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {learningPaths.map((path) => (
            <Dropdown.Item key={path.id} className="dropdown-item">
              <input
                type="checkbox"
                className="dropdown-checkbox"
                onClick={(e) => {
                  e.stopPropagation();
                  handleLearningPathSelect({ path });
                }}
              />
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

export default AddCourseForm;
