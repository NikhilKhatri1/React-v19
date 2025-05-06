import React from 'react'
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import { Link } from 'react-router-dom';

const PostRq = () => {
  // /posts  => ["posts"] => unique key
  // /posts/1  => ["posts",post.id]
  // /posts/1/comments   => ["posts",post.id,"comments"]
  const { data, isLoading, isError, error, isFetching, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: () => {
      return axios.get("http://localhost:4000/posts")
    },
    // staleTime: 3000
    enabled: false
  })
  if (isLoading) return <h1>Loading...</h1>
  if (isError) return <h1>{error.message}</h1>
  // console.log("Data of Posts ", data)
  console.log("is Loading: ", isLoading, "is Fetching: ", isFetching);
  return (
    <div className='px-4 py-2 bg-gray-50 rounded-xl w-150'>
      <h1>PostTraditional way to fetch data from api</h1>
      <button
        onClick={refetch}
        className='bg-amber-300 px-4 py-2 rounded-xl'
      >Fetch Data</button>
      <div>
        {
          data?.data.map((post, index) => (
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

export default PostRq