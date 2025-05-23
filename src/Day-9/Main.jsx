import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import Context from './Context/Context'

const Main = () => {
    return (
        <Context>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Context>
    )
}

export default Main