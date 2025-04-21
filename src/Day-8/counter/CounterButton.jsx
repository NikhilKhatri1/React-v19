import React from 'react'
import { useDispatch } from 'react-redux'
import { handleCountIncrementAction } from '../store/slices/counter';

const CounterButton = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(handleCountIncrementAction());
  }
  return (
    <div>
      <button
        onClick={handleClick}
        className='p-2 bg-gray-50 hover:border-1 hover:border-bg-gray-800 rounded-lg'
      >Count++</button>
    </div>
  )
}

export default CounterButton