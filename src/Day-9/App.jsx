import React from 'react'
import { useRoutes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './pages/Home'

const App = () => {
    const router = useRoutes([
        {
            path: "/",
            element: <Layout />,
            children: [
                { index: true, element: <Home /> }
            ]
        }
    ])
    return router

}

export default App