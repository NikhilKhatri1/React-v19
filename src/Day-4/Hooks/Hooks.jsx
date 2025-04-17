import React from 'react'
import { Outlet } from 'react-router-dom'

const Hooks = () => {
  return (
    <div className='text-center'>
      <h1 className='text-6xl'>Hooks like useRef, useCallback,useMemo</h1>
      <Outlet />

    </div>
  )
}

export default Hooks