import React, { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import data from "/data/blog-data";
import Image from "next/image";
import { TiMessages } from "react-icons/ti";

// ----------
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(data[0]);

  useEffect(() => {
    let timer = setInterval(() => {
      let currentIndex;
      currentIndex = +currentSlide.id.split("-")[1];

      if (currentIndex >= data.length - 1) {
        setCurrentSlide(data[0]);
        return;
      }
      currentIndex = currentIndex + 1;

      setCurrentSlide(data[currentIndex]);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [currentSlide]);

  //   -------------------------
  const rightSliderHandler = (id) => {
    console.log(id);
    let step = +id.split("-")[1];

    if (step >= data.length - 1) {
      setCurrentSlide(data[0]);
      return;
    }

    setCurrentSlide(data[step + 1]);
  };
  const leftSliderHandler = (id) => {
    let step = +id.split("-")[1];

    if (step <= 0) {
      setCurrentSlide(data[data.length - 1]);
      return;
    }

    setCurrentSlide(data[step - 1]);
  };

  const dotSlideHandler = (id) => {
    const index = +id.split("-")[1];
    setCurrentSlide(data[index]);
  };
  //   -------------------------
  return (
    <section className=" justify-center mt-10 items-center px-2 xl:px-0 relative hidden lg:flex">
      <div
        className="bg-blue-50  hover:bg-blue-400 w-10 h-10 p-3 rounded-full hover:text-white flex justify-center items-center cursor-pointer transition-all duration-300 ease-out"
        onClick={() => leftSliderHandler(currentSlide.id)}
      >
        <FaChevronRight className="w-4 h-4" />
      </div>
      <div className="px-2 cursor-pointer relative">
        <div className="relative">
          <div className="absolute inset__box_shadow top-0 z-20 w-full h-[96%] rounded-md" />
          <div className="w-full h-auto md:w-[1130px] md:h-[530px] relative">
            <Image
              src={currentSlide.image}
              width={1250}
              height={562}
              alt={currentSlide.title}
              className="rounded-md "
            />
          </div>
          <div className="center__absolute_div flex flex-col items-center space-y-4 z-30">
            <small className="text-center text-white bg-black px-2 py-1 lg:text-sm rounded-lg text-xs">
              {currentSlide.tag}
            </small>
            <div className="flex flex-col items-center lg:mt-20">
              <h2 className="text-white lg:text-2xl font-bold text-center mt-4 lg:mt-0">
                {currentSlide.title}
              </h2>
              <div className="flex items-center mt-4">
                <p className="text-white text-xs">{currentSlide.author}</p>
                <span className="w-1 h-1 rounded-full bg-white mx-2"></span>
                <p className="text-white text-xs">{currentSlide.date}</p>
                <span className="mx-2">
                  <TiMessages className="w-3 h-3 text-white" />
                </span>
                <span className="text-white">{currentSlide.reviewsNumber}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-4">
          {data.map((slide) => {
            return (
              <span
                onClick={() => dotSlideHandler(slide.id)}
                className={`w-2 h-2 rounded-full  mr-1 cursor-pointer ${
                  slide.id === currentSlide.id ? "bg-blue-500" : "bg-gray-200"
                }`}
                key={slide.id}
              ></span>
            );
          })}
        </div>
      </div>
      <div
        className="bg-blue-50 hover:bg-blue-400 p-3 w-10 h-10 rounded-full hover:text-white flex justify-center items-center cursor-pointer transition-all duration-300 ease-out"
        onClick={() => rightSliderHandler(currentSlide.id)}
      >
        <FaChevronLeft className="w-4 h-4" />
      </div>
    </section>
  );
};

export default Slider;
