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
import CoursesPage from "./pages/Courses";
import CourseDetailsPage from "./pages/CourseDetailsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />}>
      <Route index={true} element={<CoursesPage />} />
      <Route path="/courses/:courseId" element={<CourseDetailsPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
