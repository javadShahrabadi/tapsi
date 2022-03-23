import React, { useState } from "react";
import CSSTransition from "react-transition-group/CSSTransition";
const DropDown = (props) => {
  return (
    <div>
      <button className="p-4">{props.text}</button>

      <CSSTransition
        in={props.showDrop}
        timeout={400}
        classNames="dropdown"
        unmountOnExit
        // onEnter={() => props.dropDownHandler(true)}
        // onExited={() => props.dropDownHandler(false)}
      >
        <ul className="absolute border border-gray-100 bg-white shadow-md rounded-md w-40 top-14 text-sm flex flex-col space-y-4 p-4">
          {props.list.map((item) => {
            return (
              <li
                key={item.id}
                className="hover:text-blue-500 transition-all duration-200 ease-out cursor-pointer hover:bg-blue-50 py-1.5 rounded  hover:font-semibold text-center"
              >
                {item.title}
              </li>
            );
          })}
        </ul>
      </CSSTransition>
    </div>
  );
};

export default DropDown;
