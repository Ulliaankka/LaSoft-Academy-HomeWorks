import Header from '../Components/Header/header';
import Main from '../Pages/Main/main';
import Footer from '../Components/Footer/footer';
import React, { useEffect } from "react";
import { getCoursesAction } from '../Redux/Course-request/course-action';
import { useDispatch } from 'react-redux'
import './App.css';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoursesAction());
  }, [dispatch])


  return (
    <div className = "container"> 
      <div className = 'main-part'>
        <Header />
        <Main />
      </div>
        <Footer />
    </div>
  );
}

export default App;
