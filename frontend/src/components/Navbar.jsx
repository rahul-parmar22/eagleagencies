import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-yellow-500 text-black fixed w-full top-0 left-0 z-50">
  <div className="max-w-7xl mx-auto px-3 sm:px-4 flex justify-between items-center h-14 sm:h-16">
        {/* Logo */}
      <h1 className="text-lg sm:text-xl font-bold">
          <Link to="/">MyApp</Link>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="hover:text-black/70">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-black/70">
              About
            </Link>
          </li>

          <li>
            <Link to="/products" className="hover:text-black/70">
              Products
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-black/70">
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
<button
  className="md:hidden text-xl sm:text-2xl"
  onClick={() => setIsOpen(!isOpen)}
>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-yellow-500 transition-all duration-300 ${
          isOpen ? "max-h-screen py-6" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4">

          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>

          <li>
            <Link to="/products" onClick={() => setIsOpen(false)}>
              Products
            </Link>
          </li>

          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}