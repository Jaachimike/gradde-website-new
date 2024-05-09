import React from "react";
import Button from "../components/ui/Button";
import heroImage from "../assets/png/HeroSecImage.png";
import Testimonial from "../components/ui/Testimonial/Testimonial";
import Pricing from "../components/ui/Pricing";
import Features from "../components/ui/Features";

const Homepage = () => {
  return (
    <div className=" bg-[#fffcf7]">
      <div className="max-w-7xl mx-auto px-9 md:px-10 lg:px-9">
        {/* hero section */}
        <div className="pt-8 mb-20 flex flex-col md:flex-row md:space-x-9">
          {/* hero writeup */}
          <div className="md:w-1/2 flex flex-col text-center md:text-left justify-center">
            <p className=" text-4xl md:text-6xl font-bold mb-5">
              The <span className=" text-gradde-purple">Gradebook</span> That
              Saves <span className=" text-gradde-purple">Teachers</span> Time
              and Effort
            </p>
            <p className="text-sm md:text-md text-gray-400 mb-5">
              Switch from your basic spreadsheets, automate your grading process
              from start to finish
            </p>
            <div>
              <Button text="Signup for a free trial" className=" text-white" />
            </div>
          </div>
          {/* hero image */}
          <div className="">
            <img src={heroImage} alt="hero image for gradde website" />
          </div>
        </div>

        {/* features section */}
        <Features />

        {/* pricing section */}
        <Pricing />

        {/* testimonial section */}
        <Testimonial />
      </div>
    </div>
  );
};

export default Homepage;
