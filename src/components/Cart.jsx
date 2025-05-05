import React, { useContext } from 'react';
import { CartContext } from '../Pages/CartContext';

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <ul className="space-y-2">
          {cart.map((item, index) => (
            <li key={index} className="border p-3 rounded shadow-sm">
              <div className="font-semibold">{item.title}</div>
              <div>${item.price}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
