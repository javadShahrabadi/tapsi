import React from "react";
import Image from "next/image";
import Button from "../ui/Button";
// --------------
const CorporateServices = () => {
  return (
    <section className="mt-20 max-w-7xl mx-auto px-4 xl:px-0">
      <h2 className="text-xl lg:text-4xl font-semibold text-gray-700 ">
        خدمات تپسی به شرکت ها و سازمان ها
      </h2>
      <div className="flex flex-col-reverse lg:flex-row justify-between my-20">
        <div className="w-full lg:w-1/2">
          <h3 className="text-xl text-gray-700 font-semibold">
            پنل سازمانی تپسی
          </h3>
          <p className="pt-4 text-gray-500 text-justify">
            پنل سازمانی تپسی، یک سامانه تحت وب است که به سادگی امکان درخواست
            خودرو برای تعداد نامحدود از کارکنان، نظارت بر سفرها، دریافت صورتحساب
            خودکار و گزارش‌گیری آنلاین را برای شرکت‌ها و سازمان‌ها فراهم آورده
            است.
          </p>
          <ul className="flex flex-col space-y-6 mt-10 lg:mt-20 mb-5">
            <li className="flex items-center">
              <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-[#FF5722]" />
              <p className="pr-4">قابلیت درخواست چندین خودرو به صورت همزمان</p>
            </li>
            <li className="flex items-center">
              <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-[#FF5722]" />
              <p className="pr-4">امکان انتخاب چند مقصد برای یک سفر</p>
            </li>
            <li className="flex items-center">
              <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-[#FF5722]" />
              <p className="pr-4">امکان استفاده از تمامی سرویس های تپسی</p>
            </li>
            <li className="flex items-center">
              <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-[#FF5722]" />
              <p className="pr-4">قابلیت مشاهده و دریافت گزارش سفرها</p>
            </li>
          </ul>
          <div className="flex flex-col lg:flex-row lg:items-center pt-8 space-y-2 lg:space-y-0">
            <button className="text-white font-semibold bg-[#FF5722] py-2 px-8 rounded-md hover:scale-95 transition-all duration-300 ease-out w-full lg:w-1/3">
              ثبت نام در پنل
            </button>
            <button className="text-white font-semibold bg-[#FF5722] py-2 px-8 rounded-md hover:scale-95 transition-all duration-300 ease-out w-full lg:w-1/3 lg:mr-2">
              ورود به پنل سازمانی
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 -mt-20 lg:mt-0">
          <Image
            src="https://tapsi.ir/images/corporate/img1.webp"
            width={360}
            height={360}
            alt="panel-sazmani-pic"
            layout="responsive"
          />
        </div>
      </div>

      {/* ----- */}
      <div className="flex flex-col-reverse lg:flex-row-reverse justify-between mb-20">
        <div className="w-full lg:w-1/2">
          <h2 className="py-4 text-xl lg:text-3xl text-gray-700 font-semibold">
            کدهای سفر سازمانی تپسی
          </h2>
          <h3 className="text-xl text-gray-700 font-semibold pt-2">
            کد اعتبار
          </h3>
          <p className="pt-4 text-gray-500 text-justify">
            کسب و کارها و سازمان ها می‌توانند به تعداد و مبلغ مورد نظرشان، کد
            اعتبار تهیه کرده و در اختیار اشخاص مدنظر، پرسنل و یا مشتریان خود
            قرار بدهند. با وارد کردن این کدها در قسمت "هدیه و تخفیف" در اپلیکیشن
            تپسی، اعتبار کاربر به میزان مبلغ کد افزایش می‌یابد و می‌تواند از محل
            آن، از سرویس‌های مختلف تپسی استفاده کند.
          </p>

          <button className="text-white font-semibold bg-[#FF5722] py-2 px-8 rounded-md hover:scale-95 transition-all duration-300 ease-out w-full lg:w-1/3 my-4">
            خرید کد اعتبار
          </button>

          <h3 className="text-xl text-gray-700 font-semibold pt-2">کد تخفیف</h3>
          <p className="pt-4 text-gray-500 text-justify">
            این کدها قابلیت سفارشی‌سازی دارند و می‌توانند به تعداد مورد نظر در
            اختیار کسب و کارها قرار بگیرند. از مهم‌ترین ویژگی‌های این راهکار،
            می‌توان به موارد زیر اشاره کرد:
          </p>
          <ul className="flex flex-col space-y-6 mt-10 lg:mt-20 mb-5">
            <li className="flex items-center">
              <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-[#FF5722]" />
              <p className="pr-4">
                قابلیت سفارشی‌سازی بر اساس مبدا، مقصد، زمان و تاریخ
              </p>
            </li>
            <li className="flex items-center">
              <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-[#FF5722]" />
              <p className="pr-4">امکان تعیین درصد و سقف مبلغ تخفیف</p>
            </li>
            <li className="flex items-center">
              <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-[#FF5722]" />
              <p className="pr-4">امکان اتصال به کیف پول</p>
            </li>
            <li className="flex items-center">
              <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-[#FF5722]" />
              <p className="pr-4">
                قابلیت دریافت گزارش سفرها در فواصل زمانی دلخواه
              </p>
            </li>
          </ul>
          <p className="pt-4 text-gray-500 lg:text-justify text-center ">
            برای خرید کد تخفیف درخواست خود را به{" "}
            <span className="text-blue-500 cursor-pointer">
              corporate@tapsi.cab
            </span>{" "}
            ارسال کرده یا با شماره{" "}
            <span className="text-blue-500 cursor-pointer">1630</span> داخلی4 در
            تماس باشید.
          </p>
        </div>
        <div className="w-full lg:w-1/2 -mt-20 lg:mt-0">
          <Image
            src="https://tapsi.ir/images/corporate/img2.webp"
            width={360}
            height={360}
            alt="panel-sazmani-pic"
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
};

export default CorporateServices;
