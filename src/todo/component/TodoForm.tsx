import React, { useState, ChangeEvent, useRef } from 'react';
import { useAppDispatch } from "../redux/hooks";
import { todosActions } from "../redux/todoSlicer";
import Todos  from "./todos";
import { v1 as uuidv1 } from 'uuid';


//import { time } from 'console';
const TodoForm = React.memo(() => {
  //Input value
  const [newTodo, setNewTodo] = useState<string>('');
  //const [completed, setCompleted] = useState<boolean>();

  
  const inputRef = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
 // const inputRef3 = useRef<HTMLInputElement>(null);
  const [aggrSeeDate, setAggrSeeDate] = useState<string>("");  
  const dispatch = useAppDispatch();
  const handleTypeText = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);};

const handleTypeDAte = (event: React.ChangeEvent<HTMLInputElement>): void => {
 // setAggrDate(event.target.valueAsNumber);
 //console.log(event.target.value)
  setAggrSeeDate(event.target.value);}

const addTodoHandler = (event: React.FormEvent) => {
  event.preventDefault();
  const id = uuidv1();  
  const enteredTodo = inputRef.current!.value;
  const enteredTodo2 = inputRef2.current!.value;

  if (enteredTodo.trim().length === 0) {
    alert("introdusca algunas letras en el campo");
    return;
  } if (enteredTodo2.trim().length === 0) {
    alert("introdusca algunas letras en el campo");
    return;
  }
        
 const newTodo: Todos = {
   id,
   text: enteredTodo,
   time: enteredTodo2,
   completed: true ,
 };
 //   
dispatch(todosActions.addItem(newTodo));
  //console.log("prueva",newTodo); 
  inputRef.current!.value = "";
  inputRef2.current!.value = "";
 // inputRef3.current!.value = "";
};





  return (
    
    <div className="inner-content">
    <h2 className="center padding">Add a new text and Time 🦉</h2>
    
    <div  className="row-section__inner"  >
    <form onSubmit={addTodoHandler}>
    <div  className="form-row">
     <div  className="input-group">  
     <label htmlFor="text">Text</label>         
        <input onChange={handleTypeText}
          ref={inputRef}
          type={newTodo}
          placeholder="New todo"/>   
        </div>
       <div className="input-group">
       <label htmlFor="time">Time</label>
       <input          
          type="date"
          ref={inputRef2}
          value={aggrSeeDate}
          onChange={handleTypeDAte} />
       </div>
      <div className="input-group">
        <button
         className="btn-primary"
          type="submit" >
          Send
        </button>
      </div>
      </div>
    </form>
    </div>   
    </div>  
    
    


    
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

//<div>
//<input 
//onChange={handleTypeCompleted}
//type="checkbox"             
// ref={inputRef3}
//onClick={checkboxHandler} />          
//</div>

