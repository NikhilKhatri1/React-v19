import React, { useEffect, useRef } from 'react'

const UseRefHook = () => {
  const countValue = useRef(1);
  const handleCountIncreament = () => {
    countValue.current++;
    console.log(countValue.current)
  }
  const h1RefDomElement = useRef();
  useEffect(() => {
    const geth1CurrentAccess = h1RefDomElement.current;
    setInterval(() => {
      geth1CurrentAccess.style.color = "green";
      setInterval(() => {
        geth1CurrentAccess.style.color = "red";
      }, 2000)
    }, 2000)
  }, [])
  return (
    <div className='mt-10'>
      <h1 className='text-5xl'>useRefHook</h1>
      <button
        className='bg-gray-100 p-2 border-gray-700 border-1 rounded-xl my-5'
        onClick={handleCountIncreament}
      >Count = {countValue.current}</button>
      <div>
        <h1 ref={h1RefDomElement}>This Element is Access by Ref Hook</h1>
      </div>
    </div>
  )
}

export default UseRefHook