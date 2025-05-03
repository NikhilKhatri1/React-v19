import React, { createContext, useEffect, useState } from 'react'

export const AppContext = createContext();
const AppContextProvider = ({ children }) => {
    const [productList, setProductList] = useState([]);

    const handleFetchProducts = async () => {
        try {
            const apiResponse = await fetch('https://dummyjson.com/products');
            if (apiResponse) {
                const result = await apiResponse.json();
                setProductList(result?.products)
            } else {
                setProductList([]);
                console.log("failed to fetch data")
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleFetchProducts();
    }, [])


    return (
        <AppContext.Provider value={{ productList, setProductList }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider