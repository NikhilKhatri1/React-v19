import React, { useEffect, useState } from 'react'

const ApiTesting = () => {
    const [users, setUsers] = useState([]);

    const [loading, setLoading] = useState(false);

    const handleFetchUsers = async () => {
        try {
            setLoading(true);
            const apiResponse = await fetch('https://dummyjson.com/users');
            const result = await apiResponse.json();
            setUsers(result?.users);
        } catch (error) {
            setLoading(true);
            console.log(error.message);
        }
        finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        handleFetchUsers();
    }, []);
    return (
        <div>
            <h1>ApiTesting in React Testing</h1>
            <ul>
                {
                    loading
                        ? <h1>Loading ........</h1>
                        : users.length > 0
                            ? users.map(user => (
                                <li key={user.id}>UserName : {user.firstName}</li>
                            ))
                            : null
                }
            </ul>
        </div>
    )
}

export default ApiTesting