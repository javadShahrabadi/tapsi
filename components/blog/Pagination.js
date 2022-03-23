import React from "react";

const Pagination = () => {
  return (
    <ul className="flex justify-center items-center space-x-2 mt-10">
      <li className="border-2 w-8 h-8 cursor-pointer border-blue-100 rounded-full hover:border-blue-400 hover:text-blue-400 transition-all duration-200 ease-out ml-2 flex justify-center items-center">
        ۱
      </li>
      <li className="border-2 w-8 h-8 cursor-pointer border-blue-100 rounded-full hover:border-blue-400 hover:text-blue-400 transition-all duration-200 ease-out flex justify-center items-center">
        ۲
      </li>
      <li className="border-2 w-8 h-8 cursor-pointer border-blue-100 rounded-full hover:border-blue-400 hover:text-blue-400 transition-all duration-200 ease-out flex justify-center items-center">
        ۳
      </li>
      <li className="border-2 w-8 h-8 cursor-pointer border-blue-100 rounded-full hover:border-blue-400 hover:text-blue-400 transition-all duration-200 ease-out flex justify-center items-center">
        ...
      </li>
      <li className="border-2  w-8 h-8 py-1 px-4 cursor-pointer border-blue-100 rounded-full hover:border-blue-400 hover:text-blue-400 transition-all duration-200 ease-out text-sm flex justify-center items-center">
        بعد
      </li>
    </ul>
  );
};

export default Pagination;
