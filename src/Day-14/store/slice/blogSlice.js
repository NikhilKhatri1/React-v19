import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    formData: {
        title: '',
        description: ''
    }
}

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        handleInputBlogChange: (state, action) => {
            let updatedFormData = { ...state.formData };
            updatedFormData = {
                ...updatedFormData,
                ...action.payload
            }
            state.formData = updatedFormData

        },
        handleAddBlog: (state, action) => {
            
        }
    }
})

export const { handleAddBlog, handleInputBlogChange } = blogSlice.actions;

export default blogSlice.reducer;