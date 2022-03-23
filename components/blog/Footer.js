import React from "react";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillFolderOpen,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="bg-black lg:py-10 lg:px-20 px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col space-y-8">
          <h2 className="text-white font-semibold text-center text-xl">
            نوشته‌های تازه
          </h2>
          <p className=" text-white text-sm text-center">
            تخفیف ویژه دندانپزشکی کرج در باشگاه سفیران تپسی تخفیف دندانپزشکی در
            کرج ویژه باشگاه سفیران تپسی تخفیف ویژه دیجی‌کالا جت برای کاربران
            تپسی
          </p>
          <h2 className="text-white font-semibold text-center text-xl">
            شبکه‌های اجتماعی
          </h2>
          <ul className="flex justify-center space-x-2">
            <li className="pl-2">
              <AiOutlineTwitter className="w-6 h-6 text-gray-300 cursor-pointer hover:text-white transition-all duration-200 ease-out" />
            </li>
            <li>
              <AiOutlineInstagram className="w-6 h-6 text-gray-300 cursor-pointer hover:text-white transition-all duration-200 ease-out" />
            </li>
            <li>
              <AiFillLinkedin className="w-6 h-6 text-gray-300 cursor-pointer hover:text-white transition-all duration-200 ease-out" />
            </li>
            <li>
              <AiFillFacebook className="w-6 h-6 text-gray-300 cursor-pointer hover:text-white transition-all duration-200 ease-out" />
            </li>
          </ul>
        </div>

        <div>
          <div className="flex-col space-y-8 hidden lg:flex">
            <h2 className="text-white font-semibold text-center text-xl ">
              برچسب‌ها
            </h2>
            <ul className="flex flex-col space-y-2 justify-center">
              <div className="flex item-center space-x-1">
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out ml-1">
                  اعتبار رانندگان
                </li>
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out">
                  اهدای خون
                </li>
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out">
                  باتری خودرو
                </li>
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out">
                  بیمه خودرو
                </li>
              </div>
              <div className="flex items-center space-x-1">
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out ml-1">
                  بیمه رانندگان
                </li>
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out ">
                  تخفیف تپسی
                </li>
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out">
                  تخفیف رانندگان
                </li>
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out">
                  تخفیف موبایل
                </li>
              </div>
              {/* -- */}
              <div className="flex items-center space-x-1">
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out ml-1">
                  تعمیر خودرو
                </li>
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out ">
                  تپسی ارومیه
                </li>
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out">
                  تپسی اصفهان
                </li>
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out">
                  تپسی اهواز
                </li>
              </div>
              {/* -- */}
              <div className="flex items-center space-x-1">
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out ml-1">
                  تپسی بابل
                </li>
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out ">
                  تپسی تهران
                </li>
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out">
                  تپسی رشت
                </li>
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out">
                  تپسی ساری
                </li>
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out">
                  تپسی شیراز
                </li>
              </div>
              {/* -- */}
              <div className="flex items-center space-x-1">
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out ml-1">
                  تپسی قائم شهر
                </li>
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out ">
                  تپسی قم
                </li>
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out">
                  تپسی لاین
                </li>
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out">
                  تپسی مشهد
                </li>
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out">
                  تپسی کرج
                </li>
              </div>
              {/* -- */}
              <div className="flex items-center space-x-1">
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out ml-1">
                  تپسی کرمان
                </li>
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out ">
                  ثبت نام
                </li>
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out">
                  جایزه
                </li>
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out">
                  خرید اعتباری
                </li>
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out">
                  درآمد رانندگان
                </li>
              </div>
              {/* -- */}
              <div className="flex items-center space-x-1">
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out ml-1">
                  دندانپزشکی
                </li>
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out ">
                  دندان پزشکی
                </li>
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out">
                  راهکار خودرو
                </li>
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out">
                  روغن موتور
                </li>
              </div>
              {/* -- */}
              <div className="flex items-center space-x-1">
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out ml-1">
                  سرویس خودرو
                </li>
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out ">
                  سفر رایگان تپسی
                </li>
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out">
                  سهمیه بنزین
                </li>
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out">
                  قرعه کشی
                </li>
              </div>
              {/* -- */}
              <div className="flex items-center space-x-1">
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out ml-1">
                  لاستیک خودرو
                </li>
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out ">
                  لنت ترمز
                </li>
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out">
                  لوازم یدکی
                </li>
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out">
                  موبایل
                </li>
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out">
                  نوروز
                </li>
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out">
                  پویش
                </li>
              </div>
              {/* -- */}
              <div className="flex items-center space-x-1">
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out ml-1">
                  پیک موتوری
                </li>
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out ">
                  کارواش
                </li>
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out">
                  کرونا
                </li>
                <li className="bg-gray-600 text-white font-bold text-xs rounded-md py-1 px-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 ease-out">
                  گوشی همراه
                </li>
              </div>
            </ul>
          </div>
        </div>
        {/* -------------- */}
        <div className="flex flex-col space-y-8">
          <h2 className="text-white font-semibold text-center text-xl">
            دسته ها
          </h2>
          <div className="flex flex-col space-y-2 ">
            <div className="flex items-center cursor-pointer hover:text-white transition-all duration-200 ease-out text-gray-300">
              <span className="pl-2">
                <AiFillFolderOpen className=" w-5 h-5" />
              </span>
              <p className="text-xs ">آموزش رانندگان</p>
            </div>
            <div className="flex items-center cursor-pointer hover:text-white transition-all duration-200 ease-out text-gray-300">
              <span className="pl-2">
                <AiFillFolderOpen className=" w-5 h-5" />
              </span>
              <p className="text-xs ">اخبار تپسی</p>
            </div>
            <div className="flex items-center cursor-pointer hover:text-white transition-all duration-200 ease-out text-gray-300">
              <span className="pl-2">
                <AiFillFolderOpen className=" w-5 h-5" />
              </span>
              <p className="text-xs ">باشگاه رانندگان</p>
            </div>
            <div className="flex items-center cursor-pointer hover:text-white transition-all duration-200 ease-out text-gray-300">
              <span className="pl-2">
                <AiFillFolderOpen className=" w-5 h-5" />
              </span>
              <p className="text-xs ">باشگاه مشتریان</p>
            </div>
            <div className="flex items-center cursor-pointer hover:text-white transition-all duration-200 ease-out text-gray-300">
              <span className="pl-2">
                <AiFillFolderOpen className=" w-5 h-5" />
              </span>
              <p className="text-xs ">در تپسی بخوانید</p>
            </div>{" "}
            <div className="flex items-center cursor-pointer hover:text-white transition-all duration-200 ease-out text-gray-300 ">
              <span className="pl-2">
                <AiFillFolderOpen className=" w-5 h-5" />
              </span>
              <p className="text-xs ">رانندگان</p>
            </div>
            <div className="flex items-center cursor-pointer hover:text-white transition-all duration-200 ease-out text-gray-300">
              <span className="pl-2">
                <AiFillFolderOpen className=" w-5 h-5" />
              </span>
              <p className="text-xs ">سایر</p>
            </div>
            <div className="flex items-center cursor-pointer hover:text-white transition-all duration-200 ease-out text-gray-300">
              <span className="pl-2">
                <AiFillFolderOpen className=" w-5 h-5" />
              </span>
              <p className="text-xs ">سرویس‌ها</p>
            </div>
            <div className="flex items-center cursor-pointer hover:text-white transition-all duration-200 ease-out text-gray-300">
              <span className="pl-2">
                <AiFillFolderOpen className=" w-5 h-5" />
              </span>
              <p className="text-xs ">سلامت و امنیت</p>
            </div>
            <div className="flex items-center cursor-pointer hover:text-white transition-all duration-200 ease-out text-gray-300">
              <span className="pl-2">
                <AiFillFolderOpen className=" w-5 h-5" />
              </span>
              <p className="text-xs ">کمپین‌ها</p>
            </div>
            <div className="flex items-center cursor-pointer hover:text-white transition-all duration-200 ease-out text-gray-300">
              <span className="pl-2">
                <AiFillFolderOpen className=" w-5 h-5" />
              </span>
              <p className="text-xs ">سلامت و امنیت</p>
            </div>
            <div className="flex items-center cursor-pointer hover:text-white transition-all duration-200 ease-out text-gray-300">
              <span className="pl-2">
                <AiFillFolderOpen className=" w-5 h-5" />
              </span>
              <p className="text-xs ">مسئولیت اجتماعی</p>
            </div>
            <div className="flex items-center cursor-pointer hover:text-white transition-all duration-200 ease-out text-gray-300">
              <span className="pl-2">
                <AiFillFolderOpen className=" w-5 h-5" />
              </span>
              <p className="text-xs ">مسافران</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
