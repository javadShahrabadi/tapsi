import React from "react";
import Image from "next/image";
// ----------
const NewsItem = (props) => {
  return (
    <div className="cursor-pointer px-4 xl:px-0">
      <div className="w-full lg:w-[398px] h-[231px]">
        <Image
          src={props.image}
          width={750}
          height={430}
          alt={props.title}
          className="rounded-sm"
        />
      </div>
      <h3 className="pt-8 lg:pt-4 font-bold text-xl txet-gray-600 pb-1">
        تخفیف ویژه دیجی‌کالا جت برای کاربران تپسی
      </h3>
      <small className="text-gray-500">{props.date}</small>
      <p className="text-sm pt-4 w-full lg:w-4/5 text-justify">
        {props.description}
      </p>
    </div>
  );
};

export default NewsItem;
