import React from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import PostTraditional from './components/PostTraditional'
import PostRq from './components/PostRq'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/post-traditional" element={<PostTraditional />} />
      <Route path='/post-rq' element={<PostRq />} />
    </Routes>
  )
}

export default App