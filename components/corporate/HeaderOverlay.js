import React from "react";
import Image from "next/image";
// ---------------------------
const HeaderOverlay = () => {
  return (
    <section className="mt-[80px] md:mt-[73px]">
      <div className="bg-banner-work h-[550px] bg-cover bg-no-repeat bg-center lg:bg-left-top relative">
        <div className="flex flex-col items-center">
          <div>
            <h2 className="text-white font-bold text-2xl lg:text-4xl pt-28 lg:pt-40">
              مزایای استفاده از پنل سازمانی تپسی
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center pt-10 lg:pt-36 gap-y-8 text-center">
            <div className="text-white w-1/2 text-md lg:text-xl font-semibold">
              <h4>دسترسی به خودرو در تمام روزهای هفته و ۲۴ ساعت شبانه روز</h4>
            </div>
            <div className="text-white w-1/2 text-md lg:text-xl font-semibold">
              <h4>سهولت در درخواست خودرو بدون نیاز به تماس تلفنی</h4>
            </div>
            <div className="text-white w-1/2 text-md lg:text-xl font-semibold">
              <h4>انجام سفرهای روزانه با قیمت های به صرفه و اقتصادی</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderOverlay;
