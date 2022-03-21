import React from "react";

const JobTable = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 xl:px-0 my-20">
      <h2 className="text-3xl font-bold text-center">فرصت‌های شغلی</h2>
      <p className="pt-8 text-center">
        <span className="bg-[#FF5722] bg-opacity-20 px-2 py-1 rounded-full text-[#FF5722] font-bold">
          ۳۷
        </span>
        <span className="font-bold px-2">فرصت شغلی در</span>
        <span className="bg-[#FF5722] bg-opacity-20 px-2 py-1 rounded-full text-[#FF5722] font-bold">
          ۶ شهر
        </span>
        <span className="font-bold px-2">ایران</span>
      </p>
      <div className="flex justify-center pt-10">
        <table className="text-sm table-fixed text-center text-[#FF5722] w-full lg:w-1/2 font-bold">
          <tr className="border-b border-gray-200">
            <td className="border-l border-gray-200 py-4 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-out">
              عملیات
            </td>
            <td className="border-l border-gray-200 py-4 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-out">
              منابع انسانی
            </td>
            <td className="py-4 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-out">
              مارکتینگ
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="border-l border-gray-200 py-4 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-out">
              محصول
            </td>
            <td className="border-l border-gray-200 py-4 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-out">
              فنی
            </td>
            <td className="py-4 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-out">
              حقوقی
            </td>
          </tr>
          <tr>
            <td className="border-l border-gray-200 py-4 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-out">
              هوش مصنوعی
            </td>
            <td className="border-l border-gray-200 py-4 cursor-pointer"></td>
            <td></td>
          </tr>
        </table>
      </div>
      <div className="mt-10 flex flex-col space-y-4 md:items-center justify-center w-full">
        <button className="text-white px-8 py-3 font-bold rounded-md bg-[#FF5722] hover:scale-95 transition-all duration-300 ease-out">
          همه فرصت های شغلی
        </button>
        <button className="border border-gray-200 px-12 py-3 font-bold rounded-md text-[#FF5722] hover:scale-95 transition-all duration-300 ease-out">
          کارآموزی در تپسی
        </button>
      </div>
    </section>
  );
};

export default JobTable;
