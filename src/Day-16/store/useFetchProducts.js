import { create } from "zustand";



const useFetch = create((set) => {
    return {
        listOfProducts: [],
        handleFetchProducts: async () => {
            const apiRequest = await fetch('https://dummyjson.com/products');
            const result = await apiRequest.json();
            set({
                listOfProducts: result?.products
            })
        }
    }
})

export default useFetch;