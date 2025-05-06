import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'

const StorePage = () => {
  const { productList, setProductList, cartList, setCartList, buyProduct, setBuyProduct } = useContext(AppContext);
  const [imageIndex, setImageIndex] = useState(null);

  const handleChangeImage = (index) => {
    setImageIndex(index);
  }

  const removeBuy = () => {
    setBuyProduct(null);
    alert("You Have remove Product", buyProduct.title);
  }

  const removeCart = (productId) => {
    alert("you remove Product from cart")
    setCartList(cartList.filter(product => product.id !== productId));

  }

  return (
    <div>
      <h1>Your Order and Cart Product List</h1>
      <div className='px-10 py-5'>
        <h2 className='text-3xl text-gray-700 font-bold mb-3'>Your Order</h2>
        {
          buyProduct === null
            ? null
            :
            <div key={buyProduct.id} className='bg-amber-200 flex px-10 py-8 rounded-lg'>
              <div className='bg-gray-50 px-4 py-2 rounded-xl border-1 border-gray-200 flex flex-col justify-center items-center'>
                <img
                  className='w-50 h-50'
                  src={imageIndex !== null ? buyProduct?.images[imageIndex] : buyProduct.thumbnail}
                  alt={buyProduct.title}
                />
                <div className='flex gap-5 px-2 py-2'>
                  {
                    buyProduct.images.map((image, index) => (
                      <img
                        key={index}
                        onClick={() => handleChangeImage(index)}  // Fixed: use an arrow function to pass the correct index
                        className='w-18 h-18 border-1 border-black rounded-lg bg-pink-100 hover:scale-105'
                        src={image}
                        alt={buyProduct.title}
                      />
                    ))
                  }
                </div>
              </div>
              <div className='ms-5'>
                <h1 className='text-3xl font-bold '>{buyProduct.title}</h1>
                <p className='text-lg font-semibold text-gray-700 w-3/4 text-justify mt-2'><span className='text-xl text-gray-800 font-bold me-2'>Specifition:</span>{buyProduct.description}</p>
                <p className='text-lg font-semibold text-gray-700 w-3/4 text-justify mt-2'><span className='text-xl text-gray-800 font-bold me-2'>Price:</span> <span className='font-bold text-xl text-black'>$</span>{buyProduct.price}</p>
                <p className='text-lg font-semibold text-gray-700 w-3/4 text-justify mt-2'><span className='text-xl text-gray-800 font-bold me-2'>Rating:</span>{buyProduct.rating}</p>
                <button className='border-amber-600 border-4 bg-amber-300 px-8 py-3 text-lg font-bold'>Buy Now</button>
                <button onClick={removeBuy} className='border-red-600 border-4 bg-red-300 px-8 py-3 text-lg font-bold ms-2'>Remove</button>
              </div>
            </div>
        }
      </div>
      <div className='px-10 py-5'>
        <h2 className='text-3xl text-gray-700 font-bold mb-3'>Your Cart</h2>
        {
          cartList.map((product) => (
            <div key={product.id} className='bg-amber-200 flex px-10 py-8 rounded-lg mt-2'>
              <div className='bg-gray-50 px-4 py-2 rounded-xl border-1 border-gray-200 flex flex-col justify-center items-center'>
                <img
                  className='w-50 h-50'
                  src={imageIndex !== null ? product?.images[imageIndex] : product.thumbnail}
                  alt={product.title}
                />
                <div className='flex gap-5 px-2 py-2'>
                  {
                    product.images.map((image, index) => (
                      <img
                        key={index}
                        onClick={() => handleChangeImage(index)}  // Fixed: use an arrow function to pass the correct index
                        className='w-18 h-18 border-1 border-black rounded-lg bg-pink-100 hover:scale-105'
                        src={image}
                        alt={product.title}
                      />
                    ))
                  }
                </div>
              </div>
              <div className='ms-5'>
                <h1 className='text-3xl font-bold '>{product.title}</h1>
                <p className='text-lg font-semibold text-gray-700 w-3/4 text-justify mt-2'> <span className='text-xl text-gray-800 font-bold me-2'>Specifition:</span>{product.description}</p>
                <p className='text-lg font-semibold text-gray-700 w-3/4 text-justify mt-2'><span className='text-xl text-gray-800 font-bold me-2'>Price:</span> <span className='font-bold text-xl text-black'>$</span>{product.price}</p>
                <p className='text-lg font-semibold text-gray-700 w-3/4 text-justify mt-2'><span className='text-xl text-gray-800 font-bold me-2'>Rating:</span>{product.rating}</p>
                <button className='border-amber-600 border-4 bg-amber-300 px-8 py-3 text-lg font-bold'>Buy Now</button>
                <button onClick={() => removeCart(product.id)} className='border-red-600 border-4 bg-red-300 px-8 py-3 text-lg font-bold ms-2'>Remove</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default StorePage
