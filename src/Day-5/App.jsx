import React from 'react'
import { useRoutes } from 'react-router-dom'
import Layout from './ReactQueries/Layout/Layout'
import ReactQueries from './ReactQueries/ReactQueries'
import NotFound from './components/NotFound'

const App = () => {
    const router = useRoutes([
        {
            path: "/",
            element: <Layout />,
            children: [
                { path: "ReactQueries", element: <ReactQueries /> }
            ]
        },
        { path: "*", element: <NotFound /> }
    ])

    return router
}

export default App