import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTeachers } from '../../Redux/Actions/teacher-actions';
import Teacher from './teacher';
import './teachers-page.css';


const TeachersPage = ({ teacherData, fetchTeachers }) => {
    useEffect(() => {
        fetchTeachers()
    }, [fetchTeachers]);

    return (
        <div className="teachers-page-wrap">
            <h1>Meet our great team!</h1>
            <div className="teachers-list">
        {
            teacherData.teachers
                .map(teach => 
                    <Teacher 
                        firstName={teach.first_name} 
                        lastName={teach.last_name} 
                        photo={teach.photo} 
                        coursesList={teach.courses} 
                        education={teach.education} 
                        about={teach.about}/>)
        }
        </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        teacherData: state.teacher
    }
};

const mapDispatchTotProps = dispatch => {
    return {
        fetchTeachers: () => dispatch(fetchTeachers())
    }
};

export default connect(mapStateToProps, mapDispatchTotProps)(TeachersPage);
