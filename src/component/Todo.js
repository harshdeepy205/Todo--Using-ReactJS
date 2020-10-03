import React, { useState } from 'react'
import TodoForm from './TodoForm';
import { RiCloseCircleLine, RiEdit2Line } from 'react-icons/ri'
import '../App.css'
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
        <div className="container list">
            <ul>
                <li>
                    <div className="row">
                        <div className="col-6 text-center">
                            <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>

                                <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                                    {<h3>{todo.text}</h3>}
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="text-center">
                                    <button onClick={() => removeTodo(todo.id)} className='btn btn-danger buttons'> Remove</button>
                                    <button onClick={() => setEdit({ id: todo.id, value: todo.text })} className='btn btn-info buttons'> Edit </button>
                                </div>
                                    {/* <TiEdit /> */}

                                    {/* <Edit /> */}

                        </div>
                    </div>
                </li>
            </ul>        
        </div>
    ))
}
export default Todo
