import { configureStore} from "@reduxjs/toolkit";
// import { ThunkAction } from "redux-thunk";
import rootReducer from "./Rootreducer";

const store = configureStore({
  reducer: rootReducer
});

// if (process.env.NODE_ENV === "development" && module.hot) {
//   module.hot.accept("./rootReducer", () => {
//     const newRootReducer = require("./rootReducer").default;
//     store.replaceReducer(newRootReducer);
//   });
// }

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//nesecito aprender lo asyng
// export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
