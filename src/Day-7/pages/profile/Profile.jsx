import React, { useContext } from 'react'
import { AuthContext } from '../../context/Context'

const Profile = () => {
  const { user, handleLogout } = useContext(AuthContext);

  // console.log(user?.displayName);
  return (
    <div className='text-center mt-10'>
      <h1 className='mb-10 text-3xl font-bold'>Hello! {user?.displayName}</h1>
      <button
        className='border px-4 py-2 bg-red-500 text-white rounded-md'
        onClick={handleLogout}
      >Logout</button>
    </div>
  )
}

export default Profile