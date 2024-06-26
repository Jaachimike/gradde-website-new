import React from "react";
// import Button from "../components/ui/Button";
// import heroImage from "../assets/png/HeroSecImage.png";
("../../assets/");
import gradebook from "../../assets/png/gradebook.png";
import gradingSystem from "../../assets/png/gradingSyatem.png";
import resultSharing from "../../assets/png/seamless-sharing.png";
import generateFeedback from "../../assets/png/teaching-feedback.png";

const Features = () => {
  return (
    <div>
      <p className="text-4xl md:text-6xl  font-bold mb-5 text-center">
        Experience the power of Gradde
      </p>
      <p className="text-sm md:text-base lg:text-md text-gray-400 mb-16 text-center">
        The perfect gradebook for tutors, teachers and schools who are looking
        to save time and simplify their grading process
      </p>
      {/* online gradebook */}
      <div className="flex flex-col md:flex-row md:items-center md:space-x-8 mb-28">
        {/* write up */}
        <div className="mb-7 md:mb-0">
          <p className="text-3xl font-semibold mb-3 text-gradde-purple">
            Online Gradebook
          </p>
          <p>
            Make the shift from paper gradebooks and excel sheets to a
            spreadsheet designed specially for teaching, accessible anywhere at
            anytime
          </p>
        </div>
        {/* image */}
        <div className=" shadow-md">
          <img src={gradebook} alt="grade book image" />
        </div>
      </div>
      {/* customizable grading system */}
      <div className="flex flex-col md:flex-row md:items-center md:space-x-8 pb-28">
        {/* image */}
        <div className="order-last md:order-first md:w-1/2 shadow-md">
          <img
            src={gradingSystem}
            alt="a picture of the grading system"
            className="w-full"
          />
        </div>
        {/* write up */}
        <div className="text-right mb-7 md:mb-0 md:w-1/2 lg:w-fit">
          <p className="text-3xl font-semibold mb-3 text-gradde-purple">
            Customizable Grading System
          </p>
          <p>
            Gradde automatically compiles grades based on your specific grading
            criteria, so you can save time and focus on teaching
          </p>
        </div>
      </div>
      {/* seamless result sharing */}
      <div className="flex flex-col md:flex-row md:items-center md:space-x-8 mb-28">
        {/* write up */}
        <div className="mb-7 md:mb-0 md:w-1/2 ">
          <p className="text-3xl font-semibold mb-3 text-gradde-purple">
            Seamless Result Sharing
          </p>
          <p>
            Easily share grades with students, parents, and administrators. You
            can share grades via SMS, email or a secure link to save money on
            printing costs
          </p>
        </div>
        {/* image */}
        <div className="md:w-1/2 shadow-md">
          <img src={resultSharing} alt="" />
        </div>
      </div>
      {/* generate feedback for teaching */}
      <div className="flex flex-col md:flex-row md:items-center md:space-x-8 mb-28">
        {/* image */}
        <div className="order-last md:order-first md:w-1/2 shadow-md">
          <img src={generateFeedback} alt="" />
        </div>
        {/* write up */}
        <div className="text-right mb-7 md:mb-0 md:w-1/2">
          <p className="text-3xl font-semibold mb-3 text-gradde-purple">
            Generate Feedback for Teaching
          </p>
          <p>
            Teach more effectively with valuable insights into student
            performance, class averages and other learning indicators
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
