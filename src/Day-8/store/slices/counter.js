import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    countValue: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        handleCountIncrementAction: (state, action) => {
            state.countValue += 1;
            // console.log('action', action);
            // console.log('state', state);
        }
    }
})


export const { handleCountIncrementAction } = counterSlice.actions

export default counterSlice.reducer