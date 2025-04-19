import React from 'react'
import { useRoutes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Products from './pages/Products'
import Product from './pages/Product'
import Carts from './pages/Carts'

const App = () => {
  const Router = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "products", element: <Products /> },
        { path: "products/:id", element: <Product /> },
        { path: "cart", element: <Carts /> }
      ]
    },
    {
      path: "*", element: <NotFound />
    }
  ])
  return Router
}

export default App