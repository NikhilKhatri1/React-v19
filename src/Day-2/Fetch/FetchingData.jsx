import React, { useEffect, useState } from 'react';

const FetchingData = () => {
    const [usersList, setUsersList] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleFetchData = async () => {
        try {
            const apiResponse = await fetch("https://dummyjson.com/users");
            const data = await apiResponse.json();

            if (data?.users) {
                setUsersList(data?.users);
            } else {
                setUsersList([]);
            }
            setLoading(false);
        } catch (error) {
            console.error(error.message);
            setLoading(false);
        }
    };

    // useEffect(() => {
    //     setLoading(true);
    //     handleFetchData();
    // }, []);

    return (
        <div>
            <h1>FetchingData</h1>
            <button className='bg-sky-500 p-2 rounded' onClick={handleFetchData}>Fetch Data</button>
            <ul>
                {loading ? (
                    <p>Loading...</p>
                ) : usersList.length > 0 ? (
                    usersList.map((user) => (
                        <li key={user.id}>
                            Name: {user.firstName} {user.lastName}
                        </li>
                    ))
                ) : (
                    <p>Please try again</p>
                )}
            </ul>
        </div>
    );
};

export default FetchingData;
