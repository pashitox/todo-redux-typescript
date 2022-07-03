import { combineReducers } from "@reduxjs/toolkit";
import todoItems from './todoSlicer';
import showEdit from './EditSlicer';

import store from "./store";

const rootReducer = combineReducers({
      todoItems,
      showEdit
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default rootReducer;