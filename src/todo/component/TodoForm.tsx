import React, { useState, ChangeEvent, useRef } from 'react';
import { useAppDispatch } from "../redux/hooks";
import { todosActions } from "../redux/todoSlicer";
import Todos  from "./todos";
import { v1 as uuidv1 } from 'uuid';






const TodoForm = React.memo(() => {
  //Input value
  const [newTodo, setNewTodo] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  const handleTypeText = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
};

const addTodoHandler = (event: React.FormEvent) => {
  event.preventDefault();

  const id = uuidv1();
  const enteredTodo = inputRef.current!.value;

  if (enteredTodo.trim().length === 0) {
    setError(true);
    return;
  }

  setError(false);

  const newTodo: Todos = {
    id,
    text: enteredTodo,
    completed: false,
  };
  console.log(newTodo);
  dispatch(todosActions.addItem(newTodo));
  inputRef.current!.value = "";
};


  return (
    
    <form onSubmit={addTodoHandler}>
      <div >
        <label htmlFor="text">        
        </label>
        <input onChange={handleTypeText}
          ref={inputRef}
          type={newTodo}
          placeholder="New todo"
                
        />



        
      </div>
      <div>
        <button
          type="submit" >
          Add new task
        </button>
      </div>
    </form>
      
  );
});

export default TodoForm;