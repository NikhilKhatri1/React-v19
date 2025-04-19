import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { contextData } from '../context/Context';

const Product = ({ product }) => {
  const navigate = useNavigate();
  const { handleAddToCart } = useContext(contextData);

  return (
    <div key={product.id} className='bg-white shadow-lg p-5 m-5 rounded-md'>
      <div className='w-full h-[200px] flex justify-center items-center rounded-xl bg-red-100'>
        <img src={product.thumbnail} alt={product.title} className='w-1/2 mx-auto hover:scale-125 transition-all duration-300' />
      </div>
      <div className='my-2 flex justify-between items-center p-2 bg-emerald-100 rounded-md'>
        <h2 className='text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap'>{product.title}</h2>
        <p className='text-gray-700 text-xs'>${product.price}</p>
      </div>
      <div className='bg-gray-200 rounded-lg p-2'>
        <p className='text-gray-500 overflow-y-auto text-wrap h-[100px]'>{product.description}</p>
      </div>
      <div className='flex justify-between items-center mt-2 px-5'>
        <button
          onClick={() => navigate(`/products/${product.id}`)}
          className='bg-amber-300 p-2 text-md font-bold text-white rounded-lg me-2'
        >buy now</button>
        <button
          onClick={() => handleAddToCart(product)}
          className='bg-amber-300 p-2 text-md font-bold text-white rounded-lg'
        >cart</button>
      </div>
    </div>
  )
}

export default Product