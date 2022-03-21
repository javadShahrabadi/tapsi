import React from "react";
import Image from "next/image";
// ------------
const UniConnection = () => {
  return (
    <section className="my-20 max-w-7xl mx-auto px-4 xl:px-0 border border-l-0 border-r-0 py-20">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full md:w-[569px] h-[290px] shrink-0">
          <Image
            src="https://careers.tapsi.ir/assets/de8af8ec.webp"
            width={2042}
            height={1042}
          />
        </div>
        <div className="flex flex-col justify-between lg:pr-16">
          <h2 className="font-bold text-3xl pt-4 lg:pt-0">ارتباط با دانشگاه</h2>
          <p className="pt-6 text-justify">
            ما در تپسی، مشتاق ارتباط با دانشگاه‌هاییم چرا که فکر می‌کنیم این
            ارتباط، برای هر دو طرف ارزش‌آفرین و اثرگذار است. پس تلاش می‌کنیم با
            برگزاری کارگاه‌ها، جلسات انتقال تجربه و تورهای بازدید، فرصت آشنایی
            با صنعت و انتقال تجربه را برای دانشجویان علاقه‌مند فراهم کنیم.
            همچنین، مسیر حمایت از پایان‌نامه‌ها و پذیرش کارآموز نیز در تپسی
            فراهم است.
          </p>
          <button className="text-white font-bold rounded-md bg-[#F15A22] px-6 py-3 w-full md:w-1/3 mt-10 lg:mt-0">
            ارتباط با تپسی
          </button>
        </div>
      </div>
    </section>
  );
};

export default UniConnection;
