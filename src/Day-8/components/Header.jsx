import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='flex justify-between items-center bg-sky-300 py-4 px-10'>
            <div>
                <h1>Header Logo</h1>
            </div>
            <div>
                <ul className='flex justify-between items-center gap-5 text-lg font-mono'>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <button className='bg-amber-400 text-black py-2 rounded-xl px-6 border-none'>Login</button>
            </div>
        </div>
    )
}

export default Header