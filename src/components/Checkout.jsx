import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCart, removeFromCart, updateQuantity } from '../shop_data/cart';

const Checkout = () => {
    // States to toggle visibility of forms
    const [showAddressForm, setShowAddressForm] = useState(false);
    const [showPaymentForm, setShowPaymentForm] = useState(false);
    const [cartItems, setCartItems] = useState(getCart());

    const navigate = useNavigate();

    useEffect(() => {
        setCartItems(getCart());
    }, [cartItems]);
    

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

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.priceCents * item.quantity, 0) / 100;
    };

    const handleConfirmationClick = () => { navigate('/confirmation'); };

    return (
        <div className="p-4 bg-gray-100 min-h-screen">
            {/* Header */}
            <header className="bg-blue-300 text-white p-4 text-center">
                <h1 className="text-2xl font-bold">Checkout</h1>
            </header>

            {/* Main Content */}
            <div className="mt-6">
                {/* Shipping Address Section */}
                <h2 className="text-xl font-bold mb-4">1. Enter Shipping Address</h2>
                {!showAddressForm && (
                    <button
                        className="bg-blue-500 text-white ml-5 px-4 py-2 rounded"
                        onClick={() => setShowAddressForm(true)}
                    >
                        Add an address
                    </button>
                )}

                {showAddressForm && (
                    <div className="mt-4 bg-white p-4 shadow rounded">
                        <h1 className="text-xl font-bold mb-4">Add an address</h1>
                        <div className="mb-4">
                            <label className="block">Name</label>
                            <input
                                className="p-2 border w-full"
                                type="text"
                                placeholder="ex: John Smith"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block">Phone number</label>
                            <input
                                className="p-2 border w-full"
                                type="text"
                                placeholder="Phone number"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block">Address</label>
                            <input
                                className="p-2 border w-full"
                                type="text"
                                placeholder="Street address or P.O Box"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                className="p-2 border w-full"
                                type="text"
                                placeholder="Apt, Suite, unit, building, floor, etc"
                            />
                        </div>
                        <div className="flex space-x-4 mb-4">
                            <div className="flex-1">
                                <label className="block">City</label>
                                <input
                                    className="p-2 border w-full"
                                    type="text"
                                    placeholder="City"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block">Country</label>
                                <input
                                    className="p-2 border w-full"
                                    type="text"
                                    placeholder="Country"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block">ZIP code</label>
                                <input
                                    className="p-2 border w-full"
                                    type="text"
                                    placeholder="ZIP code"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block">State</label>
                                <input
                                    className="p-2 border w-full"
                                    type="text"
                                    placeholder="State"
                                />
                            </div>
                        </div>
                        <button
                            className="bg-red-500 text-white px-4 py-2 rounded"
                            onClick={() => setShowAddressForm(false)}
                        >
                            Back
                        </button>
                        <button
                            className="bg-green-500 text-white px-4 py-2 ml-2 rounded"
                            onClick={() => setShowAddressForm(false)}
                        >
                            Save
                        </button>
                    </div>
                )}

                {/* Payment Method Section */}
                <h2 className="text-xl font-bold mt-6 mb-4">2. Payment Method</h2>
                {!showPaymentForm && (
                    <button
                        className="bg-blue-500 text-white ml-5 px-4 py-2 rounded"
                        onClick={() => setShowPaymentForm(true)}
                    >
                        Add payment details
                    </button>
                )}

                {showPaymentForm && (
                    <div className="mt-4 bg-white p-4 shadow rounded">
                        <h1 className="text-xl font-bold mb-4">Add payment details</h1>
                        <div className="mb-4">
                            <label className="block">Cardholder Name</label>
                            <input
                                className="p-2 border w-full"
                                type="text"
                                placeholder="ex: John Smith"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block">Card Number</label>
                            <input
                                className="p-2 border w-full"
                                type="text"
                                placeholder="xxxx xxxx xxxx xxxx"
                            />
                        </div>
                        <div className="flex space-x-4 mb-4">
                            <div className="flex-1">
                                <label className="block">Expiration Date</label>
                                <input
                                    className="p-2 border w-full"
                                    type="text"
                                    placeholder="MM/YY"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block">CVV</label>
                                <input
                                    className="p-2 border w-full"
                                    type="text"
                                    placeholder="CVV"
                                />
                            </div>
                        </div>
                        <button
                            className="bg-red-500 text-white px-4 py-2 rounded"
                            onClick={() => setShowPaymentForm(false)}
                        >
                            Back
                        </button>
                        <button
                            className="bg-green-500 text-white px-4 py-2 ml-2 rounded"
                            onClick={() => setShowPaymentForm(false)}
                        >
                            Save
                        </button>
                    </div>
                )}

                {/* Cart Items Section */}
                <h2 className="text-xl font-bold mt-6 mb-4">3. Your Items</h2>
                <div className='bg-white p-4 mt-4'>
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

                {/* Place Order Section */}
                <div className="border border-transparent mt-5 rounded">
                    <button className="bg-blue-500 text-white m-5 px-4 py-2 rounded-full" onClick={handleConfirmationClick}>
                        Place your order
                    </button>
                    <span className="text-lg font-bold">Order Total: ${calculateTotalPrice()}</span>
                </div>

                {/* Additional Text Section */}
                <div className="mt-4 p-4 text-gray-600 text-center">
                    <p>By placing your order, you agree to our terms and conditions. Please review all items and information before finalizing your purchase.</p>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
