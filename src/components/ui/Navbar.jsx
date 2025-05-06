import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) =>
    isActive
      ? "text-white bg-teal-500 px-4 py-2 rounded-md"
      : "text-gray-200 hover:bg-gray-700 px-4 py-2 rounded-md transition";

  return (
    <div className="bg-gray-800 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-3">
        <ul className="flex space-x-6">
          <li><NavLink to="/" className={navLinkStyles}>Home</NavLink></li>
          <li><NavLink to="/products" className={navLinkStyles}>Products</NavLink></li>
          <li><NavLink to="/cart" className={navLinkStyles}>View Cart</NavLink></li>
          <li><NavLink to="/login" className={navLinkStyles}>Login</NavLink></li>
          <li><NavLink to="/SignIn" className={navLinkStyles}>SignIn</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
