import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter.js"


const store = configureStore({
    reducer: counterReducer
})

export default store