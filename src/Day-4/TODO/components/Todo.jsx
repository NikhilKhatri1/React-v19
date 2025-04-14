import React, { useContext, useState } from 'react'
import { ContextApi } from '../context/AppContext'
import TodoCard from './TodoCard';
import axios from 'axios';
import TodoDetails from './TodoDetails';
import { Skeleton } from '@mui/material';

const Todo = () => {
    const { todoList, loading, error } = useContext(ContextApi);
    const [openDialog, setOpenDialog] = useState(false);
    const [todoDetail, setTodoDetail] = useState(null);
    if (loading) {
        return <p>Laoding .....</p>
    }
    if (error) {
        return <p>{error}</p>
    }
    const handleTodoListData = async (todoId) => {
        try {
            const response = await axios.get(`https://dummyjson.com/todos/${todoId}`);
            if (response?.data) {
                setTodoDetail(response.data);
                setOpenDialog(true);
            } else {
                setTodoDetail(null);
                setOpenDialog(false);
            }
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div>
            <h1>Todo List</h1>

            <ul className='grid grid-cols-3 gap-5'>
                {
                    todoList && todoList.length > 0
                        ? (
                            todoList.map((item) =>
                                <TodoCard key={item.id} todo={item} handleTodoListData={handleTodoListData} />
                            )
                        )
                        : (
                            <p>No Todo Found</p>
                        )

                }
            </ul>
            <TodoDetails
                setOpenDialog={setOpenDialog}
                openDialog={openDialog}
                todoDetail={todoDetail}
                setTodoDetail={setTodoDetail}
            />
        </div>
    )
}

export default Todo