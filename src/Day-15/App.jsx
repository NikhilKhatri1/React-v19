import React, { useState, useEffect } from 'react';

const App = () => {
    const [todoTitles, setTodoTitles] = useState([]);
    const [newTitle, setNewTitle] = useState("");
    const [editTodo, setEditTodo] = useState(null);


    const handleInputChange = (e) => {
        setNewTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTitle.trim() === "") return;
        if (editTodo !== null) {
            let listOfTodo = [...todoTitles];
            let findIndexOfTodo = listOfTodo.findIndex(todo => todo === editTodo);
            listOfTodo[findIndexOfTodo] = newTitle;
            let updatedTodoList = listOfTodo;
            setTodoTitles(updatedTodoList);
            localStorage.setItem("todoList", JSON.stringify(updatedTodoList));
        } else {
            let updatedTitles = [...todoTitles, newTitle];
            localStorage.setItem("todoList", JSON.stringify(updatedTitles));
            setTodoTitles(updatedTitles);
            setNewTitle("");
        }

    }
    const handleEdit = (todoData) => {
        console.log(todoData);
        setNewTitle(todoData);
        setEditTodo(todoData);
    }
    const handleRemove = (todoData) => {
        // console.log(todoData);
        let updatedList = todoTitles.filter(singleTodoTitle => singleTodoTitle !== todoData);
        localStorage.setItem('todoList', JSON.stringify(updatedList))
        setTodoTitles(updatedList);
    }
    useEffect(() => {
        const storedTitles = localStorage.getItem("todoList");
        if (storedTitles) {
            setTodoTitles(JSON.parse(storedTitles));
        }
    }, [])
    return (
        <div className='bg-gray-50 h-screen p-2'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-5xl text-gray-800 font-bold'>Create TODO App</h1>
                <div className='bg-sky-300 mt-10 rounded-xl shadow-md px-8 py-4'>
                    <form
                        onSubmit={handleSubmit}
                        className='flex justify-between items-center gap-5'>
                        <label>Title:</label>
                        <input
                            onChange={handleInputChange}
                            value={newTitle}
                            className='bg-gray-100 border-sky-600 border p-1 rounded-lg focus:outline-none focus:border-2 focus:border-sky-700'
                            name='todoTitle'
                            type="text" />
                        <button
                            className='bg-black text-white font-bold p-2 rounded-xl'
                            type='submit'
                        >
                            {
                                editTodo ? "edit" : "submit"
                            }
                        </button>
                    </form>
                </div>
                <div className='mt-10 bg-amber-300 px-8 py-4 shadow-md rounded-lg'>
                    <h5 className='text-xl text-center mb-5 font-bold'>Todo List</h5>
                    {
                        todoTitles.length > 0
                            ? todoTitles.map((todoTitle) => (
                                <div
                                    className='flex gap-5 justify-between items-center mt-2'
                                    key={todoTitle}>
                                    <p>Todo Title: {todoTitle}</p>
                                    <div className='flex gap-2'>
                                        <button
                                            onClick={() => handleEdit(todoTitle)}
                                            className='border p-1 bg-white rounded-lg text-black'>edit</button>
                                        <button
                                            onClick={() => handleRemove(todoTitle)}
                                            className='border p-1 bg-white rounded-lg text-black'>remove</button>
                                    </div>
                                </div>
                            ))
                            : "No Todo Titles Added"
                    }
                </div>
            </div>
        </div>
    )
}

export default App;
