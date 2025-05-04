import React from 'react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import AppContextProvider from './context/AppContext'

const Main = () => {
    return (
        <AppContextProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </AppContextProvider>

    )
}

export default Main