import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1>Home page</h1>
            <div>
                <button
                    className='border-sky-600 p-2 rounded-lg bg-sky-400 ms-2'
                    onClick={() => navigate("/reciepes")}
                >Reciepes</button>
                <button
                    className='border-sky-600 p-2 rounded-lg bg-sky-400 ms-2'
                    onClick={() => navigate("/comments")}
                >Comment</button>
            </div>
        </div>
    )
}

export default Home