import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

const Main = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </QueryClientProvider>

    )
}

export default Main