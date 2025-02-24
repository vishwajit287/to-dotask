import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="p-4 bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link to="/" className="text-xl font-bold">{import.meta.env.VITE_BRAND_NAME}</Link>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <FiMenu size={24} />
        </button>

        {/* Navigation */}
        <nav className={`md:flex ${isOpen ? "block" : "hidden"} space-x-4`}>
        <Link to="/features" className="text-gray-600 hover:text-blue-600">Features</Link>
        <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;