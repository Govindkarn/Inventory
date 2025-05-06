import React, { useContext } from 'react';
import { CartContext } from '../Pages/CartContext';

const Cart = () => {
  const { cart } = useContext(CartContext);

  // Group items by title (or use item.id if available)
  const groupedCart = cart.reduce((acc, item) => {
    const key = item.title;
    if (!acc[key]) {
      acc[key] = { ...item, quantity: 1 };
    } else {
      acc[key].quantity += 1;
    }
    return acc;
  }, {});

  const uniqueItems = Object.values(groupedCart);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <ul className="space-y-2">
          {uniqueItems.map((item, index) => (
            <li key={index} className="border p-3 rounded shadow-sm">
              <div className="font-semibold">{item.title}</div>
              <div>${item.price} x {item.quantity}</div>
              <div className="text-gray-600">Total: ${item.price * item.quantity}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
