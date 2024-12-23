import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import products from '../shop_data/products';
import cartIcon from '../images/cart.png';
import trashIcon from '../images/trash.png';
import { addToCart, removeFromCart, updateQuantity, getCart } from '../shop_data/cart';

const Shop = () => {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState(getCart());

    const handleCartClick = () => {
        navigate('/cart-items');
    };

    const handleAddToCart = (product) => {
        addToCart(product);
        setCartItems([...getCart()]); // Spread operator to trigger re-render
        console.log("Product added:", getCart()); // Debug log
    };

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
        setCartItems([...getCart()]); // Spread operator to trigger re-render
        console.log("Product removed:", getCart()); // Debug log
    };

    const handleQuantityChange = (productId, quantity) => {
        updateQuantity(productId, quantity);
        setCartItems([...getCart()]); // Spread operator to trigger re-render
        console.log("Quantity updated:", getCart()); // Debug log
    };

    return (
        <div>
            <div className="flex justify-between items-center p-4 mb-6">
                <h1 className="text-2xl font-bold">Shop</h1>
                <div className="rounded-full cursor-pointer" onClick={handleCartClick}>
                   <img src={cartIcon} className="w-10" alt="cart"/>
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-3 gap-6 m-4">
                {products.map((product) => (
                    <div key={product.id} className="shadow-lg border border-gray-200 rounded-lg p-4 text-center">
                        <img
                            className="w-full h-60 object-cover rounded-md mb-4"
                            src={product.image}
                            alt={product.name}
                        />
                        <p className="text-lg font-medium">{product.name}</p>
                        <p className="text-gray-700">${(product.priceCents / 100).toFixed(2)}</p>

                        {cartItems.some((item) => item.id === product.id) ? (
                            <div className="flex items-center justify-center space-x-2">
                                <select
                                    className="border p-2 rounded"
                                    value={cartItems.find((item) => item.id === product.id)?.quantity}
                                    onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value, 10))}
                                >
                                    {[...Array(100).keys()].map((num) => (
                                        <option key={num + 1} value={num + 1}>
                                            {num + 1}
                                        </option>
                                    ))}
                                </select>
                                <button
                                    onClick={() => handleRemoveFromCart(product.id)}
                                    className="bg-red-300 px-2 py-1 rounded-full ml-2"
                                >
                                    <img className="w-7 h-8" src={trashIcon} alt="Remove"/>
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={() => handleAddToCart(product)}
                                className="bg-blue-300 border border-gray-200 rounded-full py-1 px-2 m-2 hover:bg-blue-400"
                            >
                                Add to Cart
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shop;
