import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Context from '../context/Context'

const Layout = () => {
  return (
    <div>
      <Context>
        <Header />
        <Outlet />
      </Context>

    </div>
  )
}

export default Layout