import React from "react";
import Image from "next/image";
// -----------
const MoreInfo = () => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <section className="max-w-7xl mx-auto px-4 xl:px-0 pt-5 pb-10">
      <h2 className="text-3xl text-gray-700 font-bold">دریافت اطلاعات بیشتر</h2>
      <div className="flex flex-col lg:flex-row items-start pt-6 ">
        <div className="w-full lg:w-1/2 flex flex-col space-y-4 shrink-0">
          <p className="text-gray-600">
            برای دریافت اطلاعات بیشتر، مشخصات خود و سازمان خود را در این قسمت
            وارد کنید. همکاران ما در اولین زمان با شما تماس خواهند گرفت.
          </p>
          <p className="text-gray-600 pt-10">
            همچنین شما می‌توانید از راه‌های زیر با ما در ارتباط باشید:
          </p>
          <div className="flex flex-col space-y-3 pt-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Image
                  src="/telephone.svg"
                  width={30}
                  height={30}
                  alt="telephone-svg"
                />
                <p className="tet-sm text-gray-600 pr-2">شماره تماس:</p>
              </div>
              <p className="text-sm text-gray-600 lg:pl-8 ">۴۱۶۳۰۳۳۳ - ۰۲۱</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Image
                  src="/email.svg"
                  width={30}
                  height={30}
                  alt="telephone-svg"
                />
                <p className="tet-sm text-gray-600 pr-2">پست الکترونیک:</p>
              </div>
              <p className="text-sm text-gray-600 lg:pl-8 ">
                corporate@tapsi.cab
              </p>
            </div>
          </div>
        </div>
        {/* divider */}
        <div className="border-l border-gray-200 " />
        {/* divider */}
        <div className="w-full lg:w-1/2 lg:mr-20 mt-10 lg:mt-0">
          <form
            onSubmit={formSubmitHandler}
            className="flex flex-col space-y-4 w-full lg:w-1/2"
          >
            <div className="flex flex-col space-y-2">
              <label htmlFor="username" className="text-gray-400">
                نام و نام خانوادگی:
              </label>
              <input
                type="text"
                id="username"
                className="text-sm bg-gray-100 focus:outline-0 rounded-md py-3 px-6 w-full  text-gray-500"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="company_name" className="text-gray-400">
                نام سازمان:
              </label>
              <input
                type="text"
                id="company_name"
                className="text-sm bg-gray-100 focus:outline-0 rounded-md py-3 px-6 w-full  text-gray-500"
              />
            </div>
            <div className="flex flex-col space-y-2 pb-4 lg:pb-0">
              <label htmlFor="phone_number" className="text-gray-400">
                شماره تماس:
              </label>
              <input
                type="text"
                id="phone_number"
                className="text-sm bg-gray-100 focus:outline-0 rounded-md py-3 px-6 w-full  text-gray-500"
              />
            </div>
            <button className="text-white font-semibold py-2 px-6 rounded-md bg-[#FD6131] hover:scale-95 transition-all duration-300 ease-out  w-full lg:w-2/3">
              ارسال مشخصات
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MoreInfo;
