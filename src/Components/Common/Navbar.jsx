import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaPaw, FaSignInAlt, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../Services/CartContext';
// import Login from '../Pages/Login';

const Navbar = () => {
  const { cartItems, toggleCart } = useCart();
  return (
    <nav className="bg-[#1e532b] text-white px-6 py-3 flex items-center justify-between shadow-md">

      {/* 1. Zooming Logo */}
      <div className="flex items-center gap-3 cursor-pointer transition-transform duration-300 hover:scale-105 p-2">
        <FaPaw className="text-white text-2xl bg-[#02754e] p-2 rounded-[5px]" size={40} />
        <span className="font-bold text-[27px] tracking-wide text-[#F5B800]">City Zoo</span>
      </div>

      {/* Nav Links with Bottom-to-Top Fill Effect */}
      <ul className="flex items-center gap-4 text-[20px] font-normal">
        {['Home', 'About', 'Services', 'Events', 'Contact' ].map((item) => (
          <li key={item}>
            <Link
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="relative overflow-hidden group inline-block px-3.5 py-1 rounded-md transition-colors duration-350 z-10 hover:text-green-950"
            >
              {/* Downward to Upward sliding background div */}
              <span className="absolute inset-0 bg-[#F5B800] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-[-1] rounded-md" />
              {item}
            </Link>
          </li>
        ))}

        {/* Dropdown Menu for Languages */}
        <li className="relative group pb-2.5">
          <button className="relative overflow-hidden flex items-center gap-2 px-3 py-1 rounded-md transition-colors duration-350 z-10 group-hover:hover:text-green-950">
            {/* Sliding background for Languages button */}
            <span className="absolute inset-0 bg-[#F5B800] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-[-1] rounded-md" />

            <span>Languages</span>
            <FaChevronDown className="text-xs transition-transform duration-300 group-hover:rotate-180" />
          </button>

          {/* Submenu Dropdown */}
          <div className="absolute left-0 top-full pt-1 hidden group-hover:block w-40 z-50">
            <div className="bg-white text-green-950 rounded-md shadow-lg overflow-hidden py-1">
              <a href="#en" className="block px-4 py-2 text-sm hover:bg-green-100 transition-colors">
                English
              </a>
              <a href="#ar" className="block px-4 py-2 text-sm hover:bg-green-100 transition-colors">
                Arabic
              </a>
            </div>
          </div>
        </li>
      </ul>

      {/* Action Buttons (Login + Cart) */}
      <div className="flex items-center gap-4">
        {/* Login Button */}
        <Link to="/login" 
        className="flex items-center gap-2 border bg-white px-3.5 py-2 rounded-md text-[17px] font-medium text-[#1e532b] hover:bg-gray-100 transition-transform duration-700 hover:-translate-y-1 shadow-sm">
          <FaSignInAlt />
          <span>Login</span>
        </Link>

        {/* Cart Button */}
        <button
          onClick={toggleCart}
          className="relative flex items-center gap-2  text-green-900 bg-white px-2 py-2 rounded-md text-[17px] font-bold transition-transform duration-700 hover:-translate-y-1 shadow-sm"
        >
          <FaShoppingCart className="text-xl" />

          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2.5 bg-amber-400  text-green-900 text-[12px] font-black w-5 h-5 rounded-full flex items-center justify-center border-1 border-white shadow">
              {cartItems.length}
            </span>
          )}
        </button>
      </div>

    </nav>
  );
};

export default Navbar;
