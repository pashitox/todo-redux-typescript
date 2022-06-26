import React from "react";
import "./App.css";

import Input from "./todo/component/input";
import ToDoList from "./todo/component/Todolist";
import Filter from "./todo/component/filter";



function App() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e)
    e.preventDefault();
  };
  return (
    <>
      <div className="w-full max-w-xs m-auto mt-20">
        <div className="mb-4">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-4 mb-4"
          >
            <Input/>
            <ToDoList/>
            <Filter/>
          </form>
        </div>
       
      </div>
    </>
  );
}

export default App;