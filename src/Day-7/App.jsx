import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './Layout/Layout'
import NotFound from './pages/NotFound'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import PrivateRoute from './pages/private-route/PrivateRoute'
import Profile from './pages/profile/Profile'

const App = () => {
    const router = useRoutes([
        {
            path: '/',
            element: <Layout />,
            children: [
                { index: true, element: <Home /> },
                { path: "login", element: <Login /> },
                { path: "register", element: <Register /> },
                { path: "profile", element: <PrivateRoute><Profile /></PrivateRoute> }
            ]
        },
        { path: '*', element: <NotFound /> }
    ])
    return router
}

export default App