import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        // Fetch cart items from local storage or API
        const items = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(items);
        calculateTotal(items);
    }, []);

    const calculateTotal = (items) => {
        const totalAmount = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotal(totalAmount);
    };

    const handleQuantityChange = (id, quantity) => {
        const updatedItems = cartItems.map(item => 
            item.id === id ? { ...item, quantity: parseInt(quantity) } : item
        );
        setCartItems(updatedItems);
        localStorage.setItem('cart', JSON.stringify(updatedItems));
        calculateTotal(updatedItems);
    };

    const handleRemoveItem = (id) => {
        const updatedItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedItems);
        localStorage.setItem('cart', JSON.stringify(updatedItems));
        calculateTotal(updatedItems);
    };

    return (
        <div className="cart-page">
            <h1>Your Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty. <Link to="/">Continue Shopping</Link></p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                <h2>{item.name}</h2>
                                <p>Price: ${item.price}</p>
                                <input 
                                    type="number" 
                                    value={item.quantity} 
                                    onChange={(e) => handleQuantityChange(item.id, e.target.value)} 
                                    min="1" 
                                />
                                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <h2>Total: ${total.toFixed(2)}</h2>
                    <Link to="/checkout">Proceed to Checkout</Link>
                </div>
            )}
        </div>
    );
};

export default CartPage;