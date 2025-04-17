import React from 'react'
import UseFetch from '../CustomHook/UseFetch'

const UseMemoHook = () => {
  const { data, loading, error } = UseFetch('https://dummyjson.com/products');
  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }
  console.log(data)

  return (
    <div>useMemoHook</div>
  )
}

export default UseMemoHook