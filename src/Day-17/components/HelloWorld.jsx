import React from 'react'

const HelloWorld = () => {
    return (
        <div className='border-1 border-bg-white text-center my-10'>
            <h1 className='text-3xl font-bold text-center mt-10'>Hello World</h1>
            <p  className ="text-2xl font-bold mt-5" data-testid="name">John Doe</p>
        </div>
    )
}

export default HelloWorld