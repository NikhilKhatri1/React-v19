import React, { useState } from 'react'

const LikeButton = () => {
    const [isLiked, setIsLiked] = useState(false);
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <h1>Like Button</h1>
            <button
                onClick={() => setIsLiked(!isLiked)}
                className={isLiked ? 'border-3 border-red-900 py-2 px-4 rounded-full text-white bg-red-600' : 'border-3 border-gray-600 py-2 px-4 rounded-full text-black'}>
                <span>{isLiked ? "🤍" : "❤️"}</span> Like
            </button>
        </div>
    )
}

export default LikeButton