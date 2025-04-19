import React, { useContext, useState } from 'react'
import { contextData } from '../context/Context';
import Product from './Product';

const Products = () => {
  const { data, loading, error } = useContext(contextData);
  if (loading) return <h1>Loading....</h1>
  if (error) return <h1>{error}</h1>

  return (
    <div className='text-center bg-gray-100 p-5 h-[100vh]'>
      <h1 className='md:text-6xl text-2xl'>List of Products</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-5 mt-5'>
        {
          data.map((product) => (
            <Product product={product} key={product.id} />
          ))
        }
      </div>
    </div>
  )
}

export default Products