import { create } from "zustand";


const useCounter = create((set) => {
    return {
        count: 0,
        handleIncrementCounter: () => {
            set((state) => ({
                count: state.count + 1
            }))
        },
        handleDecrementCounter: () => {
            set((state) => ({
                count: state.count - 1
            }))
        }
    }
})

export default useCounter