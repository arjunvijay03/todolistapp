import React from 'react'
import './EditTodo.css'
import { useDispatch, useSelector } from 'react-redux'
import { handleTodoDescriptionChange, handleTodoTitleChange, saveEditedTodo } from '../../Redux/TodoReducer'


function EditTodo() {
    const { todoTitle, todoDescription, } = useSelector(state => state.Todos)
    const dispatch = useDispatch()
  return (
    <div className='editTodoContainer'>
      <div className="etcHeader">
        <i className="fa-solid fa-arrow-left "></i>
        <p className="etcTitle">
            Edit Todo
        </p>
      </div>
      <input type="text" value={todoTitle} onChange={event => dispatch(handleTodoTitleChange(event.target.value))} className='etcInput' name="" id="" />
      <textarea name="" value={todoDescription} onChange={event => dispatch(handleTodoDescriptionChange(event.target.value))} className='etcTextArea' id="" cols="30" rows="5"></textarea>
      <button className='etcSaveBtn' onClick={()=>dispatch(saveEditedTodo())}>
        Save
      </button>
    </div>
  )
}

export default EditTodo
