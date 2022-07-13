import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//import {RootState} from "./store";
import { Todo } from "./types";
import ls from "../component/LocalStore/LocalStore";





//const initialState: TodoModel[] = [];

let todos = ls.get<Todo[]>("todos");




todos ??= [
  
];



const todosSlicer = createSlice({
  name:"Todos",
  initialState:(todos || []) as Todo[],
  reducers:{
    addItem: 
    (state: any, action: PayloadAction<Todo>) => {

      console.log("state",state)
      state.push({
        id:action.payload.id,
        text: action.payload.text,
        time: action.payload.time,
        completed: action.payload.completed,
        
      });
      
       updateLS(state);
      return state;     
    },

    remove: (state: any[], action: { payload: { id:string } }) => {
      state = state.filter((todo: { id: string; }) => todo.id !== action.payload.id);
      updateLS(state);
      return state;
   
    },

    edit: (state: any[], action: { payload: { id:string; text:string, time:string, completed: boolean } }) => {
      const todo = state.find((todo: { id: string; }) => todo.id === action.payload.id);
           console.log("Edit",todo);
      if (todo) { todo.text = action.payload.text;
                  todo.time = action.payload.time;
                  todo.completed = action.payload.completed;     
      
      
      }
      updateLS(state);
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

//export const { Remove } = todosSlicer.actions


export default todosSlicer.reducer

function updateLS(state: Todo[]) {
  ls.set<Todo[]>("todos", state);

  
}




   

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