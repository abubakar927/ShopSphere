import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";

function Navbar() {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          ShopSphere
        </Link>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Links */}
        <div
          className={`
            absolute md:static top-16 left-0 w-full md:w-auto
            bg-white md:bg-transparent
            flex flex-col md:flex-row
            items-start md:items-center
            gap-4 md:gap-6
            px-6 md:px-0 py-4 md:py-0
            ${isOpen ? "block" : "hidden"} md:flex
          `}
        >
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-blue-600"
                : "text-gray-700 hover:text-blue-600"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-blue-600"
                : "text-gray-700 hover:text-blue-600"
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/cart"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-blue-600 flex items-center"
                : "text-gray-700 hover:text-blue-600 flex items-center"
            }
          >
            Cart
            {cart.length > 0 && (
              <span className="ml-1 bg-red-500 text-white text-sm rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
