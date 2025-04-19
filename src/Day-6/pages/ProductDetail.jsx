import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { contextData } from '../context/Context';

const ProductDetail = () => {
    const [productDetail, setProductDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const { handleAddToCart } = useContext(contextData);


    const fetchProductDetail = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/products/${id}`);
            const data = await response.json();
            setProductDetail(data);
        } catch (error) {
            console.error("Error fetching product details:", error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchProductDetail();
    }, [id]);

    // console.log(productDetail)
    return (
        <div className='w-full h-screen flex flex-col'>
            <h1 className='text-6xl text-center'>Product Detail</h1>
            <div className='flex md:mt-[-30px]'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-15 w-full mt-10 md:mt-0 lg:h-3/4  lg:p-20 px-10 py-5'>
                    {/* image display */}
                    <div className='shadow-md h-[450px] flex justify-center items-center rounded-xl bg-red-100 '>
                        {loading
                            ? (
                                <div>Loading....</div>
                            )
                            : (
                                <div>
                                    {
                                        productDetail && (
                                            <div>
                                                <img src={productDetail.thumbnail} alt={productDetail.title} className='w-50 mx-auto hover:scale-150 transition-all duration-300 md:hover:scale-125' />
                                                <div className='flex justify-center items-center mt-5 gap-5'>
                                                    {
                                                        productDetail.images.map((image, index) => (
                                                            <img
                                                                key={index}
                                                                src={image}
                                                                alt={`Product Image ${index}`}
                                                                className='w-20 mx-auto sm:hover:scale-150 transition-all duration-300 bg-gray-50 p-2 rounded-xl shadow-md md:hover:scale-125'
                                                                onClick={() => setProductDetail({ ...productDetail, thumbnail: image })} // Update the thumbnail on click
                                                            />
                                                        ))
                                                    }
                                                </div>
                                            </div>

                                        )
                                    }
                                </div>
                            )}
                    </div>
                    {/* Description Display */}
                    <div className='shadow-md h-[450px] flex justify-center items-center rounded-xl bg-red-100'>
                        {
                            loading
                                ? (
                                    <div>Loading...</div>
                                )
                                : (
                                    <div className='p-10'>
                                        {
                                            productDetail && (
                                                <div>
                                                    <div>
                                                        <h1 className='md:text-3xl text-xl font-medium'>Product Name</h1>
                                                        <h2 className='text-2xl font-bold text-gray-800 bg-rose-200 rounded-xl p-2 border-b-rose-500 border-1 border-t-0 border-s-0 border-e-0'>{productDetail.title}</h2>
                                                    </div>
                                                    <div>
                                                        <h1 className='md:text-2xl text-xl font-medium'>Price</h1>
                                                        <p className='text-gray-700 text-sm mt-2'>${productDetail.price}</p>
                                                        <hr className='border-rose-400 w-3/4' />
                                                        <p className='text-gray-500 text-sm mt-2 bg-rose-200 p-2 rounded-xl border-b-rose-500 border-1 border-t-0 border-s-0 border-e-0'>{productDetail.description}</p>

                                                    </div>
                                                    <div className='flex justify-between items-center mt-5 px-5'>
                                                        <button
                                                            className='bg-amber-300 p-2 text-md font-bold text-white rounded-lg me-2'
                                                        >buy now</button>
                                                        <button
                                                            onClick={() => handleAddToCart(productDetail)}
                                                            className='bg-amber-300 p-2 text-md font-bold text-white rounded-lg'
                                                        >cart</button>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail