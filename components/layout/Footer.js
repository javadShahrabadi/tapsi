import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";
import FooterImgCart from "../ui/FooterImgCart";
// -------------------

const Footer = () => {
  return (
    <footer className="bg-black p-8 lg:p-16 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-6 gap-x-4 gap-y-8">
        <div className="flex flex-col ">
          <div>
            <Image
              src="https://tapsi.ir/images/tapsi-logo-white.svg"
              alt="tapsi-logo"
              width={140}
              height={30}
            />
            <h3 className="text-xs text-white pt-4">
              اپلیکیشن درخواست خودرو و پیک
            </h3>
            <p className="pt-2 text-gray-400 text-xs">
              تمام حقوق مادی و معنوی این وبسایت متعلق به تپسی است.
            </p>
          </div>
          <div className="mt-10">
            <h3 className="text-gray-400 text-xs">تپسی در شبکه‌های اجتماعی</h3>
            <div className="flex flex-row items-center mt-3">
              <span className="cursor-pointer">
                <FaFacebookF className="text-gray-400 w-5 h-5 hover__white" />
              </span>
              <span className="pr-2 cursor-pointer">
                <FaInstagram className="text-gray-400 w-6 h-6 hover__white" />
              </span>
              <span className="pr-2 cursor-pointer">
                <FaTwitter className="text-gray-400 w-6 h-6 hover__white" />
              </span>
              <span className="pr-2 cursor-pointer">
                <FaLinkedin className="text-gray-400 w-6 h-6 hover__white" />
              </span>
              <span className="pr-2 cursor-pointer">
                <FaTelegram className="text-gray-400 w-6 h-6 hover__white" />
              </span>
            </div>
          </div>
        </div>
        {/* --------- */}
        <div>
          <h3 className="text-white font-bold text-xl">تپسی</h3>
          <div className="pt-4 flex flex-col space-y-3 text-gray-400 text-sm">
            <h4 className="cursor-pointer hover__white">وبلاگ تپسی</h4>
            <h4 className="cursor-pointer hover__white">فرصت شغلی</h4>
            <h4 className="cursor-pointer hover__white">تماس با ما</h4>
            <h4 className="cursor-pointer hover__white">لوگو و هویت سازمانی</h4>
            <h4 className="cursor-pointer hover__white">
              معرفی راننده به تپسی
            </h4>
          </div>
        </div>
        {/* --------- */}
        <div>
          <h3 className="text-white font-bold text-xl">مسافران</h3>
          <div className="pt-4 flex flex-col space-y-3 text-gray-400 text-sm">
            <h4 className="cursor-pointer hover__white">دانلود اپ مسافر</h4>
            <h4 className="cursor-pointer hover__white">نسخه وب تپسی</h4>
            <h4 className="cursor-pointer hover__white">
              پرسش‌های متداول مسافران
            </h4>
            <h4 className="cursor-pointer hover__white">
              شرایط و قوانین مسافران
            </h4>
            <h4 className="cursor-pointer hover__white">باشگاه مشتریان</h4>
          </div>
        </div>
        {/* --------- */}
        <div>
          <h3 className="text-white font-bold text-xl">رانندگان</h3>
          <div className="pt-4 flex flex-col space-y-3 text-gray-400 text-sm">
            <h4 className="cursor-pointer hover__white">دانلود اپ سفیر</h4>
            <h4 className="cursor-pointer hover__white">
              ثبت نام راننده تاکسی اینترنتی
            </h4>
            <h4 className="cursor-pointer hover__white">
              پرسش‌های متداول سفیران
            </h4>
            <h4 className="cursor-pointer hover__white">
              شرایط و قوانین سفیران
            </h4>
            <h4 className="cursor-pointer hover__white">باشگاه سفیران</h4>
          </div>
        </div>
        {/* --------- */}
        <div>
          <h3 className="text-white font-bold text-xl">کسب و کارها</h3>
          <div className="pt-4 flex flex-col space-y-3 text-gray-400 text-sm">
            <h4 className="cursor-pointer hover__white">پنل سازمانی تپسی</h4>
            <h4 className="cursor-pointer hover__white">
              خرید کد اعتبار و تخفیف
            </h4>
            <h4 className="cursor-pointer hover__white">دریافت API</h4>
          </div>
        </div>
        {/* --------- */}
        <div className="flex items-center">
          <FooterImgCart
            image="https://tapsi.ir/images/etehadiye.png"
            alt="kasbokar-majazi"
          />
          <FooterImgCart image="/ershad.png" alt="vezarat-ershad" />
        </div>
        {/* --------- */}
      </div>
    </footer>
  );
};

export default Footer;
