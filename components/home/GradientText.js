import React from "react";
import styles from "./GradientText.module.css";
const GradientText = () => {
  return (
    <ul
      className={`${styles.gradeint_color} w-full h-[200px] opacity-90 my-14 py-4 flex flex-col space-y-2 lg:flex-row items-center px-20 lg:px-40 justify-between text-white font-bold text-md lg:text-xl`}
    >
      <li>بسته امنیت سفر</li>
      <span className="lg:border-2 lg:border-l-white lg:h-[60px] rounded-xl" />
      <li>درخواست تلفنی</li>
      <span className="lg:border-2 lg:border-l-white lg:h-[60px] rounded-xl" />
      <li>دسترس‌پذیری برای توان‌یابان</li>
      <span className="lg:border-2 lg:border-l-white lg:h-[60px] rounded-xl" />
      <li>امکانات هوشمند</li>
    </ul>
  );
};

export default GradientText;
