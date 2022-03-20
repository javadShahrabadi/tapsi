import React from "react";
import Image from "next/image";
import Accordian from "../ui/Accordian";
import Link from "next/link";
// -----------
const Login = () => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <section className="max-h-screen h-screen py-5 overflow-hidden flex flex-col justify-between">
      {/* navbar */}
      <nav className="cursor-pointer w-full flex justify-center border-b border-gray-100 py-5 shadow-sm fixed top-0 z-10">
        <div className="w-[130px] h-[28px]">
          <Link href="/">
            <Image
              src="/LogoBlue.svg"
              width={130}
              height={28}
              alt="tapsi-logo"
            />
          </Link>
        </div>
      </nav>
      <div className="mt-[49px] max-w-3xl mx-auto flex flex-col items-center overflow-y-hidden">
        <div className="w-full lg:w-1/2 bg-[#FAA538] py-4 flex flex-col items-center rounded-sm">
          <h2 className="font-semibold">
            قرعه‌کشی‌های هفتگی معرفی راننده به تپسی
          </h2>
          <button
            type="button"
            className="pt-2 text-white font-bold text-sm py-3 bg-[#2266F4] px-4 mt-2 rounded-md"
          >
            تعداد شانس های من
          </button>
        </div>
        {/* scroll scetion */}
        <div className="mt-5 h-[450px] overflow-y-scroll w-full lg:w-1/2 overflow-x-hidden">
          <div className="flex flex-col items-center lg:block">
            <h3 className="font-bold text-center">
              راننده معرفی کنید و پاداش بگیرید!
            </h3>
            <div className="w-[390px] h-[168px] mt-2 lg:pl-6">
              <Image
                src="https://affiliate.tapsi.ir/assets/f6dea73f.webp"
                width={390}
                height={168}
                alt="reward-img"
                layout="responsive"
              />
            </div>
          </div>
          <div className="px-4 lg:px-0">
            <h3 className="font-bold mt-4">مزایای معرفی راننده به تپسی</h3>
            <div className="flex flex-col space-y-3 mt-6">
              <div className="flex items-center">
                <div className="w-[25px] h-[25px]">
                  <Image
                    src="/wallet.svg"
                    width={25}
                    height={25}
                    alt="wallet-svg"
                  />
                </div>
                <p className="text-gray-500 text-[13px] pr-2">
                  دریافت پاداش بلافاصله پس از فعال شدن راننده
                </p>
              </div>
              {/*  */}
              <div className="flex items-center">
                <div className="w-[25px] h-[25px]">
                  <Image
                    src="/phone.svg"
                    width={25}
                    height={25}
                    alt="phone-svg"
                  />
                </div>
                <p className="text-gray-500 text-[13px] pr-2">
                  معرفی تنها با وارد کردن شماره تلفن راننده
                </p>
              </div>
              {/*  */}
              <div className="flex items-center">
                <div className="w-[25px] h-[25px]">
                  <Image
                    src="/couch.svg"
                    width={25}
                    height={25}
                    alt="couch-svg"
                  />
                </div>
                <p className="text-gray-500 text-[13px] pr-2">کاملا غیرحضوری</p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:px-0">
            <h3 className="font-bold pt-6 text-right ">
              برای ادامه، لطفا شماره موبایل خود را وارد کنید.
            </h3>
            <p className="pt-3 text-gray-400 text-justify text-[13px]">
              بدون داشتن خودرو و تنها با معرفی راننده به تپسی بصورت آنلاین، کسب
              درآمد کنید. پاداش معرفی هر راننده به تپسی یک میلیون ریال است که
              بلافاصله پس از فعال شدن راننده به حساب شما واریز می شود.
            </p>
          </div>
          {/* FaQ */}
          <div className="w-full px-5 lg:px-0">
            <h3 className="font-bold pt-6 text-right ">سؤالات متداول</h3>

            <ul className="pt-4 lg:px-2 flex flex-col space-y-2">
              <Accordian
                title="شرایط معرفی راننده تپسی چیست؟"
                text="هیچ محدودیتی وجود ندارد و شما می‌توانید با هر سن و جنسیت و در هر ساعتی از شبانه‌روز به تپسی راننده معرفی کنید."
              />
              <Accordian
                title="پاداش معرفی راننده تاکسی اینترنتی چقدر است؟"
                text="پاداش معرفی راننده به تپسی یک میلیون ریال به ازای هر راننده است و محدودیتی در تعداد معرفی راننده وجود ندارد. پس هرچه راننده‌های بیش‌تری معرفی کنید، درآمد بیش‌تری خواهید داشت."
              />
              <Accordian
                title="آیا ثبت‌نام راننده‌ی معرفی شده به عهده‌ی معرف است؟"
                text="آیا ثبت‌نام راننده‌ی معرفی شده به عهده‌ی معرف است؟"
              />
            </ul>
          </div>
          <p className="text-sm pt-4 px-4 lg:px-0">
            میخواهید راننده تپسی شوید؟
            <span className="cursor-pointer text-blue-500">
              فرم استخدام
            </span>{" "}
            راننده را پر کنید.
          </p>
        </div>
        {/* ------- */}
      </div>
      {/* form */}
      <form
        onSubmit={formSubmitHandler}
        className="flex items-center mt-5 max-w-3xl mx-auto flex-col space-y-4  w-full px-8"
      >
        <input
          type="text"
          name="phone-number"
          id="phone-number"
          placeholder="شماره همراه خود را وارد کنید"
          className="text-sm px-8 py-4 w-full lg:w-1/2 focus:outline-0 bg-gray-100 border-b border-gray-400 rounded-tr-md rounded-tl-md focus:border-gray-600"
        />
        <button className="text-white bg-[#2266F4] font-bold w-full lg:w-1/2 py-4 rounded-md hover:scale-95 transition-all duration-300 ease-out hover:shadow-lg hover:shadow-blue-100">
          دریافت کد
        </button>
      </form>
    </section>
  );
};

export default Login;
