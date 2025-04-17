import React from 'react'
import { Route, Routes, useRoutes } from 'react-router-dom'
import Home from './Pages/Home'
import Reciepes from './Pages/Reciepes'
import Comments from './Pages/Comments'
import Layout from './Layout/Layout'
import NotFound from './Pages/NotFound'
import Hooks from '../Hooks/Hooks'
import UseRefHook from '../Hooks/useRefHook'
import UseCallbackHook from '../Hooks/useCallbackHook'
import UseMemoHook from '../Hooks/useMemoHook'



const App = () => {
  const router = useRoutes([
    {
      path: "/",
      element: < Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "reciepes", element: <Reciepes /> },
        { path: "comments", element: <Comments /> }
      ]
    },
    {
      path: "*", element: <NotFound />
    },
    {
      path: "/hooks", element: <Hooks />,
      children: [
        { path: "useRefHook", element: <UseRefHook /> },
        { path: "useCallbackHook", element: <UseCallbackHook /> },
        { path: "useMemoHook", element: <UseMemoHook /> }
      ]
    }
  ])

  return router;

}

export default App