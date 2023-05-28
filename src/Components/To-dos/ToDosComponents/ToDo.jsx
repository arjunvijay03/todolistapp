import React from 'react'
import './ToDo.css'
import { useDispatch } from 'react-redux'
import { editTaskBtnClick } from '../../../Redux/TodoReducer'
function ToDo({todoData, todosId}) {
  const dispatch = useDispatch()
  return (
    <div className='todoContainer'>
      <div className="todoTitleContainer">
        <div style={{display:'flex', alignItems:'center'}}>
            <div className="tdtIcon">
                <i className="fa-solid fa-sack-xmark"></i>
            </div>
            <p className="tdTitle">
                {todoData.title}
            </p>
        </div>
        <div className="tdEditBtn" onClick={() => {
            dispatch(editTaskBtnClick({title:todoData.title, description:todoData.description, todosId:todosId, todoId:todoData.id}))
            
          }}>
            <i className="fa-sharp fa-solid fa-pen"></i>
        </div>
      </div>
      <div className="toDoContent">
        {todoData.description}
      </div>
    </div>
  )
}

export default ToDo
