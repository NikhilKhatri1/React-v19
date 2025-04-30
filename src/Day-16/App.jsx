import React from 'react'
import CounterValue from './Counter-App/CounterValue'
import ManageCounter from './Counter-App/ManageCounter'
import Products from './Products/Products'

const App = () => {
    return (
        <div className='bg-gray-700 text-white p-3'>
            <h1 className='text-4xl text-center'>Zustand in React</h1>
            <ManageCounter />
            <CounterValue />
            <Products />
        </div>
    )
}

export default App