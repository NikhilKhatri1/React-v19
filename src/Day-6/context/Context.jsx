import React, { createContext, useState } from 'react'
import UseFetch from '../customHook/UseFetch'


export const contextData = createContext();

const Context = ({ children }) => {
    // Products data fetching using custom hook
    const { data, loading, error } = UseFetch('https://dummyjson.com/products');
    return (
        <contextData.Provider value={{ data, loading, error }}>
            {children}
        </contextData.Provider>
    )
}

export default Context