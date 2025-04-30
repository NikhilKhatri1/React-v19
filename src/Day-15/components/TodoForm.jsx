import React, { useContext, useEffect } from 'react'
import { TodoContext } from '../context/TodoContext';


const TodoForm = () => {
    const { newTitle, setNewTitle, todoLists, setTodoLists, editTitle, setEditTitle } = useContext(TodoContext);
    const handleInputChange = (e) => {
        setNewTitle(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTitle.trim() === "") return;
        if (editTitle !== null) {
            // Update the existing todo item
            const updatedTodoLists = todoLists.map((todo) =>
                todo.id === editTitle ? { ...todo, title: newTitle } : todo
            );
            setTodoLists(updatedTodoLists);
            setEditTitle(null); // Reset edit mode
            setNewTitle(""); // Clear input field
        } else {
            const id = todoLists.length + 1;
            setTodoLists([...todoLists,
            {
                id: id,
                title: newTitle
            }])
            setNewTitle("");
        }
    }

    useEffect(() => {
        console.log(todoLists)
        localStorage.setItem("todoLists", JSON.stringify(todoLists))
    }, [todoLists])


    return (
        <div className='bg-sky-400 p-2 px-4 w-1/2 rounded-lg shadow-lg text-black'>
            <h1 className='text-3xl text-center font-bold my-5'>Todo App</h1>
            <form
                onSubmit={handleSubmit}
                className='mt-10 mb-5 flex items-center gap-8 justify-center'>
                <label
                    className='text-lg font-bold'
                >Todo Title:
                </label>
                <input
                    value={newTitle}
                    onChange={handleInputChange}
                    className='px-4 py-1 bg-gray-50 focus:outline-none focus:border-2 focus:border-sky-700 rounded-xl text-black'
                    type="text"
                />
                <button
                    className='rounded-lg bg-black text-white py-1 px-4'
                    type='submit'
                >{editTitle ? "Edit" : "Submit"}
                </button>
            </form>
        </div>
    )
}

export default TodoForm