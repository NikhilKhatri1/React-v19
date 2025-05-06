import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import StorePage from './components/StorePage'

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/store' element={<StorePage />} />
        </Routes>
    )
}

export default App