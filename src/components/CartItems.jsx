import React, { useState, useEffect } from 'react';
import { getCart, removeFromCart, updateQuantity } from '../shop_data/cart';
import { useNavigate } from 'react-router-dom';

const CartItems = () => {
    const [cartItems, setCartItems] = useState(getCart());

    const navigate = useNavigate();
    const handleCheckoutClick = () => {
        navigate('/checkout');
    };

    useEffect(() => {
        setCartItems(getCart());
    }, [cartItems]); // Update cartItems state whenever cartItems changes

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
        setCartItems([...getCart()]); // Spread operator to trigger re-render
        console.log("Product removed:", getCart());
    };

    const handleQuantityChange = (productId, quantity) => {
        updateQuantity(productId, quantity);
        setCartItems([...getCart()]); // Spread operator to trigger re-render
        console.log("Quantity updated:", getCart());
    };

    return (
        <div>
            <div className="flex justify-between items-center p-4 mb-6">
                <h1 className="text-2xl font-bold pt-4 pl-3">Cart Items</h1>
                <button className="px-12 py-2 bg-blue-300 shadow-lg hover:bg-blue-400 border border-gray-200 rounded-full" onClick={handleCheckoutClick}>Proceed to Checkout</button>
            </div>

            <div className="grid grid-cols-3 gap-6 m-4">
                {cartItems.map((item) => (
                    <div key={item.id} className="shadow-lg border border-gray-200 rounded-lg p-4 text-center">
                        <img
                            className="w-full h-60 object-cover rounded-md mb-4"
                            src={item.image}
                            alt={item.name}
                        />
                        <p className="text-lg font-medium">{item.name}</p>
                        <p className="text-gray-700">${(item.priceCents / 100).toFixed(2)}</p>

                        <div className="flex items-center justify-center space-x-2">
                            <select
                                className="border p-2 rounded"
                                value={item.quantity}
                                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
                            >
                                {[...Array(100).keys()].map((num) => (
                                    <option key={num + 1} value={num + 1}>
                                        {num + 1}
                                    </option>
                                ))}
                            </select>
                            <button
                                onClick={() => handleRemoveFromCart(item.id)}
                                className="bg-red-300 px-2 py-1 rounded-full ml-2"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CartItems;
