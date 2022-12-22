import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCoursesAction } from "../Redux/Actions/courses-action";
import "./App.css";
// import Header from "../Components/Header/header";
import Footer from "../Components/Footer/footer";
import HomePage from "../Pages/Home-page/home-page";
import AboutPage from "../Pages/About-page/about-page";
import TeachersPage from "../Pages/Teachers-page/teachers-page";
import CoursesPage from "../Pages/Courses-list-page/courses-page";
import ApplyPage from "../Pages/Apply-page/apply-page";
import CoursePage from "../Pages/Course-page/course-page";
import ErrorPage from "../Pages/Error-page/error-page";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoursesAction());
  }, [dispatch]);

  return (
    <>
    {/* <Header /> */}
      <main>
        <Routes>
          <Route path="/home" index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="/courses/:courseId" element={<CoursePage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
