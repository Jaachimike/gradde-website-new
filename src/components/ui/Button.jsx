import React from "react";

const Button = ({ onClick, className, text }) => {
  const defaultStyles =
    " bg-gradde-purple px-5 py-2 rounded-full font-semibold";
  const mergedStyles = `${defaultStyles} ${className}`;
  return (
    <button onClick={onClick} className={mergedStyles}>
      <p>{text}</p>
    </button>
  );
};

export default Button;
