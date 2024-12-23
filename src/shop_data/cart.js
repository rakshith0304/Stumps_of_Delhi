// cart.js
let cart = [];

export const getCart = () => cart;

export const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
};

export const removeFromCart = (productId) => {
    cart = cart.filter((item) => item.id !== productId);
};

export const increaseQuantity = (productId) => {
    const product = cart.find((item) => item.id === productId);
    if (product) product.quantity += 1;
};

export const decreaseQuantity = (productId) => {
    const product = cart.find((item) => item.id === productId);
    if (product && product.quantity > 1) {
        product.quantity -= 1;
    } else {
        removeFromCart(productId);
    }
};

export const updateQuantity = (productId, quantity) => {
    const product = cart.find((item) => item.id === productId);
    if (product) {
        product.quantity = quantity;
    }
};
