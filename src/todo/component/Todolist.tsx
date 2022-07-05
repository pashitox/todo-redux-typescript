import React from "react";
import {useAppSelector} from "../redux/hooks";
import TodoItem from "./TodoItem";

function TodoList () {

  //const dispatch = useAppDispatch();

const TodoList = useAppSelector((state) => state.todoItems )

  return (
    <>
      <div >
       <ul>
      
      {Object.values(TodoList).map(( todo)=>(
       <TodoItem
       key={todo.id}
       id={todo.id}
       text={todo.text}
       time={todo.time}
       Completed={todo.completed}/>

      ))}

      
       </ul>       
      </div>
    </>
  );
};

export default TodoList;