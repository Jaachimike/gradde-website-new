import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/png/gradde-black.png";
import Button from "../ui/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#fffcf7]">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-4">
        {/* logo */}
        <div>
          <a href="#">
            <img src={logo} alt="gradde logo" className="h-10" />
          </a>
        </div>
        {/* sidebar toggle button */}
        <div className="md:hidden">
          <button onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
        {/* menu items */}
        <nav className={` flex-grow justify-around hidden md:block `}>
          <ul className="flex justify-around">
            <li>
              <a href="#pricing">Pricing</a>
            </li>
          </ul>
        </nav>
        {/* sidebar */}
        <div
          className={`fixed inset-0 bg-[#fffcf7] z-50 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden transition duration-300 ease-in-out`}
        >
          <nav className="flex flex-col mt-20">
            <ul className="flex flex-col items-center">
              <li className="my-2">Pricing</li>
              <li className="my-2">
                <a
                  href="https://app.gradde.co/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    text="Login"
                    className="bg-transparent text-black hover:text-gradde-purple transition-all"
                  />
                </a>
              </li>
              <li className="my-2">
                <a
                  href="https://app.gradde.co/create-account"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    text="Signup"
                    className="hover:text-black transition-all"
                  />
                </a>
              </li>
            </ul>
            {/* Additional sidebar items can be added here */}
          </nav>
          {/* Close button */}
          <button onClick={toggleSidebar} className="absolute top-5 right-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {/* login and signup button */}
        <div className="space-x-4 text-white font-semibold hidden md:flex">
          <a
            href="https://app.gradde.co/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              text="Login"
              className="bg-transparent text-black hover:text-gradde-purple transition-all"
            />
          </a>

          <a
            href="https://app.gradde.co/create-account"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button text="Signup" className="hover:text-black transition-all" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
