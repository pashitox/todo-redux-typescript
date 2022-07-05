import React from "react";
import {useAppDispatch } from "../redux/hooks";

import { todosActions } from "../redux/todoSlicer";
import { showEditActions } from "../redux/EditSlicer";
//import { showEditActions } from "../../features/isShowEdit";
//import pen from "../../assets/pen-solid.svg";
//import trash from "../../assets/trash-solid.svg";
//import check from "../../assets/check-solid.svg";

const TodoItem: React.FC<{ text: string; id:string; time:string, Completed: boolean }> =
  React.memo((props) => {
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

   
    console.log("TodoItem Render");

    return (
      <li >
        <div>
          <p  >
          Actividad: 
          {props.text}                  
          </p>
            
          <p>
          Time:
          {props.time}
          </p>
          <p>
          completed:
          {props.Completed}
          </p>
         
        </div>
        <div >       
         <button  onClick={removeTodoHandler}
             >remove
         </button>
         <button  onClick={editTodoHandler}
             >edit
         </button>
                   
           
        </div>
      </li>
    );
  });

export default TodoItem;


//{props.id}