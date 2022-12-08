import React from 'react';
import './teachers-page.css';

const Teacher = (props) => {
    return (
        <div className="teacher-block">

            <img className="teacher-block-photo" src={props.photo}></img>

            <h3 className="teacher-block-name">{props.firstName} {props.lastName}</h3>

                <div className="teacher-info-block">
                    <h5 className="teacher-info-block-title">Courses:</h5>
                    <p className="teacher-info-block-text general-text">{props.coursesList}</p>
                </div>

                <div className="teacher-info-block">
                    <h5 className="teacher-info-block-title">Education:</h5>
                    <p className="teacher-info-block-text general-text">{props.education}</p>
                </div>
                
                <div className="teacher-info-block">
                    <h5 className="teacher-info-block-title">About me:</h5>
                    <p className="teacher-info-block-text general-text">{props.about}</p>
                </div>
        </div>
    )
};

export default Teacher;
