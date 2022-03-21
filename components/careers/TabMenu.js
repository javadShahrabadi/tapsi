import React, { useState, useEffect } from "react";
import data from "data/careersmenu";
import Image from "next/image";

const TabMenu = () => {
  const [currentSlide, setCurrentSlide] = useState(data[0]);
  const selectItemHandler = (id) => {
    let selectedInfo = data.find((item) => {
      return item.id === id;
    });
    setCurrentSlide(selectedInfo);
  };
  useEffect(() => {
    const currentindex = +currentSlide.id.split("-")[1];
    let timer = setInterval(() => {
      if (currentindex > data.length - 1) {
        currentindex = 0;
      }
      setCurrentSlide(data[currentindex]);
      currentindex += 1;
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <section className="max-w-7xl mx-auto mt-20 lg:mt-32 flex flex-col lg:flex-row pb-20 px-4 xl:px-0">
      <div className="w-full lg:w-1/2">
        <Image
          src={currentSlide.image}
          width={384}
          height={196}
          alt={currentSlide.title}
        />
      </div>
      <div className="flex flex-col w-full lg:w-1/2 mt-8 lg:mt-0">
        <div>
          <h2 className="text-gray-700 font-bold text-2xl">
            {currentSlide.title}
          </h2>
          <p className="pt-6 text-justify">{currentSlide.description}</p>
        </div>
        <ul className="flex lg:flex-row flex-col space-y-2 lg:space-y-0  items-center justify-between pt-10">
          {data.map((item) => (
            <li
              key={item.id}
              onClick={() => selectItemHandler(item.id)}
              className={`cursor-pointer  py-2 px-4 rounded-md w-fulltext-center w-full text-center  ${
                currentSlide.id === item.id &&
                "text-white font-bold bg-blue-400 rounded-md "
              }`}
            >
              <h3>{item.title}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TabMenu;
