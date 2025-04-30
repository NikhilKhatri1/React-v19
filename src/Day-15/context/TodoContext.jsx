import React, { createContext, useState } from 'react'

export const TodoContext = createContext();
const TodoContextProvider = ({ children }) => {
    const [todoLists, setTodoLists] = useState(() => {
        // Load from localStorage on mount
        const savedTodos = localStorage.getItem('todoLists');
        return savedTodos ? JSON.parse(savedTodos) : [];
    })
    const [newTitle, setNewTitle] = useState("");
    const [editTitle, setEditTitle] = useState(null);
    return (
        <TodoContext.Provider value={{ todoLists, setTodoLists, newTitle, setNewTitle, editTitle, setEditTitle }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider