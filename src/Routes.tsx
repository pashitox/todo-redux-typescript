import React from "react"
import {Routes, Route, Navigate} from "react-router-dom"


import Tab from "./todo/component/Tab"
import TodoForm from "./todo/component/TodoForm"
import TodoList from "./todo/component/TodoList"




const MainRoutes = () => (
	<Routes>
		

		{/** Public Routes */}
		{/** Wrap all Route under PublicRoutes element */}
		
        <Route path="tab" element={<Tab />}>					
			<Route path="tab" element={<Tab />} />					
		</Route>
            <Route path="/TodoForm" element={<TodoForm />} />
            <Route path="/TodoList" element={<TodoList />} />
		
		{/** Permission denied route */}
		
	</Routes>
)

export default MainRoutes