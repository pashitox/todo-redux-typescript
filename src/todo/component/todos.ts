import { v1 as uuidv1 } from 'uuid';


class Todos {
    id: string;
    text: string;
    completed: boolean;
  
    constructor(todoTitle: string, todoDone: boolean) {
      this.id = uuidv1();
      this.text = todoTitle;
      this.completed = todoDone;
    }
  }
  
  export default Todos;
  