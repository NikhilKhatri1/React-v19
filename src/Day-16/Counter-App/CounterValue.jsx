import React from 'react'
import useCounter from '../store/UseCounter'

const CounterValue = () => {
    const { count } = useCounter(state => state)
    return (
        <div className='text-center text-3xl'>
            <h1>CounterValue is {count}</h1>
        </div>
    )
}

export default CounterValue