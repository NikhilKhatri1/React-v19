import React, { useState } from 'react'

const ProgressBar = () => {
    const [range, setRange] = useState(0);
    const [color, setColor] = useState("red");

    const handleClickIncrement = () => {
        if (range < 100) {
            setRange(range + 10)
        }
        setRange(range)
    }
    const handleClickDecrement = () => {
        if (range >= 0) {
            setRange(range - 10)
        }
        setRange(range);
    }

    return (
        <div className='flex justify-center items-center h-screen bg-gray-800 text-white flex-col'>
            <h1 className='text-4xl font-bold'>Progress Bar</h1>
            <div className='mt-10'>
                <div className='w-60 h-7 border-1 bg-gradient-to-r from-100% from-yellow-400 via-110% via-white to-white rounded-lg text-black font-semibold flex items-center px-1'>
                    <p className='ms-[95%]'>{range}</p>
                </div>
                <div className='mt-5 text-black'>
                    <button
                        onClick={handleClickIncrement}
                        className='border-1 border-gray-800 bg-gray-50 px-2 py-1 rounded-lg me-5'>+10%</button>
                    <button
                        onClick={handleClickDecrement}
                        className='border-1 border-gray-800 bg-gray-50 px-2 py-1 rounded-lg '>-10%</button>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar