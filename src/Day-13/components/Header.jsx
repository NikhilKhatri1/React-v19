import React from 'react'

const Header = () => {
  return (
    <div className='bg-gray-100 px-10 py-3'>
      <div className='flex justify-between items-center'>
        <div><h1>Logo</h1></div>
        <div>
          <ul className='flex justify-between items-center gap-4'>
            <li>Add Blog</li>
            <li>Blog List</li>
          </ul>
        </div>
        <div>
          <button className='border-1 px-5 py-1 rounded-lg bg-black text-white'>Add Blog</button>
        </div>
      </div>
    </div>
  )
}

export default Header