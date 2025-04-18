import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import { AddNewProduct, FetchProductList } from './Api/Products'

const ReactQueries = () => {
    const [productTitle, setProductTitle] = useState("");

    const getQueryClient = useQueryClient();

    const { data: ProductList, isLoading } = useQuery({
        queryKey: ["ProductList"],
        queryFn: () => FetchProductList(),
    });

    const { mutateAsync: handleAddNewProductMutation } = useMutation({
        mutationFn: AddNewProduct,
        onSuccess: () => {
            getQueryClient.invalidateQueries(["ProductList"])
        }
    })

    const handleAddNewProduct = async () => {
        try {
            await handleAddNewProductMutation(productTitle);
        } finally {
            setProductTitle(""); // Reset the input field
        }
    }

    if (isLoading) return <h1>Loading ....</h1>
    return (
        <div className='mt-5 bg-gray-200 p-5'>
            <h1 className='text-6xl text-center'>ReactQueries using TanStack Query</h1>
            <div className='mt-5'>
                <input
                    className='border p-1 me-2'
                    type="text"
                    name='product'
                    placeholder='Enter Product Title'
                    onChange={(e) => setProductTitle(e.target.value)}
                    value={productTitle}
                />
                <button
                    onClick={handleAddNewProduct}
                    disabled={productTitle.trim() === ""}
                    className='border p-2 bg-green-400 rounded-lg'
                    type='button'
                >Add Product
                </button>
            </div>
            <ul className='mt-10 bg-green-50 p-2'>
                {
                    ProductList?.length > 0
                        ? (ProductList.map((product) => (
                            <li key={product.id}>{product.title}</li>
                        )))
                        : <h1>No Product Found</h1>
                }
            </ul>
        </div>
    )
}

export default ReactQueries