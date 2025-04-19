import React, { createContext, useState } from 'react'
import UseFetch from '../customHook/UseFetch'
import Product from '../pages/Product';


export const contextData = createContext();

const Context = ({ children }) => {
    // Products data fetching using custom hook
    const { data, loading, error } = UseFetch('https://dummyjson.com/products');
    const [cart, setCart] = useState([]);
    const handleAddToCart = (Product) => {
        console.log(Product);
    }
    return (
        <contextData.Provider value={{ data, loading, error, handleAddToCart }}>
            {children}
        </contextData.Provider>
    )
}

export default Context