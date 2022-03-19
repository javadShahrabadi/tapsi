import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";

const Accordian = (props) => {
  const [showDetail, setShowDetail] = React.useState(false);
  const showDetailHandler = () => {
    setShowDetail((prevState) => !prevState);
  };
  return (
    <li
      className="w-full px-4 py-3 border border-gray-200 rounded-md cursor-pointer hover:border-blue-200 transition-all duration-200 ease-out"
      onClick={showDetailHandler}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold ">{props.title}</h3>
        <span>
          {!showDetail && <FaChevronDown className="w-3 h-3 text-gray-500" />}
          {showDetail && <FaChevronUp className="w-3 h-3 text-gray-500" />}
        </span>
      </div>
      <CSSTransition in={showDetail} timeout={400} classNames="my-node">
        <div>
          {showDetail && (
            <p className="pt-4 text-[13px] relative ">{props.text}</p>
          )}
        </div>
      </CSSTransition>
    </li>
  );
};

export default Accordian;
