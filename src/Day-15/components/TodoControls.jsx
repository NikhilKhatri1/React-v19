import React from 'react'
import { TodoContext } from '../context/TodoContext'

const TodoControls = () => {
    const { newTitle, setNewTitle } = useContext(TodoContext);
    return (
        <div>TodoControls</div>
    )
}

export default TodoControls