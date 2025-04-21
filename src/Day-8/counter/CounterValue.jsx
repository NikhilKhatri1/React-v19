import React from 'react'
import { useSelector } from 'react-redux'

const CounterValue = () => {
  const state = useSelector(state => state);
  const { countValue } = state;
  // console.log(state)
  return (
    <div className='mt-10'>
      <p>CounterValue is {countValue}</p>
    </div>
  )
}

export default CounterValue