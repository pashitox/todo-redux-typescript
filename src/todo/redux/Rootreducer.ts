import { combineReducers } from "@reduxjs/toolkit";
import todoItems from './todoSlicer';
import visibilityFilter from "./filterReducer";

const rootReducer = combineReducers({
      todoItems,
      visibilityFilter, 
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;