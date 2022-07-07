
import rootReducer from "./Rootreducer";


export interface Todo {
  id: string;
  text: string ;
  time: string ;
  completed: boolean;
}

export type TodoState = {
  id: string;  
  text: string | undefined;
  time: string | undefined;
  completed: boolean;
}



export type RootState = ReturnType<typeof rootReducer>;