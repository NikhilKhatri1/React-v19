import React from 'react'
import AddBlog from './components/AddBlog'
import BlogList from './components/BlogList'

const App = () => {
  return (
    <div className='px-3 py-2'>
      <h1>Blog App Using Redux for State Management</h1>
      <AddBlog />
      <BlogList />
    </div>
  )
}

export default App