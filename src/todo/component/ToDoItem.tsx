import React from "react";
import {useAppDispatch } from "../redux/hooks";
import  { useState,  ChangeEvent} from 'react';
//import {useAppSelector} from "../redux/hooks"
import { todosActions } from "../redux/todoSlicer";
import { showEditActions } from "../redux/EditSlicer";
//import { showEditActions } from "../../features/isShowEdit";
//import pen from "../../assets/pen-solid.svg";
//import trash from "../../assets/trash-solid.svg";
//import check from "../../assets/check-solid.svg";

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

   const editTodoHandler = () => {
     dispatch(
       showEditActions.setShowEdit({
         idTodo: props.id,
         titleTodo: props.text,
         timeTodo:props.time,
         isShow: true,
       })
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
      <li >        
        
         <label
        style={{ textDecoration: props.Completed ? 'line-through' : undefined }} >
          <p >            
          Actividad: 
          {props.text}                      
          </p>
         <p>          
          Time:
          {props.time}          
          </p>
        </label>        
        Completed:
        <input type="checkbox"          
         onChange={handleTypeCompleted}
        onClick={toggleCompeleted}
        checked={props.Completed} />           
         <button  onClick={removeTodoHandler}
             >remove
         </button>
         <button  onClick={editTodoHandler}
             >edit
         </button>   
      </li>
    );
  });

export default TodoItem;


//{props.id}