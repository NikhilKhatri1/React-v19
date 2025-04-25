import React from 'react'

const Register = () => {
  return (
    <div className='flex justify-center items-center py-20'>
      <form className='border-gray-300 border-1 w-100 rounded-lg shadow-sm bg-gray-50 px-10'>
        <div>
          <h1 className='text-2xl text-center mt-4 font-bold mb-8'>Register</h1>
        </div>
        <div className='flex gap-3 mb-4'>
          <label className='text-lg font-bold'>Username: </label>
          <input
            className='border w-full rounded-lg p-1'
            type="email" />
        </div>
        <div className='flex gap-13 mb-4'>
          <label className='text-lg font-bold'>Email: </label>
          <input
            className='border w-full rounded-lg p-1'
            type="email" />
        </div>
        <div className='flex gap-4 mb-4'>
          <label className='text-lg font-bold'>password: </label>
          <input
            className='border w-full rounded-lg p-1'
            type="password" />
        </div>
        <div>
          <button className='my-5 p-3 w-full text-center bg-sky-600 rounded-lg'>Register</button>
        </div>
      </form>
    </div>
  )
}

export default Register