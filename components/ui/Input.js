import React from "react";

const Input = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
      className="text-sm pr-2 py-2 focus:outline-0 border-b w-full lg:w-1/2 text-gray-500 focus:scale-105 focus:border-b-2 hover:border-[#FD6131] transition-all duration-300 ease-out bg-white"
    />
  );
};

export default Input;
