import React, { createContext, useState } from 'react'
import UseFetch from '../customHook/UseFetch'
import Product from '../pages/Product';
import { useNavigate } from 'react-router-dom';


export const contextData = createContext();

const Context = ({ children }) => {
    // Products data fetching using custom hook
    const { data, loading, error } = UseFetch('https://dummyjson.com/products');
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();
    const handleAddToCart = (Product) => {
        // console.log(Product);
        const copyCartItems = [...cart];
        const findIndexOfCurrentItem = copyCartItems.findIndex((item) => item.id === Product.id);
        console.log(findIndexOfCurrentItem);

        if (findIndexOfCurrentItem !== -1) {
            copyCartItems[findIndexOfCurrentItem].quantity += 1;
        }
        else {
            copyCartItems.push(
                {
                    ...Product,
                    quantity: 1,
                    totalPrice: Product?.price * 1
                });
        }
        console.log(copyCartItems);
        setCart(copyCartItems);
        localStorage.setItem('cartItem', JSON.stringify(copyCartItems));
        navigate("/cart")
    }

    console.log(cart);
    return (
        <contextData.Provider value={{ data, loading, error, handleAddToCart, cart }}>
            {children}
        </contextData.Provider>
    )
}

export default Context