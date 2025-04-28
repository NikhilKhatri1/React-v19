import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleAddTodo, handleEditBlog, handleInputChange, setCurrentEditedBlogId } from '../store/slice/blogSlice';

const AddBlog = () => {
    const { blog } = useSelector(state => state);
    // console.log(state?.blog);
    // console.log(blog);
    const dispatch = useDispatch()

    const handleChange = (e) => {
        dispatch(handleInputChange({
            [e.target.name]: e.target.value
        }))
    }
    const handleAddTodoSubmit = (e) => {
        e.preventDefault();
        if (blog?.currentEditedBlogId !== null) dispatch(handleEditBlog())
        else dispatch(handleAddTodo())
        if (blog?.currentEditedBlogId !== null) dispatch(setCurrentEditedBlogId({
            currentBlogId: null
        }))
        dispatch(handleInputChange({
            title: '',
            description: ''
        }))
    }
    return (
        <div>
            <form onSubmit={handleAddTodoSubmit}>
                <div>
                    <label>Enter Blog Title: </label>
                    <input
                        className='border-1 p-1 rounded-lg'
                        type="text"
                        name="title"
                        id="title"
                        placeholder='Enter the Title'
                        onChange={handleChange}
                        value={blog?.FormData?.title}
                    />
                </div>
                <div>
                    <label>Enter Blog Description: </label>
                    <input
                        className='border-1 p-1 rounded-lg my-2'
                        type="text"
                        name="description"
                        id="description"
                        placeholder='Enter the Description'
                        onChange={handleChange}
                        value={blog?.FormData?.description}
                    />
                </div>
                <button
                    className='border-1 bg-black text-white px-4 py-1'
                    type='submit'
                >
                    {
                        blog?.currentEditedBlogId
                            ? 'Edit Blog' : 'Add New Blog'
                    }
                </button>
            </form>
        </div>
    )
}

export default AddBlog