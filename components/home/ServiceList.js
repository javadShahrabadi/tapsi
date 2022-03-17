import ServiceItem from "./ServiceItem";
import servicesData from "../../data/services";
import Image from "next/image";
import { useEffect, useState } from "react";
const ServiceList = () => {
  const [currentService, setCurrentService] = useState(servicesData[0]);

  useEffect(() => {
    let index = 0;
    let timer = setInterval(() => {
      if (index === 8) {
        index = -1;
      }
      index += 1;
      setCurrentService(servicesData[index]);
    }, 6000);
    return () => clearInterval(timer);
  }, [servicesData]);

  return (
    <section className="max-w-7xl mx-auto">
      <h2 className="text-2xl lg:text-4xl mt-10 xl:mt-[300px] font-semibold text-center xl:text-right">
        سرویس های تپسی
      </h2>
      <ul className="hidden lg:flex flex-row items-center justify-between mt-12 px-4 xl:px-0">
        {servicesData.map((service) => {
          return (
            <ServiceItem
              service={service}
              key={service.id}
              active={currentService.id}
            />
          );
        })}
      </ul>
      <div className="mt-10 lg:mt-20 flex flex-col lg:flex-row items-start px-4 xl:px-0">
        <div className="w-full lg:w-1/2 flex-col">
          <h2 className="text-2xl font-bold">{currentService.title}</h2>
          <p className="pt-4 leading-7 text-justify">
            {currentService.description}
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src={currentService.image}
            width={1200}
            height={720}
            alt="تپسی لاین"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceList;
