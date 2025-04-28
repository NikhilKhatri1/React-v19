import { createSlice, nanoid } from "@reduxjs/toolkit"


const initialState = {
    FormData: {
        title: '',
        description: ''
    },
    blogList: [],
    currentEditedBlogId: null
}

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        handleInputChange: (state, action) => {
            // console.log(action);
            let updatedFormData = { ...state.FormData }
            updatedFormData = {
                ...updatedFormData,
                ...action.payload
            }
            state.FormData = updatedFormData
        },
        handleAddTodo: (state, action) => {
            // console.log(state, action);
            state.blogList.push({
                id: nanoid(),
                ...state.FormData,
            })
            // it is not working on submit
            state.FormData = {
                title: '',
                description: ''
            }
            localStorage.setItem("blogList", JSON.stringify(state.blogList))
        },
        setBlogListOnInitialLoad: (state, action) => {
            state.blogList = action.payload.blogList
        },
        handleDeleteBlog: (state, action) => {
            // console.log(action.payload);
            const { payload } = action;
            const { currentBlogId } = payload
            let BlogListItems = [...state.blogList];
            let updatedBlogList = BlogListItems.filter(blog => blog.id !== currentBlogId);
            state.blogList = updatedBlogList;
            localStorage.setItem('blogList', JSON.stringify(updatedBlogList))

        },
        setCurrentEditedBlogId: (state, action) => {
            // console.log(action.payload);
            const { payload } = action;
            const { currentBlogId } = payload
            state.currentEditedBlogId = currentBlogId

        },
        handleEditBlog: (state, action) => {
            let updatedBlogList = [...state.blogList];
            const findIndexOfCurrentBlogItem = updatedBlogList.findIndex(blog => blog.id === state.currentEditedBlogId);
            console.log(findIndexOfCurrentBlogItem);
            updatedBlogList[findIndexOfCurrentBlogItem] = {
                ...updatedBlogList[findIndexOfCurrentBlogItem],
                ...state.FormData,
            }
            state.blogList = updatedBlogList
            localStorage.setItem('blogList', JSON.stringify(updatedBlogList))
        }


    }
})

export const { handleInputChange, handleAddTodo, setBlogListOnInitialLoad, handleDeleteBlog, setCurrentEditedBlogId, handleEditBlog } = blogSlice.actions;

export default blogSlice.reducer;