import { combineReducers } from 'redux'
import teacherReducer from './teacher-reducer'
import coursesReducer from './course-reducer'

const rootReducer = combineReducers({
    courses: coursesReducer,
    teacher: teacherReducer
})

export default rootReducer