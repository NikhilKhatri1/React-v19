import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    countValue: 0
}


const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        handleIncreaseAction: (state, action) => {
            state.countValue += 1
            // console.log(state, action.payload)
        }
    }
})

export const { handleIncreaseAction } = counterSlice.actions;
export default counterSlice.reducer;