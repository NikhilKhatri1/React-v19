import React, { useEffect } from 'react'
import useFetch from '../store/useFetchProducts'

const Products = () => {
    const { handleFetchProducts } = useFetch(state => state);
    const productsList = useFetch(state => state.listOfProducts)
    useEffect(() => {
        handleFetchProducts();
    }, []);
    return (
        <div>
            <h1>Products List is Here</h1>
            <ul className='grid grid-cols-4 bg-gray-500 text-black gap-4 text-center'>
                {
                    productsList.length > 0
                        ? (productsList.map(product => (
                            <li key={product.id}>
                                <p>Title: {product.title}</p>
                                <img className='bg-pink-200' src={product.thumbnail} alt={product.title} />
                            </li>
                        )))
                        : "No Product Found"
                }
            </ul>
        </div>
    )
}

export default Products