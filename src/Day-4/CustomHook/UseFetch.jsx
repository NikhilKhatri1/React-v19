import React, { useEffect, useState } from 'react'

const UseFetch = (url, option = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(url, { ...option });
            if (!response.ok) throw new Error(response.statusText);

            const result = await response.json();
            setData(result);
            setError(null);
            setLoading(false);
        } catch (error) {
            console.log((error));
            setLoading(false);
            setError(error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [url])


    return (
        data,
        loading,
        error
    )
}

export default UseFetch