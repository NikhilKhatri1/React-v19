import React, { useCallback, useState } from 'react'
import Counter from './Counter'

const UseCallbackHook = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const memorizeCountOneFunc = useCallback(() => setCountOne(countOne + 1), [countOne]);
  const memorizeCountTwoFunc = useCallback(() => setCountTwo(countTwo + 1), [countTwo]);
  return (
    <div>
      <h1 className='text-6xl'>useCallbackHook</h1>

      <Counter onClick={memorizeCountOneFunc} count={countOne} />

      <Counter onClick={memorizeCountTwoFunc} count={countTwo} />

    </div>
  )
}

export default UseCallbackHook