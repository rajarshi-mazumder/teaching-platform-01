import logo from "./logo.svg";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Switch,
  createRoutesFromElements,
} from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import LearningPathsPage from "./pages/LearningPathsPage";
import LearningPathDetailsPage from "./pages/LearningPathDetailsPage";
import CourseDetailsPage from "./pages/CourseDetailsPage";
import AddLearningPathPage from "./components/forms/AddLearningPathPage";
import AddCoursePage from "./components/forms/AddCoursePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />}>
      <Route index={true} element={<LearningPathsPage />} />
      <Route
        path="/learning_paths/:learningPathId"
        element={<LearningPathDetailsPage />}
      />
      <Route path="/add_learning_path" element={<AddLearningPathPage />} />
      <Route path="/add_course" element={<AddCoursePage />} />
      <Route path="/courses/:courseId" element={<CourseDetailsPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
