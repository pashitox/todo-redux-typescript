import { v1 as uuidv1 } from 'uuid';


class Todos {
    id: string;
    text: string;
    time: string;
    completed: boolean;
  
    constructor(todoTitle: string,  todoTime: string, todoDone: boolean) {
      this.id = uuidv1();
      this.text = todoTitle;
     this.time = todoTime;
      this.completed = todoDone;
    }
  }
  
  export default Todos;
  