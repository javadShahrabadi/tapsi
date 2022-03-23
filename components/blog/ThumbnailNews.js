import React from "react";
import Image from "next/image";
// ------------
const ItemUpFooter = (props) => {
  return (
    <li className="flex">
      <div>
        <Image
          src={props.image}
          width={86}
          height={64}
          className="rounded-sm"
          alt={props.title}
        />
      </div>
      <div className="pr-2">
        <h3 className="text-sm font-bold text-gray-600">{props.title}</h3>
        <small className="pt-2 text-xs text-gray-400">{props.date}</small>
      </div>
    </li>
  );
};

export default ItemUpFooter;
