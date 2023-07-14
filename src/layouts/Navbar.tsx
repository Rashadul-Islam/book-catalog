import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white/60 fixed top backdrop-blur-lg z-10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-black text-xl font-semibold uppercase tracking-wider"
            >
              <img className="w-[80px]" src={logo} alt="" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-black hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/allbooks"
                className="text-black hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                All Books
              </Link>
              <Link
                to="/signin"
                className="text-black hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Signin
              </Link>
              <Link
                to="/signup"
                className="text-black hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Signup
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-500 focus:outline-none focus:bg-gray-700 focus:text-black"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-black hover:bg-gray-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/allbooks"
              className="text-black hover:bg-gray-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              All Books
            </Link>
            <Link
              to="/signin"
              className="text-black hover:bg-gray-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Signin
            </Link>
            <Link
              to="/signup"
              className="text-black hover:bg-gray-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Signup
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
