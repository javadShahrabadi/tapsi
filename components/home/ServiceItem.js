import React from "react";
import Image from "next/image";
// -----------------------

const ServiceItem = (props) => {
  return (
    <li className="flex flex-col cursor-pointer items-center space-y-2">
      <div
        className={`opacity-50 ${
          props.service.id === props.active
            ? "opacity-100 animate-bounce"
            : null
        }`}
      >
        <Image
          src={props.service.thumbnail}
          width={94}
          height={47}
          alt={props.service.title}
        />
      </div>
      <h4>{props.service.title}</h4>
    </li>
  );
};

export default ServiceItem;
