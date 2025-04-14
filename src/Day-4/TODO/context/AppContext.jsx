import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
// Create Context
export const ContextApi = createContext();


const AppContext = ({ children }) => {
    const [todoList, setTodoList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleApiData = async () => {
        try {
            setLoading(true);
            const response = await axios.get('https://dummyjson.com/todos');
            if (response?.data?.todos) {
                setTodoList(response?.data?.todos);
            } else {
                setTodoList([])
            }
        } catch (error) {
            console.error(error);
            setError('Failed to fetch data. Please try again later.');
        }
        finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        handleApiData();
    }, []);
    useEffect(() => {
        console.log(todoList);
    }, [todoList])
    return (
        <ContextApi.Provider value={{ todoList, loading, error }}>
            {children}
        </ContextApi.Provider>
    )
}

export default AppContext