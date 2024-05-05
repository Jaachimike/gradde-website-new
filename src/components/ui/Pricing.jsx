import React, { useState } from "react";
import Button from "./Button";

const Pricing = () => {
  const [monthly, setMonthly] = useState(true);
  const [quarterly, setQuarterly] = useState(false);
  const [yearly, setYearly] = useState(false);
  const [selectedButton, setSelectedButton] = useState(1);

  const displayMonthly = () => {
    setMonthly(true);
    setQuarterly(false);
    setYearly(false);
    handleClick(1);
  };
  const displayQuarterly = () => {
    setMonthly(false);
    setQuarterly(true);
    setYearly(false);
    handleClick(2);
  };
  const displayYearly = () => {
    setMonthly(false);
    setQuarterly(false);
    setYearly(true);
    handleClick(3);
  };

  const handleClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <div>
      <p className="text-4xl font-bold text-center mb-3">Pricing plans</p>
      <p className=" text-gray-400 mb-16 text-center">Select a billing plan</p>

      <div className="flex pb-10 space-x-10">
        {/* toggle buttons and writeup */}
        <div className="w-1/2">
          {/* toggle buttons */}
          <div>
            <span className="text-xl font-semibold mb-8 block">
              Choose a pricing plan:
            </span>
            <div className="flex">
              <Button
                text="Monthly"
                onClick={displayMonthly}
                className={` ${
                  selectedButton === 1 ? "bg-gray-300" : "bg-white"
                } text-black rounded-l-xl rounded-r-none   py-6 px-14  shadow-sm flex-1`}
              />
              <Button
                text="Quarterly"
                onClick={displayQuarterly}
                className={` ${
                  selectedButton === 2 ? "bg-gray-300" : "bg-white"
                } text-black rounded-none py-6 px-14  shadow-sm flex-1`}
              />
              <Button
                text="Yearly"
                onClick={displayYearly}
                className={` ${
                  selectedButton === 3 ? "bg-gray-300" : "bg-white"
                } text-black rounded-r-xl rounded-l-none  py-6 px-14  shadow-sm flex-1`}
              />
            </div>
          </div>
          {/* writeup */}
          {/* <div></div> */}
        </div>
        {/* price display */}
        <div className="w-full border-l pl-9">
          {monthly && (
            <div>
              <div className="flex items-end space-x-9 mt-8 mb-3">
                <p className="text-3xl font-bold ">Basic Monthly Plan</p>
                <p className="text-7xl font-bold ">
                  &#x20A6;3500{" "}
                  <span className="text-sm font-light -ml-2">per month </span>
                </p>
              </div>

              <Button text="Subscribe" className="w-full rounded-lg" />
            </div>
          )}
          {quarterly && (
            <div>
              <div className="flex items-end space-x-9 mt-8 mb-3">
                <p className="text-3xl font-bold ">Basic Quarterly Plan</p>
                <p className="text-7xl font-bold ">
                  &#x20A6;3000{" "}
                  <span className="text-sm font-light -ml-2">quarterly </span>
                </p>
              </div>

              <Button text="Subscribe" className="w-full rounded-lg" />
            </div>
          )}
          {yearly && (
            <div>
              <div className="flex items-end space-x-9 mt-8 mb-3">
                <p className="text-3xl font-bold ">Basic Yearly Plan</p>
                <p className="text-7xl font-bold ">
                  &#x20A6;2450{" "}
                  <span className="text-sm font-light -ml-2">yearly </span>
                </p>
              </div>

              <Button text="Subscribe" className="w-full rounded-lg" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
