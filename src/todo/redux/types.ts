
import rootReducer from "./Rootreducer";


export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export interface TodoState {
  id: string;
  todos: Todo[];
  completed: number;
  text: string;
}






export type RootState = ReturnType<typeof rootReducer>;