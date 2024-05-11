import React from "react";
import logo from "../../assets/png/gradde-black.png";
import instagramSvg from "../../assets/svg/icons8-instagram.svg";
import facebookSvg from "../../assets/svg/icons8-facebook.svg";
import twitterSvg from "../../assets/svg/icons8-twitter.svg";

const Footer = () => {
  return (
    <footer className="bg-[#fffcf7] rounded-lg shadow p-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-12" alt="Gradde Logo" />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#pricing" className="hover:underline me-4 md:me-6">
                Pricing
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/gradde.co">
                <img
                  src={instagramSvg}
                  alt="link to gradde instagram page"
                  className="h-6 me-4 md:me-6"
                />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100094697289424">
                <img
                  src={facebookSvg}
                  alt="link to gradde instagram page"
                  className="h-6 me-4 md:me-6"
                />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/graddeco">
                <img
                  src={twitterSvg}
                  alt="link to gradde instagram page"
                  className="h-6"
                />
              </a>
            </li>
            {/* <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                FAQs
              </a>
            </li> */}
          </ul>
        </div>
        <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-6" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Gradde™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
