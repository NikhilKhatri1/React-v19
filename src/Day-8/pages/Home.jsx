import React from 'react'
import CounterButton from '../counter/CounterButton'
import CounterValue from '../counter/CounterValue'

const Home = () => {
  return (
    <div className='text-center mt-10'>
      <h1 className='text-3xl mb-10 font-bold'>Redux Toolkit</h1>

      <CounterButton />
      <CounterValue />
    </div>
  )
}

export default Home