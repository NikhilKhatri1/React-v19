import React, { useEffect, useState } from 'react'

const UseFetch = (url, option = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(url, option);
            if (!response.ok) throw new Error("Something Went Wrong");
            const result = await response.json();
            setData(result.products || result);
        }
        catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);
    return { data, loading, error };
}

export default UseFetch