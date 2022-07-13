import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface toEdit {
  idTodo: string;
  titleTodo: string;
  timeTodo: string;
  completed: boolean;
  isShow: boolean;
}

interface isShowEdit {
  value: toEdit;
}

const initialStateValue: isShowEdit = {
  value: {
    idTodo: "",
    titleTodo: "",
    timeTodo: "",
    completed: false,
    isShow: false,
  },
};

export const showEditSlice = createSlice({
  name: "showEdit",
  initialState: initialStateValue,
  reducers: {
    setShowEdit: (state:any, action: PayloadAction<toEdit>) => {
      state.value.idTodo = action.payload.idTodo;
      state.value.titleTodo = action.payload.titleTodo;
      state.value.timeTodo = action.payload.timeTodo;
      state.value.completed = action.payload.completed;
      state.value.isShow = action.payload.isShow;
    },
    setCloseEdit: (state:any) => {
      state.value.isShow = false;
    },
  },
});

export const showEditActions = showEditSlice.actions;

//export const selectShowEdit = (state: RootState) => state.isShowEdit.value;

export default showEditSlice.reducer;