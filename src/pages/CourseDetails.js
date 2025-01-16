import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useCourseDetails from "../hooks/useCourseDetails";
import useLearningPaths from "../hooks/uselearningPaths";
import axios from "axios";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemIcon,
} from "@mui/material";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";

const CourseDetails = () => {
  const { courseId } = useParams();
  const { courseDetails, setCourseDetails } = useCourseDetails({
    id: courseId,
  });
  console.log(courseDetails);
  return (
    <div>
      {courseDetails && courseDetails.length > 0 ? (
        courseDetails.map((lesson) => (
          <div key={lesson.id}>
            <ListItem button>
              <ListItemIcon>
                <VideoLibraryIcon />
              </ListItemIcon>
              <ListItemText
                primary={lesson.title}
                secondary={
                  lesson.textDescription
                    ? lesson.textDescription
                    : "No description available."
                }
              />
            </ListItem>
            <Divider />
          </div>
        ))
      ) : (
        <p>No lessons available.</p>
      )}
    </div>
  );
};

export default CourseDetails;
