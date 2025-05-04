import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const StorePage = () => {
  const { id } = useParams();
  const { productList, orderList, addToOrderList, loading } = useContext(AppContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!loading) {
      // Find the product based on the ID from the URL
      const productDetails = productList.find((product) => product.id === Number(id));
      setProduct(productDetails);
    }
  }, [id, productList, loading, orderList]);

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  // Handle Add to Cart button click
  const handleAddToCart = () => {
    addToOrderList(product);
    alert(`${product.title} has been added to your cart!`);
  };

  return (
    <div className='p-10'>
      <div>
        <div className='w-full bg-amber-50 border-1 border-amber-200 px-8'>
          <h1 className='text-3xl font-bold'>{product.title}</h1>
          <div className='flex'>
            <img
              src={product.thumbnail}
              alt={product.title}
              className='w-[300px] h-[300px] object-cover'
            />
            <div className='ml-5'>
              <p className='text-lg font-semibold'>Description: {product.description}</p>
              <p className='text-xl font-bold mt-3'>Price: ${product.price}</p>
              <p className='text-sm mt-2'>Rating: {product.rating}</p>
              <button
                onClick={handleAddToCart}
                className='mt-4 bg-blue-500 text-white px-4 py-2 rounded-md'
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <hr className='my-5' />
        <div>
          <div>
            {orderList.map((product) => (
              <div>
                <h1>{product.title}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorePage;
