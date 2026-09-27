import React from 'react';
import { useCart } from './CartContext';
import {
  FaTimes,
  FaTrashAlt,
  FaShoppingBasket,
  FaPaw,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const {
    cartItems,
    isCartOpen,
    toggleCart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart,
  } = useCart();

  if (!isCartOpen) return null;

  // Total calculate
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * (item.qty || 1),
    0
  );

  return (
    <>
      {/* Overlay */}
      <div
        onClick={toggleCart}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999]"
      ></div>

      {/* Cart Drawer */}
      <div className="fixed top-0 right-0 w-[90%] max-w-[420px] h-full bg-white shadow-2xl z-[1000] flex flex-col">

        {/* Header */}
        <div className="bg-[#1e532b] text-white px-5 py-5 flex items-center justify-between">
          <h3 className="text-[20px] font-bold flex items-center gap-2">
            <FaShoppingBasket className="text-amber-400" />
            Your Cart
          </h3>

          <button
            onClick={toggleCart}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
          >
            <FaTimes />
          </button>
        </div>

        {/* Cart Body */}
        <div className="flex-1 overflow-y-auto p-5">

          {cartItems.length === 0 ? (
            <div className="text-center py-16 text-gray-500">
              <FaPaw className="text-4xl mx-auto mb-3 text-gray-300" />

              <p className="font-semibold text-lg">
                Your cart is empty
              </p>
            </div>
          ) : (
            cartItems.map((item) => {
              const quantity = item.qty || 1;
              const subtotal = item.price * quantity;

              return (
                <div
                  key={item.id}
                  className="border border-green-800 rounded-lg mb-4 overflow-hidden bg-white"
                >

                  {/* Product */}
                  <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
                    <span className="font-semibold text-gray-700">
                      Product
                    </span>

                    <span className="font-bold text-[#1e532b]">
                      {item.name}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
                    <span className="font-semibold text-gray-700">
                      Price
                    </span>

                    <span className="text-gray-800">
                      Rs. {item.price}
                    </span>
                  </div>

                  {/* Quantity */}
                  <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
                    <span className="font-semibold text-gray-700">
                      Quantity
                    </span>

                    <div className="flex items-center gap-3">

                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="w-8 h-8 bg-[#1e532b] text-white rounded hover:bg-[#163f20] transition"
                      >
                        -
                      </button>

                      <span className="font-bold min-w-[20px] text-center">
                        {quantity}
                      </span>

                      <button
                        onClick={() => increaseQty(item.id)}
                        className="w-8 h-8 bg-[#1e532b] text-white rounded hover:bg-[#163f20] transition"
                      >
                        +
                      </button>

                    </div>
                  </div>

                  {/* Subtotal */}
                  <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
                    <span className="font-semibold text-gray-700">
                      Subtotal
                    </span>

                    <span className="font-bold text-[#1e532b]">
                      Rs. {subtotal}
                    </span>
                  </div>

                  {/* Action */}
                  <div className="flex justify-between items-center px-4 py-3">
                    <span className="font-semibold text-gray-700">
                      Action
                    </span>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-2 py-1.5 rounded transition"
                    >
                      <FaTrashAlt className="text-sm" />
                      Remove
                    </button>
                  </div>

                </div>
              );
            })
          )}

        </div>

        {/* Footer */}
        <div className="border-t border-gray-300 p-5 bg-gray-50">

          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-bold text-gray-700">
              Total
            </span>

            <span className="text-[21px] font-bold text-[#1e532b]">
              PKR {total}
            </span>
          </div>

          <Link
            to="/services"
            onClick={() => {
              clearCart();
              toggleCart();
            }}
            className="w-full bg-[#1e532b] hover:bg-[#163f20] text-white py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300"
          >
            Checkout
            <FaPaw className="text-amber-400" />
          </Link>

        </div>

      </div>
    </>
  );
};

export default CartDrawer;

