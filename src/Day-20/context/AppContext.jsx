import React, { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [productList, setProductList] = useState([]);
    const [orderList, setOrderList] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleFetchProducts = async () => {
        try {
            const apiResponse = await fetch('https://dummyjson.com/products');
            if (apiResponse) {
                const result = await apiResponse.json();
                setProductList(result?.products);
            } else {
                setProductList([]);
                console.log('Failed to fetch data');
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    // Add product to the order list
    const addToOrderList = (product) => {
        setOrderList((prevOrderList) => {
            const updatedOrderList = [...prevOrderList, product];
            console.log("Updated Order List: ", updatedOrderList); // Debugging line
            return updatedOrderList;
        });
    };

    useEffect(() => {
        handleFetchProducts();
    }, []);

    return (
        <AppContext.Provider value={{ productList, setProductList, orderList, setOrderList, addToOrderList, loading }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
