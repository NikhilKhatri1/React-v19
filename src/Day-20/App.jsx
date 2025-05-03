import React from 'react'
import Dashboard from './components/Dashboard'
import { Route, Routes } from 'react-router-dom'
import StorePage from './components/StorePage'

const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/store' element={<StorePage />} />
            </Routes>
        </div>
    )
}

export default App