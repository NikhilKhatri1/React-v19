import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

const TodoList = () => {
    const { todoLists, setTodoLists, setNewTitle, setEditTitle, editTitle } = useContext(TodoContext);

    const handleRemove = (todoId) => {
        const updatedTodo = todoLists.filter(todo => todo.id !== todoId);
        setTodoLists(updatedTodo);
    }
    const handleEdit = (todoId) => {
        const editTitleIndex = todoLists.findIndex(todo => todo.id === todoId);
        const todoEditTitle = todoLists[editTitleIndex]
        setEditTitle(todoEditTitle.id);
        setNewTitle(todoEditTitle.title);
    }
    // console.log(editTitle);
    return (
        <div className='bg-amber-300 px-4 py-2 mt-10 text-black w-1/2 rounded-xl shadow-lg'>
            <h1 className='font-bold text-3xl text-center my-5'>Todo List</h1>
            <ul>
                {
                    todoLists.length > 0
                        ? (
                            todoLists.map(todo => (
                                <li key={todo.id} className='flex justify-between items-center gap-5 mt-2'>

                                    <h1 className='text-lg text-black'> <span className='me-2'>{todo.id}.</span>{todo.title}</h1>
                                    <div>
                                        <button
                                            onClick={() => handleEdit(todo.id)}
                                            className='border-1 py-1 px-3 bg-black text-white me-1'>Edit</button>
                                        <button
                                            onClick={() => handleRemove(todo.id)}
                                            className='border-1 py-1 px-3 bg-black text-white ms-1'>Remove</button>
                                    </div>
                                </li>
                            ))
                        )
                        : (<p className='text-center text-xl'>Not todo Item Found</p>)
                }
            </ul>
        </div>
    )
}

export default TodoList