import React from 'react'
import App from './App'
import TodoContextProvider from './context/TodoContext'

const Main = () => {
    return (
        <TodoContextProvider>
            <App />
        </TodoContextProvider>
    )
}

export default Main