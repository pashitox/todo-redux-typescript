import React, { useState, ChangeEvent, useRef } from 'react';
import { useAppDispatch } from "../redux/hooks";
import { todosActions } from "../redux/todoSlicer";
import Todos  from "./todos";
import { v1 as uuidv1 } from 'uuid';
//import { time } from 'console';


const TodoForm = React.memo(() => {
  //Input value
  const [newTodo, setNewTodo] = useState<string>('');
  const [error, setError] = useState<boolean>(false); 
  const inputRef = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const [aggrSeeDate, setAggrSeeDate] = useState<string>("");  
  const dispatch = useAppDispatch();




  const handleTypeText = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
};

const handleTypeDAte = (event: React.ChangeEvent<HTMLInputElement>): void => {
 // setAggrDate(event.target.valueAsNumber);
 console.log(event.target.value)
  setAggrSeeDate(event.target.value);
}


const addTodoHandler = (event: React.FormEvent) => {
  event.preventDefault();
  const id = uuidv1();  
  const enteredTodo = inputRef.current!.value;
  const enteredTodo2 = inputRef2.current!.value;
  
  

  //console.log("enterado",enteredTodo);

  if (enteredTodo.trim().length === 0) {
    setError(true);
    return;
  } if (enteredTodo2.trim().length === 0) {
    setError(true);
    return;
  }

  setError(false);

  const newTodo: Todos = {
    id,
    text: enteredTodo,
    time: enteredTodo2,
    completed: false,
  };
  console.log("prueva",newTodo);
  dispatch(todosActions.addItem(newTodo));
  inputRef.current!.value = "";
  inputRef2.current!.value = "";
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
          className={`w-[85%] h-full p-2 border rounded-r-sm outline-none block ${
            error ? "border-red-500" : "border-slate-400"
          }`}       
        />   
        </div>
       <div>
       <input          
          type="date"
          ref={inputRef2}
          value={aggrSeeDate}
          onChange={handleTypeDAte} />
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



//<DatePicker
//dateFormat="yyyy/MM/dd"
//selected={startDate}
//onChange={selectDateHandler} 
//minDate={today}
//todayButton={"Today"}
///>