import React from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { Spin as Hamburger } from "hamburger-react";
import CSSTransition from "react-transition-group/CSSTransition";
import Link from "next/link";
// --------------------
const Navbar = () => {
  const [showSubmenu, setShowSubmenu] = React.useState(false);
  return (
    <React.Fragment>
      <header className="bg-[#F8F8F8] py-4 md:px-3 w-full fixed top-0 z-20 px-5 xl:px-0 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="w-[102px] h-[22px] cursor-pointer">
            <Link href="/">
              <Image src="/logo.png" alt="tapsi-logo" width={102} height={22} />
            </Link>
          </div>
          {/* submenu icon */}
          <div
            className="md:hidden"
            onClick={() => setShowSubmenu((prevState) => !prevState)}
          >
            <Hamburger />
          </div>
          <nav className="md:flex items-center hidden">
            <ul className="hidden md:flex items-center space-x-3 text-sm">
              <Link href="/contact">
                <li className="pl-2 cursor-pointer navbar__link_hover">
                  پشتیبانی
                </li>
              </Link>
              <Link href="/login">
                <li className="cursor-pointer navbar__link_hover">
                  معرفی راننده
                </li>
              </Link>
              <Link href="/corporate">
                <li className="cursor-pointer navbar__link_hover">
                  خدمات کسب‌وکارها
                </li>
              </Link>
              <li className="cursor-pointer navbar__link_hover">
                فرصت‌های شغلی
              </li>
              <li className="cursor-pointer navbar__link_hover">وبلاگ</li>
            </ul>
            <div className="hidden md:block">
              <Button text="دانلود تپسی" />
            </div>
          </nav>
        </div>
      </header>
      {/* submenu section */}
      <CSSTransition
        in={showSubmenu}
        timeout={500}
        classNames="submenu"
        unmountOnExit
        onEnter={() => setShowSubmenu(true)}
        onExited={() => setShowSubmenu(false)}
      >
        <nav className="w-full md:hidden showSubmenu mt-20 bg-[#F8F8F8] px-4 fixed top-0 z-10">
          <ul className="flex flex-col space-y-4 submenu__animation">
            <Link href="/contact">
              <li className="cursor-pointer navbar__link_hover pt-4">
                پشتیبانی
              </li>
            </Link>
            <Link href="/login">
              <li className="cursor-pointer navbar__link_hover">
                معرفی راننده
              </li>
            </Link>
            <Link href="/corporate">
              <li className="cursor-pointer navbar__link_hover">
                خدمات کسب‌وکارها
              </li>
            </Link>
            <li className="cursor-pointer navbar__link_hover">فرصت‌های شغلی</li>
            <li className="cursor-pointer navbar__link_hover pb-4">وبلاگ</li>
          </ul>
        </nav>
      </CSSTransition>
    </React.Fragment>
  );
};

export default Navbar;
