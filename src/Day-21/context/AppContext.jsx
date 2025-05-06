import React, { createContext, useEffect, useState } from 'react'

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cartList, setCartList] = useState([]);
    const [buyProduct, setBuyProduct] = useState(null)

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
    const handleCartProducts = (product) => {
        setCartList((prevCartList) => {
            const updatedCartList = [...prevCartList, product];
            console.log("Updated Cart List: ", updatedCartList);
            return updatedCartList;
        });
    }

    const handleBuyProducts = (product) => {
        setBuyProduct(product);
        setCartList((prevCartList) => {
            const updatedCartList = [...prevCartList, product];
            console.log("Updated Cart List ", updatedCartList);
            return updatedCartList;
        })
    }


    useEffect(() => {
        fetchProductList();
    }, []);
    return (
        <AppContext value={{ productList, setProductList, loading, handleBuyProducts, cartList, buyProduct, handleCartProducts, setCartList, setBuyProduct }}>
            {children}
        </AppContext>
    )
}

export default AppContextProvider