import React, { useContext } from 'react'
import { contextData } from '../context/Context';
import { useNavigate } from 'react-router-dom';

const Carts = () => {
  const { cart } = useContext(contextData);
  const navigate = useNavigate();
  console.log(cart);
  return (
    <div className='max-w-5xl mx-auto max-md:max-w-xl px-4 py-10'>
      <h1 className='text-2xl font-bold text-gray-800'>My Cart Items</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'>
        <div className='md:col-span-2 space-y-4 flex justify-center items-center flex-col'>
          {cart?.length > 0
            ? (
              cart?.map((item) => (
                <div key={item.id} className='mt-1 bg-blue-200 p-2 rounded-xl flex items-center justify-between'>
                  <img
                    className='w-40 h-38 object-cover rounded-lg shadow-md bg-rose-200'
                    src={item.thumbnail}
                    alt={item.title} />
                  <div className='ms-4'>
                    <h1 className='text-xl font-bold  my-2'>Description</h1>
                    <h3 className='text-sm text-gray-900'>{item.description}</h3>
                    <h1 className='text-xl font-bold  my-2'>Price :<span className='bg-red-400 p-[2px] rounded-full ms-2'>{item?.price}$</span></h1>
                  </div>
                </div>
              ))
            )
            : (<h1>Not Cart Item FOund</h1>)
          }
        </div>
        <div className='bg-gray-100 p-4 rounded-lg shadow-md h-max'>
          <h3 className='text-xl font-extrabold text-gray-900 border-b border-gray-300 pb-2'>Order Summary</h3>
          <ul className='text-gray-800 space-y-2 mt-4'>
            <p className='flex flex-wrap gap-4 items-center jus tify-between text-sm font-semibold text-gray-600'>
              <div>
                <span className='text-gray-900 me-2'>Total Items:</span>
                <span className='bg-gray-200 px-2 py-1 rounded-full'>{cart?.length}</span>
              </div>
              <div>
                <span className='text-gray-900 me-2'>Total Price:</span>
                <span className='bg-gray-200 px-2 py-1 rounded-full'>
                  {cart?.reduce((acc, item) => acc + item.totalPrice, 0)}$
                </span>
              </div>
            </p>
          </ul>
          <div className='mt-5 space-y-4'>
            <button className='bg-amber-400 rounded-lg ms-2 p-2 text-black'>Checkout</button>
            <button
              onClick={() => navigate("/products")}
              className='bg-amber-400 rounded-lg ms-2 p-2 text-black'>Contue Shopping</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carts