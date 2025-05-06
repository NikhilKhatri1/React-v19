import React from 'react'
import PostTraditional from './PostTraditional'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex flex-col py-2 px-3'>
      <h1>Home Page</h1>
      <div className='mt-5'>
        <Link className='bg-amber-300 py-2 px-4 rounded-lg' to={"/"}>Home</Link>
      </div>
      <div className='my-5'>
        <Link className='bg-amber-300 py-2 px-4 rounded-lg' to={"/post-traditional"}>Post Tradition</Link>
      </div>
      <div>
        <Link className='bg-amber-300 py-2 px-4 rounded-lg' to={"/post-rq"}>Post React Query</Link>
      </div>
    </div>
  )
}

export default Home