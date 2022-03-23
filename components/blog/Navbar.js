import React, { useState } from "react";
import Image from "next/image";
import DropDown from "../ui/DropDown";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { FaSearch } from "react-icons/fa";
import Hamburger from "hamburger-react";
import Link from "next/link";
// --------------
const Navbar = () => {
  const [drivershowDrop, setDriverShowDrop] = useState(false);
  const [moreshowDrop, setMoreShowDrop] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);

  const submenuHandler = () => {
    setShowSubmenu((prevState) => !prevState);
  };
  return (
    <React.Fragment>
      <header className="border-b px-4 xl:px-0 shadow-md fixed top-0 w-full z-40 bg-white">
        <nav className="max-w-7xl mx-auto  items-center justify-between py-1 flex ">
          <Link href="/">
            <div className="w-[180px] h-[58px] cursor-pointer">
              <Image
                src="https://blog.tapsi.ir/wp-content/uploads/2021/07/logo-fa-blog.png"
                width={897}
                height={291}
                alt="blog-tapsi-logo"
              />
            </div>
          </Link>
          <div className="lg:hidden" onClick={submenuHandler}>
            <Hamburger size={30} />
          </div>
          <ul className="items-center space-x-4 text-[15px] hidden lg:flex">
            <li
              className="relative flex items-center pl-4 cursor-pointer"
              onMouseEnter={() => setDriverShowDrop(true)}
              onMouseLeave={() => setDriverShowDrop(false)}
            >
              <DropDown
                text="رانندگان"
                list={[
                  { id: "l-1", title: "باشگاه رانندگان" },
                  { id: "l-2", title: "دانلود اپ رانندگان" },
                  { id: "l-3", title: "ثبت نام راننده" },
                ]}
                showDrop={drivershowDrop}
              />
              <span>
                <ChevronDownIcon className="w-4 h-4 -mr-2" />
              </span>
            </li>
            <li className="cursor-pointer">سرویس ها</li>
            <li className="cursor-pointer">اخبار تپسی</li>
            <li className="cursor-pointer">کمپین ها</li>
            <li className="cursor-pointer">مسئولیت اجتماعی</li>
            <li className="cursor-pointer">سلامت و امنیت</li>
            <li className="cursor-pointer">باشگاه مشتریان</li>
            <li
              className="relative flex items-center cursor-pointer"
              onMouseEnter={() => setMoreShowDrop(true)}
              onMouseLeave={() => setMoreShowDrop(false)}
            >
              <DropDown
                text="بیشتر"
                list={[
                  { id: "l-1", title: "وب سایت تپسی" },
                  { id: "l-2", title: "دانلود تپسی" },
                ]}
                showDrop={moreshowDrop}
              />
              <span>
                <ChevronDownIcon className="w-4 h-4 -mr-3" />
              </span>
            </li>
            <li></li>
          </ul>
          <span className="hidden lg:block">
            <FaSearch className="w-4 h-4 text-gray-300 cursor-pointer" />
          </span>
        </nav>
      </header>
      {showSubmenu && (
        <nav className="lg:hidden mt-[66px] bg-gray-100 px-6 lg:px-0 py-4 fixed top-0 z-20 w-full">
          <ul className="flex flex-col space-y-4 text-[15px]">
            <li className="cursor-pointer hover:text-blue-600 text-gray-600 font-semibold transition-all duration-300 ease-out border-b pb-5">
              رانندگان
            </li>
            <li className="cursor-pointer hover:text-blue-600 text-gray-600 font-semibold transition-all duration-300 ease-out border-b pb-5">
              سرویس ها
            </li>
            <li className="cursor-pointer hover:text-blue-600 text-gray-600 font-semibold transition-all duration-300 ease-out border-b pb-5">
              اخبار تپسی
            </li>
            <li className="cursor-pointer hover:text-blue-600 text-gray-600 font-semibold transition-all duration-300 ease-out border-b pb-5">
              کمپین ها
            </li>
            <li className="cursor-pointer hover:text-blue-600 text-gray-600 font-semibold transition-all duration-300 ease-out border-b pb-5">
              مسئولیت اجتماعی
            </li>
            <li className="cursor-pointer hover:text-blue-600 text-gray-600 font-semibold transition-all duration-300 ease-out border-b pb-5">
              سلامت و امنیت
            </li>
            <li className="cursor-pointer hover:text-blue-600 text-gray-600 font-semibold transition-all duration-300 ease-out border-b pb-5">
              باشگاه مشتریان
            </li>
            <li className="cursor-pointer hover:text-blue-600 text-gray-600 font-semibold transition-all duration-300 ease-out">
              بیشتر
            </li>
          </ul>
        </nav>
      )}
    </React.Fragment>
  );
};

export default Navbar;
