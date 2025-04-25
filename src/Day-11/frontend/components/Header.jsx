import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className='h-13 shadow-lg sticky top-0 z-10'>
      <div className='flex justify-between items-center h-full px-10'>
        <div>
          <h1 className='text-xl font-bold'>img Logo</h1>
        </div>
        <div>
          <ul className='flex items-center justify-between gap-20'>
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? 'text-lg font-semibold text-red-500' : 'text-lg font-semibold'}
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) => isActive ? 'text-lg font-semibold text-red-500' : 'text-lg font-semibold'}
            >
              <li>Login</li>
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) => isActive ? 'text-lg font-semibold text-red-500' : 'text-lg font-semibold'}
            >
              <li>Register</li>
            </NavLink>
          </ul>
        </div>
        <div>
          <button className='py-2 px-6 bg-sky-300 font-bold rounded-xl hover:bg-sky-400 transition'>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
