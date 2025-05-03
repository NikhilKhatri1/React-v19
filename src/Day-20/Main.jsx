import React from 'react'
import App from './App'
import AppContextProvider from './context/AppContext'
import { BrowserRouter } from 'react-router-dom'

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