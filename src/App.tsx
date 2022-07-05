import React from "react";
import "./App.css";
import { useAppSelector } from "./todo/redux/hooks";

import TodoForm from "./todo/component/TodoForm";
import ToDoList from "./todo/component/TodoList";
import TodoEdit from "./todo/component/TodoEdit";




function App() {
  const isShowEdit = useAppSelector((state) => state.showEdit.value);
  return (
    <>
      <div className="w-full max-w-xs m-auto mt-20">
        <div className="mb-4">
        <h1>Hello React</h1>
            <TodoForm/>
            <ToDoList/>
            {isShowEdit.isShow && <TodoEdit />}
            
            
         
        </div>
       
      </div>
    </>
  );
}

export default App;