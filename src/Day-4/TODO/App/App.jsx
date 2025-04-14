import React from 'react'
import AppContext from '../context/AppContext'
import Todo from '../components/Todo';

const App = () => {
    return (
        <AppContext>
            <Todo />
        </AppContext>
    )
}

export default App