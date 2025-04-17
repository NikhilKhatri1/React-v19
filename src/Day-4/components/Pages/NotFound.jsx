import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Page not found</h1>
            <button
                className='border-gray-900 p-2 bg-gray-700 text-white rounded-xl'
                onClick={() => navigate("/")}>Go Back</button>
        </div>
    )
}

export default NotFound