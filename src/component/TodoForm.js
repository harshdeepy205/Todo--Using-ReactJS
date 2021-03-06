import React, { useState, useRef, useEffect } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    })
    const handleChange = e => {
        setInput(e.target.value)
    }

    const handelSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput('')
    }
    return (
        <form className='todo-form' onSubmit={handelSubmit}>
            <input type='text' placeholder='Add Todo' value={input} name='text' className='todo-input' onChange={handleChange} ref={inputRef} />
            <button className='todo-button btn btn-success'>Add Todo</button>
        </form>
    )
}

export default TodoForm;