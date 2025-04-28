import { configureStore } from "@reduxjs/toolkit";
import blogReducer from './slice/blogSlice.js'


const store = configureStore({
    reducer: blogReducer
})

export default store