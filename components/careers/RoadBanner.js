import React from "react";

const RoadBanner = () => {
  return (
    <section className="bg-road-pic h-[500px]  lg:h-[730px] mt-[80px] md:mt-[73px] bg-top-r lg:bg-cover relative">
      <div className="absolute lg:top-32 lg:right-40 text-center lg:text-right px-4 lg:px-0">
        <h2 className="text-white font-bold text-3xl lg:text-4xl mt-20 lg:mt-16">
          از خودت سبقت بگیر!
        </h2>
        <p className="mt-20 lg:mt-60 xl:mt-72 text-justify w-full lg:w-1/2 text-white ">
          اگر مشتاق یادگیری هستید، دوست دارید رشد کنید و از خودتان هم فراتر
          بروید، اینجا فرصت برای سبقت گرفتن از خودتان فراهم است، چرا که سرعت رشد
          و یادگیری در تپسی بسیار بالاست. یادگیری مفیدی که از حل کردن چالش‌های
          جذاب در کنار یک تیم متخصص و حرفه‌ای حاصل می‌شود.
        </p>
        <button className="text-[#FD6131] font-bold bg-white py-3 px-10 rounded-md hover:scale-95 transition-all duration-300 ease-out mt-8 w-full lg:px-0 lg:w-1/5">
          پیوستن به تپسی
        </button>
      </div>
    </section>
  );
};

export default RoadBanner;
