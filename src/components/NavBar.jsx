import React, { useState } from "react";
import { Link } from "react-router-dom";
import logotext from "../assets/hosteledge logo.png";
<<<<<<< HEAD
import logo from "../assets/hosteledge logo text.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../services/AuthProvider";
export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useAuth();
=======
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../services/AuthProvider";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useAuth();

>>>>>>> 0683565 (commit with updated files)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
<<<<<<< HEAD
    <header className=" lg:py-3 bg-gradient-to-br from-purple-100 to-blue-100 h-16  z-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
        <nav className="relative flex items-center justify-between h-16 bg-white lg:rounded-md lg:shadow-lg lg:h-24 lg:px-8 lg:py-6 z-30">
          <div className="flex-shrink-0">
            <span className="flex">
              <img className="w-auto h-8 lg:h-10" src={logotext} alt="Logo" />
              <h1 className="w-20 text-[25px] lg:h-15">StayEase</h1>
            </span>
          </div>

          {/* Hamburger Icon */}
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
          >
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>

          {/* Desktop Links */}
          <div className="hidden ml-10 lg:flex lg:items-center lg:mr-auto lg:space-x-10">
            {["Contact", "About Us", "Location", "Pricing"].map((link) => (
              <span
                key={link}
                href="#"
                title=""
                onClick={closeMenu}
                className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                {link}
              </span>
            ))}
          </div>

          {/* Login and Signup Links */}
          <div className="hidden lg:flex lg:items-center lg:space-x-10">
            <Link to={"/register"}>
              <span
                onClick={closeMenu}
                className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
              >
                Sign up
              </span>
            </Link>

            <Link to={"/"}>
              <span
                onClick={() => {
                  closeMenu();
                }}
                className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
              >
                Sign in
              </span>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="flex flex-col py-4 pl-2 space-y-2 lg:hidden fixed top-10  bg-white border-2  w-full z-30 ">
            {["Features", "Solutions", "Resources", "Pricing"].map((link) => (
              <span
                key={link}
                href="#"
                title=""
                onClick={closeMenu}
                className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
              >
                {link}
              </span>
            ))}
            {user == false ? (
              <Link to={"/register"}>
                <span
                  onClick={closeMenu}
                  className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                >
                  Sign up
                </span>
              </Link>
            ) : null}
            <Link to="/">
              <span
                onClick={() => {
                  closeMenu();
                }}
                className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
              >
                Sign in
              </span>
            </Link>
          </nav>
        )}
      </div>
      <ToastContainer />
    </header>
    
=======
      <header className="lg:py-3 bg-gradient-to-br from-purple-100 to-blue-100 h-16 z-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="relative flex items-center justify-between h-16 bg-white lg:rounded-md lg:shadow-lg lg:h-24 lg:px-8 lg:py-6 z-30">
            <div className="flex-shrink-0">
              <span className="flex items-center gap-2">
                <img className="w-auto h-8 lg:h-10" src={logotext} alt="Logo" />
                <h1 className="text-2xl font-bold text-purple-700 italic">StayEase</h1>
              </span>
            </div>

            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>

            <div className="hidden lg:flex lg:items-center lg:space-x-6">
              <Link to="/register">
                <button className="px-6 py-2 text-white bg-purple-600 rounded-lg shadow-lg transition duration-300 hover:bg-purple-700">
                  Sign Up
                </button>
              </Link>
              <Link to="/">
                <button className="px-6 py-2 text-white bg-purple-500 rounded-lg shadow-lg transition duration-300 hover:bg-purple-600">
                  Sign In
                </button>
              </Link>
            </div>
          </nav>

          {menuOpen && (
            <nav className="flex flex-col py-4 space-y-2 lg:hidden fixed top-16 w-full bg-white border-2 shadow-lg z-30">
              {user == false ? (
                <Link to="/register" className="block text-center">
                  <button className="w-11/12 px-6 py-2 text-white bg-purple-600 rounded-lg shadow-lg transition duration-300 hover:bg-purple-700">
                    Sign Up
                  </button>
                </Link>
              ) : null}
              <Link to="/" className="block text-center">
                <button className="w-11/12 px-6 py-2 text-white bg-purple-500 rounded-lg shadow-lg transition duration-300 hover:bg-purple-600">
                  Sign In
                </button>
              </Link>
            </nav>
          )}
        </div>
        <ToastContainer />
      </header>
>>>>>>> 0683565 (commit with updated files)
    </>
  );
};
