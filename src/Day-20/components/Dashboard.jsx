import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const { productList, addToOrderList } = useContext(AppContext);
    const [search, setSearch] = useState('');
    const [rating, setRating] = useState(2);
    const [price, setPrice] = useState(0);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const navigate = useNavigate();

    // Initialize filtered products when productList changes
    useEffect(() => {
        setFilteredProducts(productList);
    }, [productList]);

    // Handle search input change
    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    // Handle rating input change
    const handleRating = (e) => {
        setRating(e.target.value);
    };

    // Handle price input change
    const handlePrice = (e) => {
        setPrice(e.target.value);
    };

    // Function to apply both search and rating filters
    const filterProducts = () => {
        let filtered = [...productList];

        // Apply search filter
        if (search) {
            filtered = filtered.filter((product) =>
                product.title.toLowerCase().includes(search.toLowerCase())
            );
        }

        // Apply rating filter
        filtered = filtered.filter((product) => product.rating >= rating);

        // Apply price filter
        filtered = filtered.filter((product) => product.price >= price);

        // Update the filtered products state
        setFilteredProducts(filtered);
    };

    const handleAddToCart = (productId) => {
        const product = productList.find((product) => product.id === Number(productId));
        addToOrderList(product);
        alert(`${product.title} has been added to your cart!`);
    };

    const handleBuyNow = (productId) => {
        const product = productList.find((product) => product.id === Number(productId));
        addToOrderList(product);
        navigate("/store", {
            state: { selectedProduct: product }, // Pass the selected product
        });
    };

    // Trigger filtering whenever search or rating changes
    useEffect(() => {
        filterProducts();
    }, [search, rating, productList, price]);

    return (
        <div className="bg-gray-100 px-10 py-5 relative">
            <h1 className="text-5xl font-bold text-center">Products List</h1>
            <button
                onClick={() => navigate("/store")}
                className="bg-yellow-300 border-4 border-yellow-400 px-4 py-2 w-[130px] shadow-lg rounded-xl right-10 top-10 h-15 absolute text-lg font-bold hover:bg-yellow-400 hover:border-4 hover:border-yellow-600"
            >
                Store
            </button>
            {/* Dashboard */}
            <div className="flex gap-2 mt-10">
                {/* Sidebar */}
                <div className="w-[200px] border-1 border-black h-100 sticky top-10 bg-white">
                    <h3 className="text-center font-bold">Filters</h3>
                    {/* Rating filter */}
                    <div className="border-1 border-black px-3 py-2">
                        <p className="text-sm font-bold mb-2">Rating</p>
                        <input
                            onChange={handleRating}
                            type="range"
                            min={1}
                            max={5}
                            step={0.1}
                            value={rating}
                        />
                        <p className="text-sm text-center mt-2">Rating: {rating}</p>
                    </div>
                    {/* Price filter */}
                    <div className="border-1 border-black px-3 py-2">
                        <p className="text-sm font-bold mb-2">Price</p>
                        <input
                            onChange={handlePrice}
                            type="range"
                            min={0}
                            max={3000}
                            step={1}
                            value={price}
                        />
                        <p className="text-sm text-center mt-2">Price: {price}</p>
                    </div>
                </div>
                {/* Products */}
                <div className="w-3/4 border-1 border-black flex flex-col items-center bg-white">
                    <h1 className="text-3xl font-bold text-center my-5">Products</h1>
                    <form onSubmit={(e) => e.preventDefault()} className="mb-15">
                        <input
                            onChange={handleSearch}
                            value={search}
                            type="text"
                            className="border-1 rounded-lg me-5"
                        />
                        <button type="submit" className="bg-black text-white px-4 py-1">
                            Search
                        </button>
                    </form>
                    <div className="grid grid-cols-4 gap-10">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <div key={product.id} className="bg-amber-200 rounded-lg py-3 px-6 w-[230px]">
                                    <div className="border-1 border-amber-50 bg-amber-100 rounded-lg">
                                        <img
                                            className="hover:scale-105 transition-all duration-300 hover:bg-pink-400 hover:rounded-lg ease-in-out"
                                            id={product.id}
                                            src={product.thumbnail}
                                            alt={product.title}
                                        />
                                    </div>
                                    <div className="my-1 flex justify-between">
                                        <h2 className="flex flex-nowrap overflow-hidden text-ellipsis whitespace-nowrap font-bold text-sm">
                                            {product.title}
                                        </h2>
                                        <p className="text-sm font-light bg-red-300 w-10 rounded-full text-center px-1">
                                            {product.rating}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="border-1 border-amber-600 rounded-xl text-center text-[16px] font-bold">
                                            Description:
                                        </p>
                                        <p className="h-25 overflow-auto text-sm font-light text-gray-600 border-1 border-amber-600 rounded-lg mt-2 py-1 px-2">
                                            {product.description}
                                        </p>
                                    </div>
                                    <div className="border-1 border-amber-600 rounded-xl flex justify-between px-4 items-center mt-3">
                                        <p className="text-[16px] font-bold">Price: </p>
                                        <p className="text-sm font-semibold text-gray-800">{product.price}</p>
                                    </div>
                                    <div className="my-4 flex justify-between">
                                        <button
                                            onClick={() => handleBuyNow(product.id)}
                                            className="bg-sky-400 border-sky-800 rounded-lg py-1 px-2 border-2 font-bold"
                                        >
                                            Buy now
                                        </button>
                                        <button
                                            onClick={() => handleAddToCart(product.id)}
                                            className="bg-sky-400 border-sky-800 rounded-lg py-1 px-2 border-2 font-bold"
                                        >
                                            Cart
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No Products Found</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
