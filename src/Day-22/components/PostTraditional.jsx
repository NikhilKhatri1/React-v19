import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';

const PostTraditional = () => {
    const [loading, setloading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    const handleFetch = async () => {
        setloading(true)
        try {
            const apiResponse = await fetch("http://localhost:4000/post");
            const result = await apiResponse.json();
            if (result) {
                setPosts(result);
                setError(null)
                setloading(false)
                // console.log(posts);
            }
        } catch (error) {
            console.log(error);
            setError(error);
            setloading(false);
        }

    }

    useEffect(() => {
        handleFetch();
    }, []);
    if (loading) return <h1>Loading....</h1>
    if (error) return <h1>{error}</h1>
    return (
        <div className='px-4 py-2 bg-gray-50 rounded-xl w-150'>
            <h1>PostTraditional way to fetch data from api</h1>
            <div>
                {
                    posts.map((post, index) => (
                        <div className='mt-5 bg-gray-100 rounded-lg w-100 px-2 py-1' key={index}>
                            <h1>Id: {post.id}</h1>
                            <h1>Title of the post : {post.title}</h1>
                            <p>Description : {post.body}</p>
                        </div>
                    ))
                }
            </div>
            <div className='my-5'>
                <Link className='bg-amber-300 py-2 px-4 rounded-lg' to={"/"}><button>Go Back</button></Link>
            </div>
        </div>
    )
}

export default PostTraditional