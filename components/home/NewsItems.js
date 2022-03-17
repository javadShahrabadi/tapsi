import React from "react";
import Image from "next/image";
// ------------
const NewsItems = (props) => {
  return (
    <li className="flex flex-col cursor-pointer bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:scale-105 hover:shadow-lg transition-all duration-300 ease-out">
      <div className="overflow-hidden rounded-lg">
        <Image
          src={props.image}
          width={343}
          height={161}
          alt={props.title}
          layout="responsive"
        />
      </div>
      <div className=" pt-3">
        <h3 className="text-gray-600 text-lg font-semibold">{props.title}</h3>
        <p className="pt-4 text-justify text-md text-gray-500">
          {props.description}
        </p>
      </div>
    </li>
  );
};

export default NewsItems;
