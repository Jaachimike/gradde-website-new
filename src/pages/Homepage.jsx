import React from "react";
import Button from "../components/ui/Button";
import heroImage from "../assets/png/HeroSecImage.png";
import Testimonial from "../components/ui/Testimonial/Testimonial";
import Pricing from "../components/ui/Pricing";
import Features from "../components/ui/Features";

const Homepage = () => {
  return (
    <div className=" bg-[#fffcf7]">
      <div className="max-w-7xl mx-auto">
        {/* hero section */}
        <div className="pt-8 mb-20 flex space-x-9">
          {/* hero writeup */}
          <div className="w-1/2 flex flex-col justify-center">
            <p className="text-6xl font-bold mb-5">
              The Gradebook That Saves Teachers Time and Effort
            </p>
            <p className=" text-gray-400 mb-5">
              Switch from your basic spreadsheets, automate your grading process
              from start to finish
            </p>
            <div>
              <Button text="Signup for a free trial" />
            </div>
          </div>
          {/* hero image */}
          <div>
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
