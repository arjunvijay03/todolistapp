import React from 'react'
import './HomePage.css'
import SideBar from '../Components/Side-bar/SideBar'
import Header from '../Components/Header/Header'
import ToDos from '../Components/To-dos/ToDos'
import { useDispatch, useSelector } from 'react-redux'
import { handleTodoListTitleChange, handleAddTodos } from '../Redux/TodoReducer'
import EditTodo from '../Components/EditTodo/EditTodo'
function HomePage() {
  const dispatch = useDispatch()
  const { todoListTitle, todoData, editTodoShow } = useSelector(state => state.Todos)

  return (
    <div className='homePage'>
      <SideBar></SideBar>
      <div className='homeRight'>
        <Header></Header>
        <div className="homeMain">
          <div className="todosWrapper">
            {
               todoData?.map((item, index) =>  <ToDos todosData = {item} key={ index }></ToDos> )
            }
            


            <div className="todosTitle">
              <input type="text" value={todoListTitle} onChange={(event) => dispatch(handleTodoListTitleChange(event.target.value))} className='todoInput' placeholder='Add Todo-List'/>
              <div onClick={()=>dispatch(handleAddTodos())} className="tdEditBtn tdAddBtn">
                <i  className="fa-sharp fa-solid fa-plus"></i>
              </div>
            </div>


          </div>
         {editTodoShow && <div className="editTodo">
              <EditTodo></EditTodo>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default HomePage
