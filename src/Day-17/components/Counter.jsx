import React, { useState } from 'react'
import Child from './Child';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className='border-1 border-bg-white text-center my-10'>
            <h1 className='text-2xl my-3 font-bold'>Counter Component for Unit Testing</h1>
            <p className='text-xl my-5'>Count: {count}</p>
            <button
                onClick={() => setCount(prev => prev + 1)}
                className='bg-black text-white py-1 px-4 my-5'
            >click +
            </button>
            <Child count={count} />
        </div>
    )
}

export default Counter