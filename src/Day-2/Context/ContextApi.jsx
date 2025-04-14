import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const contextApiData = createContext();

const ContextApi = ({ children }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);  // Set initial state to loading

    const handleApi = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/users");
            setData(response.data.users);  // Only set users
        } catch (error) {
            console.error(error.message);
        } finally {
            setLoading(false);  // Always turn off loading
        }
    };

    useEffect(() => {
        handleApi();
    }, []);

    return (
        <contextApiData.Provider value={{ data, loading }}>
            {children}
        </contextApiData.Provider>
    );
};

export default ContextApi;
