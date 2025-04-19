import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between items-center p-2 px-10 border-b-1'>
      <div>
        <h1><Link to="/">Logo</Link></h1>
      </div>
      <div>
        <ul className='flex justify-between'>
          <li className='ms-5'><Link to="/Products">Products</Link></li>
          <li className='ms-5'>new</li>
        </ul>
      </div>
      <div>
        <button className='border-gray-800 p-2 bg-gray-100 rounded-lg'>GetStarted</button>
      </div>
    </div>
  )
}

export default Header