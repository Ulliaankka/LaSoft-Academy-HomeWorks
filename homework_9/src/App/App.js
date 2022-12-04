import { Routes, Route } from "react-router-dom";
import Header from '../Components/Header/header';
import Footer from '../Components/Footer/footer';
import './App.css';
import HomePage from '../Pages/Home-page/home-page';
import AboutPage from '../Pages/About-page/about-page';
import TeachersPage from '../Pages/Teachers-page/teachers-page';
import CoursesPage from "../Pages/Courses-page/courses-page";
import ApplyPage from "../Pages/Apply-page/apply-page";

const App = () => {
  return (
    <div className = "container"> 
      <div className = 'main-part'>
        <Header />
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/teachers' element={<TeachersPage />} />
          <Route path='/courses' element={<CoursesPage />} /> 
          <Route path='/apply' element={<ApplyPage />} /> 
        </Routes>
      </div>
        <Footer />
    </div>
  );
}

export default App;
