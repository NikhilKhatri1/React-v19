import React, { useEffect, useState } from 'react'

const UseFetch = (url, option = {}) => {

    // third party hook like this -> swr
    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const FetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(url);
            if (response.ok) {
                const result = await response.json();
                setData(result);
                setLoading(false);
                setError("")
            } else {
                setError(response.statusText);
            }
        } catch (error) {
            console.log(error);
            setError(error);
            setLoading(false)
        }
    }
    useEffect(() => {
        FetchData();
    }, [url])
    return {
        data,
        loading,
        error
    }
}

export default UseFetch