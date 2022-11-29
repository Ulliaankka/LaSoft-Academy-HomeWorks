import coursesRequests from "./course-request";
import courses from "./course-type";

const getCoursesAction = () => dispatch => {
    return coursesRequests.getAllCourses().then(res => dispatch({
        type: courses.FETCH_COURSES_SUCCESS,
        payload: res.data
    })).catch(err => dispatch({
        type: courses.FETCH_COURSES_FAILED,
        payload: err.error
    }));
}

const setSelectedCourses = (course) => dispatch => {
    return dispatch({
        type: courses.SELECTED_COURSE,
        payload: course
    });
} 

export { getCoursesAction, setSelectedCourses };