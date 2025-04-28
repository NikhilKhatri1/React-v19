import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleDeleteBlog, handleInputChange, setBlogListOnInitialLoad, setCurrentEditedBlogId } from '../store/slice/blogSlice';

const BlogList = () => {
  const { blog } = useSelector(state => state);
  const { blogList } = blog;
  const dispatch = useDispatch();
  // console.log(blogList);

  const handleDeleteBlogClick = (blogId) => {
    dispatch(handleDeleteBlog({
      currentBlogId: blogId,
    }))
    // console.log(blogId);
  }
  const handleEditBlogClick = (getCurrentBlog) => {
    dispatch(setCurrentEditedBlogId({
      currentBlogId: getCurrentBlog?.id,
    }))
    dispatch(handleInputChange({
      title: getCurrentBlog?.title,
      description: getCurrentBlog?.description
    }))
  }

  useEffect(() => {
    dispatch(setBlogListOnInitialLoad({
      blogList: JSON.parse(localStorage.getItem("blogList")) || []
    }))
  }, [])
  return (
    <div>
      <h1>Blog List</h1>

      <ul>
        {
          blogList?.length > 0
            ? blogList.map(blog => (
              <li className='border-1 shadow-md mt-2' key={blog?.id}>
                <h3>Title: {blog?.title}</h3>
                <p>Description: {blog?.description}</p>
                <button
                  onClick={() => handleEditBlogClick(blog)}
                  className='border-1 bg-gray-50 py-1 px-4 ms-4'
                >edit</button>
                <button
                  onClick={() => handleDeleteBlogClick(blog?.id)}
                  className='border-1 bg-gray-50 py-1 px-4 ms-4'
                >delete</button>
              </li>
            ))
            : "No Blog List found"
        }
      </ul>

    </div>
  )
}

export default BlogList