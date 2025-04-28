import React from 'react'
import { useRoutes } from 'react-router-dom'
import Layout from '../Day-13/Layout/Layout'
import NotFound from './pages/NotFound'
import Home from './pages/Home'

const App = () => {
    const router = useRoutes([
        {
            path: "/",
            element: <Layout />,
            children: [
                { index: true, element: <Home /> },
            ]
        },
        {
            path: "*", element: <NotFound />
        }
    ])
    return router
}

export default App