import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AxiosFetching = () => {
    const [usersList, setUsersList] = useState([]);
    const FetchUsersList = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/users");
            if (response) {
                console.log(response.data);
                setUsersList(response.data.users)
            } else {
                console.log("response not Found")
            }
        } catch (error) {
            console.error("Error fetching users:", error)
        }
    }

    useEffect(() => {
        FetchUsersList();
        // console.log(usersList);
    }, []);

    // Log the usersList after it has been updated
    useEffect(() => {
        console.log(usersList);  // This will log whenever usersList is updated
    }, [usersList]);

    return (
        <div>
            <h1>AxiosFetching</h1>
            <ul>
                {
                    usersList.map((user) => (
                        <li key={user.id}>{user.firstName}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default AxiosFetching