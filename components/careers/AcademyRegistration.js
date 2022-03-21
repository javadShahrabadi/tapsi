import React from "react";

const AcademyRegistration = () => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <section className="flex flex-col lg:flex-row items-center justify-evenly px-4 xl:px-0 max-w-7xl mx-auto space-y-6 mb-20">
      <div className="w-full lg:w-1/2">
        <h2 className="font-bold text-3xl">ثبت نام در آکادمی تپسی</h2>
        <p className="pt-8 text-justify">
          ما به صورت دوره‌ای، رویدادهای آموزشی متنوعی را برگزار می‌کنیم، از
          سمینارها و کارگاه‌های تخصصی گرفته تا رویدادهای انتقال تجربه و اشتراک
          دانش. پس اگر مایلین در این رویدادها حضور داشته باشید، اینجا ثبت‌نام
          کنید و حوزه‌های مورد علاقه‌تان را برایمان بنویسید.
        </p>
      </div>
      <form
        onSubmit={formSubmitHandler}
        className="flex flex-col w-3/4 lg:w-1/4  space-y-4"
      >
        <div className="flex flex-col space-y-2 ">
          <label htmlFor="username" className="text-xs text-gray-400">
            نام *
          </label>
          <input
            type="text"
            id="username"
            className="pl-8 pr-4 py-3 bg-gray-200 rounded-md text-sm text-gray-600 focus:outline-0"
          />
        </div>
        <div className="flex flex-col space-y-2 ">
          <label htmlFor="family" className="text-xs text-gray-400">
            نام خانوادگی *
          </label>
          <input
            type="text"
            id="family"
            className="pl-8 pr-4 py-3 bg-gray-200 rounded-md text-sm text-gray-600 focus:outline-0"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-xs text-gray-400">
            ایمیل *
          </label>
          <input
            type="email"
            id="email"
            className="pl-8 pr-4 py-3 bg-gray-200 rounded-md text-sm text-gray-600 focus:outline-0"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-xs text-gray-400">
            شماره تماس *
          </label>
          <input
            type="email"
            id="email"
            className="pl-8 pr-4 py-3 bg-gray-200 rounded-md text-sm text-gray-600 focus:outline-0"
          />
        </div>
        <button className="text-white font-bold w-full py-3 bg-[#ff5722] rounded-md">
          ارسال
        </button>
      </form>
    </section>
  );
};

export default AcademyRegistration;
