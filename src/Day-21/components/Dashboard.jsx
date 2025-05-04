import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'

const Dashboard = () => {
  const { productList, setProductList, loading } = useContext(AppContext);
  const [rating, setRating] = useState(1);
  const [search, setSearch] = useState('');
  const [price, setPrice] = useState(1);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    setFilteredList(productList);
  }, [productList]);

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  }
  const handleRating = (e) => {
    setRating(e.target.value)
  }
  const handlePrice = (e) => {
    setPrice(e.target.value);
  }

  const FilterProduct = () => {
    let filtered = [...productList];
    // filter on search
    if (search) {
      filtered = filtered.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))
    }
    // filter on rating
    filtered = filtered.filter(product => product.rating >= rating);
    // filter on price 
    filtered = filtered.filter(product => product.price >= price);

    setFilteredList(filtered);
  }

  useEffect(() => {
    FilterProduct();
  }, [search, rating, price])

  return (
    <div className='flex px-10 py-5'>
      <div className='flex gap-5'>
        <div className='w-75 border-1 border-gray-200 px-4 py-3 rounded-lg h-100 bg-gray-100 mt-20 sticky top-25'>
          <h3>Filter the Products</h3>
          <div className='border-1 border-gray-300 px-2 py-2 rounded-lg'>
            <label>Rating: </label>
            <input onChange={handleRating} type="range" min="0" max="5" value={rating} step="0.1" />
            <p className='text-center font-bold'>Rating :{rating}</p>
            <p>items: {filteredList.length}</p>
          </div>
          <div className='border-1 border-gray-300 px-2 py-2 rounded-lg'>
            <label>Price: </label>
            <input onChange={handlePrice} type="range" min="0" max="5" value={price} step="0.1" />
            <p className='font-bold text-center'>Price : ${price}</p>
          </div>
        </div>
        <div className='border-1 border-gray-100 px-2 py-2 rounded-lg shadow-sm w-full'>
          <div className='my-5'>
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                onChange={handleSearchInput}
                type="text"
                value={search}
                className='border-1 rounded-lg px-2 py-1'
                placeholder='Enter the Product name'
              />
              <button className='bg-black px-3 py-1 text-white ms-3' type='submit'>Search</button>
            </form>
          </div>
          <h1 className='text-center text-4xl font-bold my-5'>Product List</h1>
          <div className='grid grid-cols-4 w-full gap-2'>

            {
              loading
                ? (<p>Loading........</p>)
                : (
                  filteredList.length > 0
                    ? filteredList.map((product) => (
                      <div key={product.id} className='bg-gray-50 px-5 py-3 border-1 border-gray-100 w-50'>
                        <div className='flex flex-col items-center'>
                          <img className='w-30 h-30 border-1 border-gray-200 bg-pink-100 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out' src={product.thumbnail} alt={product.title} />
                          <div className='w-full flex justify-between my-2 border-1 px-1 py-[2px] rounded-lg border-amber-800 items-center'>
                            <p className='text-[12px] text-ellipsis overflow-hidden w-30 whitespace-nowrap font-semibold'> {product.title}</p>
                            <p className='text-[12px] font-semibold bg-amber-400 py-[1px] px-[2px] rounded-full'><span className='font-bold text-[14px]'>$</span>{product.price}</p>
                          </div>
                          <div className='w-full flex justify-between mb-2 border-1 px-1 py-[2px] rounded-lg border-amber-600 items-center'>
                            <p className='text-[12px] text-ellipsis overflow-hidden w-30 whitespace-nowrap font-bold'>Rating: {product.rating}</p>
                          </div>
                          <div className='flex justify-between gap-2'>
                            <button className='bg-orange-200 px-2 py-1 rounded-xl ring-inset ring-2 ring-orange-300 hover:ring-orange-500 hover:bg-orange-300'>Buy</button>
                            <button className='bg-orange-200 px-2 py-1 rounded-xl ring-inset ring-2 ring-orange-300 hover:ring-orange-500 hover:bg-orange-300'>Add to Cart</button>
                          </div>
                        </div>
                      </div>
                    ))
                    : (<p>No Product Found</p>)
                )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard