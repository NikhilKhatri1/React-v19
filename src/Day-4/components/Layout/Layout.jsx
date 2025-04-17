import React from 'react'
import Header from '../Pages/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='p-1'>
            <Header />
            <Outlet />
        </div>
    )
}

export default Layout