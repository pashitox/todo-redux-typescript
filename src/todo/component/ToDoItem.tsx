import React from "react";
import {useAppDispatch } from "../redux/hooks";
import  { useState,  ChangeEvent} from 'react';
//import {useAppSelector} from "../redux/hooks"
import { todosActions } from "../redux/todoSlicer";
import { showEditActions } from "../redux/EditSlicer";

import {TodosEdit}  from "./todosEdit";

const TodoItem: React.FC<{id:string; text: string;  time:string, Completed: boolean }> =
  React.memo((props) => {

   

   // const TodoList = useAppSelector((state) => state.todoItems )
   const [completed, setComplete] = useState<boolean>();
  

    const dispatch = useAppDispatch();   
    const removeTodoHandler = () => {
        const id = props.id
        console.log(id);
      dispatch(todosActions.remove({id}));
    };

   const editTodoHandler = (event: React.FormEvent) => {
    event.preventDefault();
     

     const newTodoEdit: TodosEdit = {
      idTodo: props.id,
      titleTodo: props.text,
      timeTodo: props.time,
      completed: props.Completed,
      isShow: true,    };

    console.log("edit show", newTodoEdit)
     dispatch(
       showEditActions.setShowEdit(newTodoEdit         
       )
     );
   };

  const toggleCompeleted = () =>
         setComplete(!completed)
       console.log("toogle",completed);         
      if (completed === true){     
        dispatch(todosActions.edit({ id:props.id, text:props.text, time:props.time, completed: true }))
      } else {
        dispatch(todosActions.edit({ id:props.id, text:props.text, time:props.time, completed: false }));
      }   

    const handleTypeCompleted = (e: ChangeEvent<HTMLInputElement>)=> {
      console.log(e.target.value)
     // setComplete(e.target.value);
    };

   
    console.log("TodoItem Render");

    return (
        <div className="inner-content-list">
         <div className='padding-list' >
             
        <label
          style={{ textDecoration: props.Completed ? 'line-through' : undefined }} >
          <p className="center" >            
          Actividad:{' '}{props.text}                      
          </p>
         <p className="center" >          
          Time:{' '}{props.time}          
         </p>
        </label> 
           <p className="center">
           Completed:{' '}{' '}
           <input type="checkbox"          
         onChange={handleTypeCompleted}
        onClick={toggleCompeleted}
        checked={props.Completed} />    
          </p>       
       
          <div className="center">    
         <button  className="btn-primary " onClick={removeTodoHandler}>
          remove
         </button>
         <button className="btn-primary"  onClick={editTodoHandler}>
          edit
         </button>
         </div>    
     
      </div>
      </div>
    );
  });

export default TodoItem;


//{props.id}

//className="inner-content-list"