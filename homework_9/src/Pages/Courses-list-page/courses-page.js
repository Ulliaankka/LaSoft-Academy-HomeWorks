import React from "react";
import "./courses-page.css";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSelectedCourses } from "../../Redux/Actions/courses-action";
import Button from "../../Components/Button/button";
import "../../Assets/General-styles/general-styles.css";
import Header from "../../Components/Header/header";

const CoursesPage = () => {
  let navigate = useNavigate();
  const data = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  const applyCourse = (el) => {
    dispatch(setSelectedCourses(el));
    navigate(`/apply`);
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="main-part">
          <div className="courses-page-wrap">
            <h1>Pick your perfect course!</h1>
            <div className="all-cards">
              {data &&
                data.courses.map((el) => {
                  return (
                    <div
                      key={el.id}
                      className="card"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        navigate(`/courses/${el.id}`);
                      }}
                    >
                      <img
                        className="course-image"
                        src={el.thumbnail_img_url}
                        alt="course_picture"
                      />

                      <div className="card-content">
                        <div className="card-title">
                          <h4>{el.name}</h4>
                          <p className="price">$ {el.price}</p>
                        </div>

                        <div className="card-info-all">
                          <div className="card-info">
                            <p className="light-left-text">Level:</p>
                            <p className="light-right-text">{el.level}</p>
                          </div>
                          <div className="card-info">
                            <p className="light-left-text">Duration</p>
                            <p className="light-right-text">
                              <span>{el.duration}</span>
                              <br />
                              <span>{el.periodicity}</span>
                            </p>
                          </div>
                        </div>

                        <div className="card-text text-height">
                          <p className="clip">{el.description_short}</p>
                        </div>

                        <Button
                          text="Apply"
                          color="green"
                          castomClassName="btn-courses-apply"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            applyCourse(el);
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesPage;
