import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/png/gradde-black.png";
import Button from "../ui/Button";

const Navbar = () => {
  return (
    <div className="bg-[#fffcf7]">
      <div className=" max-w-7xl mx-auto flex justify-between items-center py-5">
        {/* logo */}
        <div>
          <a href="#">
            <img src={logo} alt="gradde logo" className="h-10" />
          </a>
        </div>
        {/* menu items */}
        <nav>
          <ul className="flex justify-around">
            <li>Pricing</li>
          </ul>
        </nav>
        {/* login and signup button */}
        <div className=" space-x-4 text-white font-semibold">
          <Button
            text="Login"
            className=" bg-transparent text-black hover:text-gradde-purple  transition-all"
          />
          <Button text="Signup" className="hover:text-black transition-all" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
