import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//import {RootState} from "./store";
import { Todo, TodoState } from "./types";





//const initialState: TodoModel[] = [];

const initialState: Todo[] = [
  {
    id:'1',
    text: 'cusco',
    completed: false,
  },
  {
    id:'2',
    text: 'Marica',
    completed: false,
  },
];



const todosSlicer = createSlice({
  name:"Todos",
  initialState,
  reducers:{
    addItem: 
    (state: any, action: PayloadAction<Todo>) => {
      state.push({
        id:action.payload.id,
        text: action.payload.text,
        completed: action.payload.completed,
      });
       console.log("state",state)
      return state;     
    },

    remove: (state: any[], action: { payload: { id:string } }) => {
      state = state.filter((todo: { id: string; }) => todo.id !== action.payload.id);
      //updateLS(state);
      return state;
   
    },

    edit: (state: any[], action: { payload: { id: string; text: string } }) => {
      const todo = state.find((todo: { id: string; }) => todo.id === action.payload.id);
      if (todo) todo.text = action.payload.text;
     // updateLS(state);
      return state;
    },

   
   // },
   // editTodo: (state, action) => {
   //   let { todoList } = state;
   //   state.todoList = todoList.map((item) => 
   //     item.id === action.payload.id ? action.payload : item);
   // 


  }
});

export const todosActions = todosSlicer.actions;



export default todosSlicer.reducer




   

//const todoItems = (state: TodoModel[] = initialState, action: TodoActionTypes): TodoModel[] => {
// 
//  switch (action.type) {
//    case ADD_ITEM:
//      return [
//        ...state,
//        { id: action.nextId, text: action.value, completed: false },
//      ];
//
//    // case DELETE_ITEM:
//    //   return state.filter();
//    // 
//      case TOGGLE_TODO:
//      return state.map((todo: TodoModel) =>
//        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
//      );
//  }
//  return state;
//};
//export default todoItems;