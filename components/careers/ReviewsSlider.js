import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import ReviewsData from "data/ReviewsSldier";
import CSSTransition from "react-transition-group/CSSTransition";
// -------------------

const ReviewsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(ReviewsData[0]);

  const dotSlideHandler = (id) => {
    const findEl = ReviewsData.find((review) => {
      return review.id === id;
    });
    setCurrentSlide(findEl);
  };
  const rightSlideHandler = () => {
    let currentIndex = +currentSlide.id.split("-")[1];
    if (currentIndex === ReviewsData.length - 1) {
      setCurrentSlide(ReviewsData[0]);
      return;
    }
    currentIndex += 1;
    setCurrentSlide(ReviewsData[currentIndex]);
  };
  const leftSlideHandler = () => {
    let currentIndex = +currentSlide.id.split("-")[1];
    if (currentIndex <= 0) {
      console.log("ended");
      setCurrentSlide(ReviewsData[ReviewsData.length - 1]);
      return;
    }
    currentIndex -= 1;
    setCurrentSlide(ReviewsData[currentIndex]);
  };

  return (
    <div className="flex justify-center my-10">
      <div className="flex items-center justify-center">
        <div
          className="text-gray-500 bg-blue-50 p-3 rounded-full flex justify-center hover  cursor-pointer hover:bg-blue-400 hover:text-white transition-all duration-300 ease-out ml-2"
          onClick={leftSlideHandler}
        >
          <FaChevronRight className="w-4 h-4" />
        </div>

        <div className="flex flex-col w-full lg:w-1/2 items-center">
          <div className="bg-white px-6 py-4 border-2 border-gray-200 rounded-lg shadow-lg ">
            <div className="flex items-center space-x-4">
              <div>
                <Image
                  src={currentSlide.image}
                  width={64}
                  height={64}
                  alt={currentSlide.name}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col pr-4">
                <h3 className="text-xl font-bold">{currentSlide.name}</h3>
                <h4 className="text-gray-400">{currentSlide.job}</h4>
              </div>
            </div>
            <p className="text-justify pt-6">{currentSlide.description}</p>
          </div>
          <div className="flex mt-5">
            {ReviewsData.map((review) => {
              return (
                <span
                  onClick={() => dotSlideHandler(review.id)}
                  className={`rounded-full h-2 w-2 ml-1 cursor-pointer ${
                    review.id === currentSlide.id
                      ? "bg-blue-400"
                      : "bg-gray-200"
                  }`}
                  key={review.id}
                />
              );
            })}
          </div>
        </div>

        <div
          className="text-gray-500 bg-blue-50 p-3 rounded-full flex justify-center hover  cursor-pointer hover:bg-blue-400 hover:text-white transition-all duration-300 ease-out mr-2"
          onClick={rightSlideHandler}
        >
          <FaChevronLeft className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default ReviewsSlider;
