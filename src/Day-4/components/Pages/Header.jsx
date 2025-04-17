import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='flex justify-between h-[50px] items-center border-b-[0.5px] px-5'>
            <h1>Logo</h1>
            <ul className='flex justify-between'>
                <li className='ms-2'><Link to={"/"}>Home</Link></li>
                <li className='ms-2'>Contact</li>
                <li className='ms-2'><Link to={"/reciepes"}>Reciepes</Link></li>
                <li className='ms-2'><Link to={"/comments"}>Comment</Link></li>
            </ul>
            <button
                className='border-red-600 bg-red-600 p-2 rounded-lg'
            >Login</button>
        </div>
    )
}

export default Header