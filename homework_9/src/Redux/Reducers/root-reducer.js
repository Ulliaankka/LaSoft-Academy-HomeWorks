import { combineReducers } from "redux";
import teacherReducer from "./teacher-reducer";
import coursesReducer from "./courses-reducer";

const rootReducer = combineReducers({
  courses: coursesReducer,
  teacher: teacherReducer,
});

export default rootReducer;
