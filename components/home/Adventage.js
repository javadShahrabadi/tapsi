import React from "react";
import Image from "next/image";

// -------------------

const Adventage = () => {
  return (
    <section className="max-w-7xl mx-auto pt-5">
      <div className="flex flex-col lg:flex-row justify-between px-4 xl:px-0">
        <div className="w-full lg:w-1/2">
          <h2 className="text-xl lg:text-2xl lg:text-3xl font-bold ">
            مزایای تپسی برای رانندگان تاکسی اینترنتی
          </h2>
          <p className="text-md text-gray-600 text-justify pt-6 w-full">
            رانندگان (سفیران) به‌عنوان همکاران تپسی، جایگاه ویژه‌ای برای شرکت
            دارند. به همین‌دلیل مزایای مختلفی برای آنها در نظر گرفته شده است.
          </p>
          <h4 className="text-lg lg:text-xl font-semibold text-justify pt-8">
            کسب درآمد روزانه، پایدار و بدون محدودیت
          </h4>
          <ul className="pt-4 flex flex-col space-y-2 text-gray-600">
            <li>۱. امکان تسویه‌ی اعتبار در هر ساعت از شبانه‌روز</li>
            <li>
              ۲. طرح‌های تشویقی، ماموریت‌ها‌، پاداش و اعطای وام‌های قرض‌الحسنه
              به‌طور دوره‌ای
            </li>
            <li>
              ۳. نمایش مکان‌های پردرخواست در اپلیکیشن و دریافت سفرهای طلایی
            </li>
          </ul>
        </div>
        <div className="mt-8 lg:mt-0">
          <Image
            src="https://tapsi.ir/images/home/driver.webp"
            width={480}
            height={314}
            className="rounded-2xl"
          />
        </div>
      </div>
      {/* info section bottom of image */}
      <div className="flex flex-col lg:flex-row items-start mt-8 px-4 xl:px-0">
        <div>
          <h4 className="text-xl font-semibold text-justify lg:pt-4">
            تضمین امنیت و پشتیبانی رانندگان
          </h4>
          <ul className="pt-4 flex flex-col space-y-2 text-gray-600">
            <li>۱. پشتیبانی ۲۴ ساعته</li>
            <li>
              ۲. امکانات امنیت سفر شامل تماس اضطراری با واحد امنیت و پشتیبانی ۲۴
              ساعته تیم امنیت
            </li>
          </ul>

          <h4 className="text-xl font-semibold text-justify pt-4">
            واریز سهمیه بنزین ویژه رانندگان تپسی
          </h4>
          <ul className="pt-4 flex flex-col space-y-2 text-gray-600">
            <li>۱. نمایش میزان پیمایش ماهانه درون اپلیکیشن</li>
            <li>۲. محاسبه‌ی مسافت طی شده تا مسافر در پیمایش</li>
          </ul>
        </div>
        <div className="lg:mr-20">
          <h4 className="text-xl font-semibold text-justify pt-4">
            واریز سهمیه بنزین ویژه رانندگان تپسی
          </h4>
          <ul className="pt-4 flex flex-col space-y-2 text-gray-600">
            <li>۱. نمایش میزان پیمایش ماهانه درون اپلیکیشن</li>
            <li>۲. محاسبه‌ی مسافت طی شده تا مسافر در پیمایش</li>
          </ul>
          <h4 className="text-xl font-semibold text-justify pt-8">
            استفاده از مزایای باشگاه رانندگان تپسی
          </h4>
          <ul className="pt-4 flex flex-col space-y-2 text-gray-600">
            <li>
              ۱. تخفیف روی خدمات خودرو مانند بیمه، سرویس‌های دوره‌ای، خرید
              لاستیک و ...
            </li>
            <li>
              ۲. تخفیف روی خدمات رفاهی مانند وام قرض‌الحسنه، خدمات درمانی، خرید
              اقساطی و ... ثبت نام راننده تاکس
            </li>
          </ul>
          <div className="mt-5">
            <button className="text-white font-semibold rounded-md py-3 px-10 bg-[#1974DF] hover:scale-95 transition-all duration-200 ease-in w-full mb-2 lg:w-2/5 text-sm">
              ثبت نام راننده تاکسی آنلاین
            </button>
            <button className="text-white font-semibold rounded-md py-3 px-6 bg-[#1974DF] lg:mr-2 hover:scale-95 transition-all duration-200 ease-in w-full lg:w-2/5 text-sm">
              دانلود برنامه تپسی راننده
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Adventage;
