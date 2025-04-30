import React from 'react'
import useCounter from '../store/UseCounter'

const ManageCounter = () => {
    const handleIncrement = useCounter(state => state.handleIncrementCounter)
    const handleDecrement = useCounter(state => state.handleDecrementCounter)
    return (
        <div className='text-center my-10'>
            <button
                onClick={handleIncrement}
                className='bg-white border-gray-600 py-1 px-4 text-gray-800 font-bold'
            >IncrementCount</button>
            <button
                onClick={handleDecrement}
                className='bg-white border-gray-600 py-1 px-4 text-gray-800 font-bold ms-2'
            >DecrementCounter</button>
        </div>
    )
}

export default ManageCounter