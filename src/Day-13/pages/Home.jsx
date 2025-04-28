import React from 'react'
import BlogList from '../components/BlogList'
import AddBlog from '../components/AddBlog'

const Home = () => {
  return (
    <div>
      <h1 className='text-5xl text-center'>Blog App</h1>
      <AddBlog />
      <BlogList />
    </div>
  )
}

export default Home