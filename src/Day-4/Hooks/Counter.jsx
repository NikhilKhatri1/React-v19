import React from 'react'

const Counter = ({ count, onClick }) => {

    console.log("this is Getting Render", count, onClick);
    return (
        <div>
            <p>{count}</p>
            <button
                onClick={onClick}
                className='border p-2 bg-gray-500 rounded-lg'>count</button>
        </div>
    )
}

export default Counter