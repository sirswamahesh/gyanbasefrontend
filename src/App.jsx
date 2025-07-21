import React, { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";
import { Toaster } from "react-hot-toast";
import useAuthStore from "./store/useAuthStore";
import Navbar from "./components/Navbar";
import { Loader } from "lucide-react";
import DashboardPage from "./pages/DashboardPage";
import DashHome from "./components/Dashboard/DashHome";
import UsersTable from "./components/Dashboard/Users";
import CoursesTable from "./components/Dashboard/DashCourse";
import AddCourseBasic from "./components/Dashboard/AddCourse";
import EditCourse from "./components/Dashboard/EditCourse";
import Footer from "./components/Footer";
import AddLecturePage from "./pages/AddLecturePage";
import FullCoursePage from "./pages/FullCoursePage";
import EditLecturePage from "./pages/EditLecturePage";
import CoursePage from "./pages/CoursePage";
import AddLevelPage from "./pages/AddLevelPage";
import FullLevelPage from "./pages/AddLevelPage";
const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();
  const location = useLocation();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth && !authUser)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  const isDashboardRoute = location.pathname.startsWith("/dashboard");
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course/:courseId" element={<CoursePage />} />
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!authUser ? <SignupPage /> : <Navigate to="/" />}
        />
        <Route
          path="/dashboard"
          element={
            authUser && authUser.role === "admin" ? (
              <DashboardPage />
            ) : (
              <Navigate to="/" />
            )
          }
        >
          <Route index element={<DashHome />} />
          <Route path="users" element={<UsersTable />} />
          <Route path="courses" element={<CoursesTable />} />
          <Route path="courses/:courseId" element={<FullCoursePage />} />
          <Route path="level/:levelId" element={<FullLevelPage />} />
          <Route path="add-lecture/:levelId" element={<AddLecturePage />} />
          <Route path="add-level/:courseId" element={<AddLevelPage />} />
          <Route path="add-course" element={<AddCourseBasic />} />
          <Route path="edit-course" element={<EditCourse />} />
          <Route path="edit-lecture/:lectureId" element={<EditLecturePage />} />
        </Route>
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      {!isDashboardRoute && <Footer />}
      <Toaster />
    </div>
  );
};

export default App;
