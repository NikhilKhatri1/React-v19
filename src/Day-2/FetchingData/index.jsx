import React, { useEffect, useState } from 'react';

const FetchingData = () => {
    const [usersList, setUsersList] = useState([]);

    const handleUserList = async () => {
        try {
            const response = await fetch("https://dummyjson.com/users");
            const data = await response.json();
            setUsersList(data.users);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    useEffect(() => {
        handleUserList();
    }, []);

    useEffect(() => {
        console.log(usersList);
    }, [usersList]);

    return (
        <div>
            <h1>All User Data</h1>
            <ul>
                {usersList.length === 0 ? (
                    <p>Loading...</p>
                ) : (
                    usersList.map((user) => (
                        <li key={user.id}>{user.firstName} {user.lastName}</li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default FetchingData;
