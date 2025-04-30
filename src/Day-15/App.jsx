import React from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const App = () => {
    return (
        <div className='bg-gray-800 text-white px-8 py-3 h-screen flex flex-col items-center'>
            <TodoForm />
            <TodoList />
        </div>

    )
}

export default App