import React from "react";
import Button from "../components/ui/Button";
import heroImage from "../assets/png/HeroSecImage.png";
import gradebook from "../assets/png/gradebook.png";
import gradingSystem from "../assets/png/gradingSyatem.png";
import resultSharing from "../assets/png/seamless-sharing.png";
import generateFeedback from "../assets/png/teaching-feedback.png";
import Testimonial from "../components/ui/Testimonial/Testimonial";

const Homepage = () => {
  return (
    <div className=" bg-[#fffcf7]">
      <div className="max-w-7xl mx-auto">
        {/* hero section */}
        <div className="pt-8 mb-12 flex space-x-9">
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
        <div>
          <p className="text-6xl font-bold mb-5 text-center">
            Expreience the power of Gradde
          </p>
          <p className=" text-gray-400 mb-16 text-center">
            The perfect gradebook for tutuors, teachers and schools who are
            looking to save time and simplify their grading process
          </p>
          {/* seamless result sharing */}
          <div className="flex space-x-8 mb-16">
            {/* write up */}
            <div>
              <p className="text-3xl font-semibold mb-3 text-gradde-purple">
                Seamless Result Sharing
              </p>
              <p>
                Easily share grades with students, parents, and administrators.
                You can share grades via SMS, email or a secure link to save
                money on printing costs
              </p>
            </div>
            {/* image */}
            <div className=" w-1/2 shadow-md">
              <img src={resultSharing} alt="" />
            </div>
          </div>
          {/* generate feedback for teaching */}
          <div className="flex space-x-8 mb-16">
            {/* image */}
            <div className="w-1/2 shadow-md">
              <img src={generateFeedback} alt="" />
            </div>
            {/* write up */}
            <div>
              <p className="text-3xl font-semibold mb-3 text-gradde-purple">
                Generate Feedback for Teaching
              </p>
              <p>
                Teach more effectively with valuable insights into student
                performance, class averages and other learning indicators
              </p>
            </div>
          </div>
          {/* online gradebook */}
          <div className="flex space-x-8 mb-16">
            {/* write up */}
            <div>
              <p className="text-3xl font-semibold mb-3 text-gradde-purple">
                Online Gradebook
              </p>
              <p>
                Make the shift from paper gradebooks and excel sheets to a
                spreadsheet designed specially for teaching, accessible anywhere
                at anytime
              </p>
            </div>
            {/* image */}
            <div className=" shadow-md">
              <img src={gradebook} alt="" />
            </div>
          </div>
          {/* customizable grading system */}
          <div className="flex space-x-8 pb-16">
            {/* image */}
            <div className=" shadow-md">
              <img src={gradingSystem} alt="" />
            </div>
            {/* write up */}
            <div className="w-1/2">
              <p className="text-3xl font-semibold mb-3 text-gradde-purple">
                Customizable Grading System
              </p>
              <p>
                Gradde automatically compiles grades based on your specific
                grading criteria, so you can save time and focus on teaching
              </p>
            </div>
          </div>
        </div>

        {/* testimonial section */}
        <Testimonial />
      </div>
    </div>
  );
};

export default Homepage;
