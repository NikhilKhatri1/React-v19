import React from 'react'
import { useRoutes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import Register from './pages/Register'
import ProtectedRoute from './pages/ProtectedRoute'

const App = () => {
  const router = useRoutes([
    {
      path: "/", element: <Layout />, children: [
        {
          index: true, element:
            <ProtectedRoute >
              <Home />
            </ProtectedRoute >
        },
        { path: "api/user/login", element: <Login /> },
        { path: "api/user/register", element: <Register /> }
      ]
    },
    {
      path: "*", element: <NotFound />
    }


  ])
  return router
}

export default App