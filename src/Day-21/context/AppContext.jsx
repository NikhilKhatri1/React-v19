import React, { createContext, useEffect, useState } from 'react'

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchProductList = async () => {
        try {
            const apiResponse = await fetch('https://dummyjson.com/products');
            const result = await apiResponse.json();
            if (!result) throw new Error("Failed to Fetch Data");
            setProductList(result?.products);
        } catch (error) {
            console.error(error.message)
        }
        finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchProductList();
    }, []);
    return (
        <AppContext value={{ productList, setProductList, loading }}>
            {children}
        </AppContext>
    )
}

export default AppContextProvider