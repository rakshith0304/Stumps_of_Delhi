import React, { useState, useEffect } from 'react';
import { getCart } from '../shop_data/cart';

const Confirmation = () => {
    const [cartItems, setCartItems] = useState(getCart());

    useEffect(() => {
        setCartItems(getCart());
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="flex flex-col items-center">
                <h1 className='text-xl font-bold'>Arriving tomorrow by 10 PM</h1>
                <div className="flex flex-wrap justify-center mt-4">
                    {cartItems.map((item) => (
                        <img
                            key={item.id}
                            src={item.image}
                            alt={item.name}
                            className="w-32 h-32 object-cover m-2"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Confirmation;
