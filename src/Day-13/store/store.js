import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./slice/blogSlice.js";


const store = configureStore({
    reducer: {
        // we can pass multiple reducer
        // count: counterreducer
        blog: blogReducer
    }
})


export default store