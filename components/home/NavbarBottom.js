import React from "react";
import styles from "./NavbarBottom.module.css";
import Image from "next/image";

import { ArrowDownIcon, UserIcon } from "@heroicons/react/solid";
import { UserGroupIcon } from "@heroicons/react/outline";
// -----------
const NavbarBottom = () => {
  return (
    <header className="mt-[80px] md:mt-[73px]">
      <div className="bg-pack-banner h-[508px] bg-cover bg-no-repeat relative lg:px-0 grid place-content-center overflow-hidden">
        <div
          className={`w-full lg:w-[528px] p-[16px] lg:p-[25px] lg:absolute lg:bottom-14 lg:right-40 rounded-3xl ${styles.bgGradient}`}
        >
          <h2 className="text-white font-bold text-4xl lg:text-5xl">تپسی</h2>
          <h3 className="text-white pt-4 text-xl lg:text-2xl">
            اپلیکیشن درخواست خودرو و پیک
          </h3>

          <div className="flex flex-col lg:flex-row  items-center w-full mt-8">
            <div className="flex flex-col space-y-4 w-full">
              <button className=" bg-white rounded-xl px-6 py-4 flex item-center">
                <span>
                  <ArrowDownIcon className="w-5 h-5 ml-1" />
                </span>
                دانلود اپلیکیشن مسافران
              </button>
              <button className=" bg-transparent border-2 border-white rounded-xl px-6 py-4 flex item-center text-white">
                <span>
                  <ArrowDownIcon className="w-5 h-5 ml-1" />
                </span>
                دانلود اپلیکیشن رانندگان
              </button>
            </div>
            <div className="flex flex-col space-y-4 lg:mr-4 w-full  mt-4 lg:mt-0">
              <button className=" bg-white rounded-xl px-6 py-4 flex item-center">
                <span>
                  <UserGroupIcon className="w-5 h-5 ml-2" />
                </span>
                وب اپلیکیشن مسافران
              </button>
              <button className=" bg-transparent border-2 border-white rounded-xl px-6 py-4 flex item-center text-white">
                <span>
                  <UserIcon className="w-5 h-5 ml-2" />
                </span>
                ثبت نام راننده
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* image */}
      <div className="absolute top-52 left-40 hidden xl:block">
        <Image
          src="https://tapsi.ir/images/home/mockup-phone.webp"
          width={485}
          height={742}
          alt="phone-application-pic"
        />
      </div>
    </header>
  );
};
  
export default NavbarBottom;
