import React, { useState } from 'react'
import TodoForm from './TodoForm';
import { RiCloseCircleLine, RiEdit2Line } from 'react-icons/ri'
// import { RiEdit2Line } from 'react-icon/ri';
// import { Edit } from '@material-ui/icons';

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }
    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }


    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>

            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
                <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className='delete-icon' />
                <RiEdit2Line onClick={() => setEdit({ id: todo.id, value: todo.text })} className='edit-icon' />
                {/* <TiEdit /> */}

                {/* <Edit /> */}
            </div>


        </div>
    ))
}
export default Todo
