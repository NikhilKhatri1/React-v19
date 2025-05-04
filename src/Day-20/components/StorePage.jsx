import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useLocation } from 'react-router-dom';

const StorePage = () => {
  const { orderList, loading } = useContext(AppContext);
  const location = useLocation();
  const selectedProduct = location.state?.selectedProduct;

  if (loading) {
    return <div>Loading products...</div>;
  }

  return (
    <div className="p-10">
      <div>
        {selectedProduct && (
          <div className="w-full bg-amber-50 border-1 border-amber-200 px-8 mb-8">
            <h1 className="text-3xl font-bold">{selectedProduct.title}</h1>
            <div className="flex">
              <img
                src={selectedProduct.thumbnail}
                alt={selectedProduct.title}
                className="w-[300px] h-[300px] object-cover"
              />
              <div className="ml-5">
                <p className="text-lg font-semibold">Description: {selectedProduct.description}</p>
                <p className="text-xl font-bold mt-3">Price: ${selectedProduct.price}</p>
                <p className="text-sm mt-2">Rating: {selectedProduct.rating}</p>
                <div>
                  <button className='bg-yellow-400 px-5 py-2 rounded-md mt-5' >Buy now</button>
                </div>
              </div>

            </div>
          </div>
        )}

        <hr className="my-5" />
        <div>
          {orderList.length > 0 ? (
            <div>
              <h2 className="text-2xl font-bold">Your Cart Item</h2>
              {orderList.map((product, index) => (
                <div className="w-full bg-amber-50 border-1 border-amber-200 px-8 mb-8">
                  <h1 className="text-3xl font-bold">{product.title}</h1>
                  <div className="flex">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-[300px] h-[300px] object-cover"
                    />
                    <div className="ml-5">
                      <p className="text-lg font-semibold">Description: {product.description}</p>
                      <p className="text-xl font-bold mt-3">Price: ${product.price}</p>
                      <p className="text-sm mt-2">Rating: {product.rating}</p>
                      <div>
                        <button className='bg-yellow-400 px-5 py-2 rounded-md mt-5'>Buy now</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StorePage;
