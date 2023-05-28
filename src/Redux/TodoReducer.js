import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

const INITIAL_STATE = {
    todoData : JSON.parse(localStorage.getItem('tododata')) || [],
    todoListTitle : '',
    todoTitle : '',
    todoDescription:'',
    editTodoShow : false,
    editTodosId:null,
    editTodoId:null,
}
const TodoSlice = createSlice({
    name : 'todo',
    initialState: INITIAL_STATE,
    reducers:{
        handleTodoListTitleChange: (state, action)=>{
            state.todoListTitle = action.payload
        },
        handleTodoTitleChange : (state, action) =>{
            state.todoTitle = action.payload
        },
        handleTodoDescriptionChange : (state, action) =>{
            state.todoDescription = action.payload

        },

        handleAddTodos : (state) =>{
            if(state.todoListTitle !== ''){
            state.todoData = [...state.todoData, 
                {
                    Id : state.todoListTitle,
                    todos:[]
                } 
            ]

            state.todoListTitle = ''
            localStorage.setItem('tododata', JSON.stringify(state.todoData));
        }
            else{
                alert( 'Fill the Field')
            }
        }, 
        handleAddTodo : (state, action)=>{
            
          let currentTodo = state.todoData?.find(item=>item.Id === action.payload)
          currentTodo.todos = [...currentTodo.todos, {
            id : uuidv4(),
            title: state.todoTitle,
            description : state.todoDescription,
            isDone : false
          }]

          state.todoDescription = ''
          state.todoTitle = ''
          localStorage.setItem('tododata', JSON.stringify(state.todoData));
         
        },

        editTaskBtnClick : (state, action) =>{
            state.editTodoShow = true
            state.todoTitle = action.payload.title
            state.todoDescription = action.payload.description
            state.editTodosId = action.payload.todosId
            state.editTodoId = action.payload.todoId
        },
        editTodoShowChange : (state,action)=>{
            state.editTodoShow = action.payload
        },

        saveEditedTodo : (state, action) =>{
            if(state.todoTitle !== '' && state.todoDescription !== ''){
                
                let currentTodoList = state.todoData?.find(item => item.Id === state.editTodosId)
                let currentTodo = currentTodoList.todos?.find(item => item.id === state.editTodoId)
                currentTodo.title = state.todoTitle
                currentTodo.description = state.todoDescription
                state.editTodoShow = false
                state.todoTitle = ''
                state.todoDescription = ''

                localStorage.setItem('tododata', JSON.stringify(state.todoData));
            }else{
                alert("complete the fields")
            }
        }



        

    }
    
})

export const { handleTodoListTitleChange, handleAddTodos, 
    handleTodoTitleChange, handleTodoDescriptionChange, 
    handleAddTodo, editTaskBtnClick, editTodoShowChange,saveEditedTodo } = TodoSlice.actions
export default TodoSlice.reducer