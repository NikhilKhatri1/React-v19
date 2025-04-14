import React, { useContext } from 'react';
import { contextApiData } from '../Context/ContextApi';  // Use the imported context

const Child = () => {
    const { loading, data } = useContext(contextApiData);  // No need to import ContextApi here

    return (
        <div>
            <h1>Fetching Data using Context API</h1>
            <ul>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    data.map((user) => (
                        <li key={user.id}>Name : {user.firstName}</li>  // Assuming the user object has these fields
                    ))
                )}
            </ul>
        </div>
    );
};

export default Child;
