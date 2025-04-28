import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handleInputBlogChange } from '../store/slice/blogSlice';

const AddBlog = () => {
    const { blog } = useSelector(state => state);
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        dispatch(handleInputBlogChange({
            [e.target.name]: e.target.value
        }))
    }

    const handleAddBlogSumit = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleAddBlogSumit}>
                <div>
                    <label>Enter Blog Title: </label>
                    <input
                        onChange={handleInputChange}
                        type="text"
                        name='title'
                        placeholder='Enter the title'
                        className='border-1 p-1'
                        value={blog?.formData?.title}
                    />
                </div>
                <div>
                    <label>Enter Blog Description: </label>
                    <input
                        onChange={handleInputChange}
                        type="text"
                        name='description'
                        placeholder='Enter the description'
                        className='border-1 p-1 my-3'
                        value={blog?.formData?.description}
                    />
                </div>
                <button
                    type='submit'
                    className='bg-black py-1 px-4 text-white'
                >Add new blog
                </button>
            </form>
        </div>
    )
}

export default AddBlog