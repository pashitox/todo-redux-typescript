import React from "react"
import {Routes, Route, Navigate} from "react-router-dom"


import Tab from "./todo/component/Tab"
import TodoForm from "./todo/component/TodoForm"
import TodoList from "./todo/component/TodoList"




const MainRoutes = () => (
	<Routes>		
        <Route path="/" element={<Tab />}>					
			<Route path="tab" element={<Tab />} />					
            </Route>
            <Route path="/TodoForm" element={<TodoForm />} />
            <Route path="/TodoList" element={<TodoList />} />
      
	</Routes>
)

export default MainRoutes