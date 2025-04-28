import React from 'react'
import { useDispatch } from 'react-redux'
import { handleIncreaseAction } from '../store/slices/counter';

const CounterButton = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(handleIncreaseAction());
  }
  return (
    <div>
      <button
        onClick={handleClick}
        className='border-1 bg-gray-50 p-2 rounded-lg'
      >Increament</button>
    </div>
  )
}

export default CounterButton