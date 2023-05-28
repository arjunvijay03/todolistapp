import React, { useRef } from 'react'
import './ToDos.css'
import ToDo from './ToDosComponents/ToDo'
import { useDispatch, useSelector } from 'react-redux'
import { handleTodoDescriptionChange, handleTodoTitleChange, handleAddTodo, editTodoShowChange} from '../../Redux/TodoReducer'
function ToDos({todosData}) {
  const { todoTitle, todoDescription } = useSelector(state => state.Todos) 
  const dispatch = useDispatch()
  const titleInputRef = useRef()
  const desInputRef = useRef()
  return (
    <div className='todosContainer'>
        <div className="todosTitle">
            List: {todosData.Id}
        </div>

        <div className="todoContainer">
          <div className="todoTitleContainer">
              <div style={{display:'flex', alignItems:'center'}}>
                <div className="tdtIcon">
                    <i className="fa-solid fa-sack-xmark"></i>
                </div>
                <input type="text" onFocus={()=>dispatch(editTodoShowChange(false))} ref={titleInputRef}  onChange={event => dispatch(handleTodoTitleChange(event.target.value))}  className='todoInput' placeholder='Add Todo'/>
              </div>
              <div onClick={ (event) => {
                if(todoTitle !=='' && todoDescription !== ''){
                  dispatch(handleAddTodo(todosData.Id))
                  titleInputRef.current.value = ''
                  desInputRef.current.value = ''}
                  else {
                    alert('Complete all fields')
                  }
                
                }} className="tdEditBtn tdAddBtn">
                <i className="fa-sharp fa-solid fa-plus"></i>
              </div>
          </div>
          <div className="toDoContent">
            <textarea className='todoTextArea' onFocus={()=>dispatch(editTodoShowChange(false))} ref={desInputRef}  onChange={event => dispatch(handleTodoDescriptionChange(event.target.value))}  placeholder='Add Todo Description' name="" id="" cols="30" rows="3">

            </textarea>
          </div>
        </div>
          {
            todosData.todos?.map((item, index) => <ToDo todoData = {item} todosId = {todosData.Id} key={index}></ToDo> )
          }
      
    </div>
  )
}

export default ToDos
