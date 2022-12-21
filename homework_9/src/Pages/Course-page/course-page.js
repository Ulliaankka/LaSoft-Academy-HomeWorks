import React from "react";
import "./course-page.css";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setSelectedCourses } from "../../Redux/Actions/courses-action";
import Button from "../../Components/Button/button";
import Header from "../../Components/Header/header";

const CoursePage = () => {
  const { courseId } = useParams();
  const data = useSelector((state) => state.courses);
  const CoursePage = data.courses.find((el) => el.id === courseId);

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const applyCourse = (el) => {
    dispatch(setSelectedCourses(el));
    navigate(`/apply`);
  };

  return (
    <>
      <Header />
      {data ? (
        <div className="single-course-page">
          <div className="course-text-block">
            <h1>{CoursePage?.name}</h1>

            <div className="card-info-all">
              <div className="card-info width-content">
                <p className="light-left-text">Level:</p>
                <p className="light-right-text">{CoursePage?.level}</p>
              </div>
              <div className="card-info width-content">
                <p className="light-left-text">Duration</p>
                <p className="light-right-text">
                  <span>{CoursePage?.duration}</span>
                  <br />
                  <span>{CoursePage?.periodicity}</span>
                </p>
              </div>
            </div>

            <h5 className="header-for-list">You will learn:</h5>
            <div className="form-content">
              <ul>
                {CoursePage?.description_full.map((el, i) => {
                  return (
                    <li key={i} className="general-text course-describe-list">
                      {el}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="width-content">
              <h4 className="price-title">Price:</h4>
              <h3 className="price">${CoursePage?.price}</h3>
            </div>

            <Button
              text="Apply now"
              castomClassName="btn-apply-size"
              color="green"
              onClick={() => applyCourse(CoursePage)}
            />
          </div>

          <div className="apply-img-block">
            <img src={CoursePage?.full_img_url} alt="Photo of single course" />
          </div>
        </div>
      ) : (
        <h1>loading...</h1>
      )}
    </>
  );
};

export default CoursePage;
