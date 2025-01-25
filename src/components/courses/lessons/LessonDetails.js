import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./LessonDetails.css"; // Import the CSS for styling

const LessonDetails = ({ lesson }) => {
  const [activeTab, setActiveTab] = useState("summary");

  return (
    <div className="lesson-details">
      {/* Video Player Section */}
      <div className="video-container">
        {lesson.videoUrl ? (
          <ReactPlayer
            url={lesson.videoUrl}
            controls
            width="100%"
            height="400px"
          />
        ) : (
          <div className="no-video">No video available for this lesson</div>
        )}
      </div>

      {/* Tabs Section */}
      <div className="tabs">
        <button
          className={activeTab === "summary" ? "active" : ""}
          onClick={() => setActiveTab("summary")}
        >
          Summary
        </button>
        <button
          className={activeTab === "quiz" ? "active" : ""}
          onClick={() => setActiveTab("quiz")}
        >
          Quiz
        </button>
        <button
          className={activeTab === "flashcards" ? "active" : ""}
          onClick={() => setActiveTab("flashcards")}
        >
          Flashcards
        </button>
      </div>

      {/* Content Section */}
      <div className="tab-content">
        {activeTab === "summary" && (
          <div className="summary">
            <h3>Lesson Summary</h3>
            <p>{lesson.textDescription}</p>
          </div>
        )}

        {activeTab === "quiz" && (
          <div className="quiz">
            <h3>Quiz Section</h3>
            <p>Quiz content will go here...</p>
          </div>
        )}

        {activeTab === "flashcards" && (
          <div className="flashcards">
            <h3>Flashcards</h3>
            <p>Flashcards content will go here...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonDetails;
