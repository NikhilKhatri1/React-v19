import React from 'react'
import HelloWorld from './components/HelloWorld'
import Counter from './components/Counter'
import ApiTesting from './components/ApiTesting'

const App = () => {
    return (
        <div className='bg-gray-800 text-white py-4 px-8'>
            <h1 className='text-5xl font-bold text-center'>React Unit Testing Tutorial</h1>
            <HelloWorld />
            <Counter />
            <ApiTesting />
        </div>
    )
}

export default App