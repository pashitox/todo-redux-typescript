

import Sidebar from './todo/component/Sidebar'
import MainRoutes from './Routes'

import './styles.css'

function App() {
  return (
<div className="app">
     
     {/** Sidebar */}
     <Sidebar/>

     {/** Inner container */}
    <MainRoutes/>
    </div>
 

   
  );
}

export default App;





//<Route path="/update-book/:id" component={AddBook} /> 





//function App() {
//  const isShowEdit = useAppSelector((state) => state.showEdit.value);
//  return (
//    <>
//      <div className="w-full max-w-xs m-auto mt-20">
//        <div className="mb-4">
//        <h1>Hello React</h1>
//            <TodoForm/>
//            <ToDoList/>
//            {isShowEdit.isShow && <TodoEdit />}
//            Hello React
//          
//          
//         
//        </div>
//       
//      </div>
//    </>
//  );
//}
//
//export default App;