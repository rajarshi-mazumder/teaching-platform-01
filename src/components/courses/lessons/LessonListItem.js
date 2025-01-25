import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemIcon,
} from "@mui/material";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";

const LessonListItem = ({ lesson, onLessonClick }) => {
  return (
    <div>
      <ListItem button="true" onClick={() => onLessonClick(lesson)}>
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
  );
};

export default LessonListItem;
