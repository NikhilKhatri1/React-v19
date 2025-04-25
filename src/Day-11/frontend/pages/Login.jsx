import React, { useEffect, useState } from 'react'

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const handleUserLogin = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value, 
    })
  }

  return (
    <div className='flex justify-center items-center py-20'>
      <form className='border-1 border-gray-300 w-100 rounded-lg shadow-sm bg-gray-50 px-10'>
        <div>
          <h1 className='text-2xl text-center mt-4 font-bold mb-8'>Login</h1>
        </div>
        <div className='flex gap-10 bg-white'>
          <label className='text-lg font-bold'>Email: </label>
          <input
            name="email"  // Set name to match state field
            value={user.email}
            onChange={handleUserLogin}
            className='border w-full rounded-lg p-1'
            type="email" />
        </div>
        <div className='flex gap-3 my-4'>
          <label className='text-lg font-bold'>Password</label>
          <input
            name="password" // Set name to match state field
            value={user.password}
            onChange={handleUserLogin}
            className='border w-full rounded-lg p-1'
            type="password" />
        </div>
        <div>
          <button className='my-5 p-3 w-full text-center bg-sky-600 rounded-lg'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login
