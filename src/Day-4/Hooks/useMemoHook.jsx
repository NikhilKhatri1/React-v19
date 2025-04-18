import React, { useMemo, useState } from 'react'
import UseFetch from '../CustomHook/UseFetch'

const UseMemoHook = () => {
  const { data, loading, error } = UseFetch('https://dummyjson.com/products');
  const [flag, setFlag] = useState(false);

  function handleFilterProducts(getProducts) {
    console.log("This Text Render Everytime when state changes");
    return getProducts?.length > 0
      ? getProducts.filter(product => product.price > 10)
      : [];
  }

  const memorizedData = useMemo(() => handleFilterProducts(data?.products), [data?.products]);

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      <h1 className={`${flag ? "text-red-600 text-4xl mt-5" : "text-green-600 text-4xl mt-5"}`}>Filter Products</h1>
      <button
        className='bg-gray-200 p-2 border-1 border-gray-700 rounded-lg my-10'
        onClick={() => setFlag(!flag)}>Change Flag</button>
      <ul>
        {
          memorizedData.map(product =>
            <li key={product.id}>
              Title: {product.title} Price: {product.price}
            </li>)
        }
      </ul>
    </div>
  )
}

export default UseMemoHook;
