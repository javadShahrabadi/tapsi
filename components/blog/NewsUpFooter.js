import React from "react";
import ThumbnailNews from "@/components/blog/ThumbnailNews";

// --------------
const NewsUpFooter = () => {
  return (
    <section className="my-10 max-w-7xl mx-auto px-4 xl:px-0 border-t">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 mt-14">
        <ul className="flex flex-col space-y-2">
          <h3 className="text-xl font-semibold pb-8 text-center text-gray-600">
            باشگاه مشتریان
          </h3>
          <ThumbnailNews
            image="https://blog.tapsi.ir/wp-content/uploads/2021/09/stars-loyalty_blog-86x64.jpg"
            title="با ستاره‌هایتان در باشگاه مشتریان، فرصت تحصیل به کودکان کار…"
            date="۱۶ شهریور ۱۴۰۰"
          />
          <ThumbnailNews
            image="https://blog.tapsi.ir/wp-content/uploads/2021/08/boardgame-1-86x64.jpg"
            title="معرفی بردگیم‌های محبوب و تخفیف خرید بهترین بازی‌های رومیزی"
            date="۶ شهریور ۱۴۰۰"
          />
          <ThumbnailNews
            image="https://blog.tapsi.ir/wp-content/uploads/2021/08/blog-1-86x64.jpg"
            title="در فروشگاه باشگاه مشتریان تپسی چه تخفیف‌هایی در انتظار…"
            date="۳۰ مرداد ۱۴۰۰"
          />
          <ThumbnailNews
            image="https://blog.tapsi.ir/wp-content/uploads/2021/07/winner-announcementsmall-86x64.jpg"
            title="برندگان قرعه‌کشی مک‌بوک باشگاه مشتریان"
            date="۲۳ تیر ۱۴۰۰"
          />
        </ul>
        <ul className="flex flex-col space-y-2">
          <h3 className="text-xl font-semibold pb-8 text-center text-gray-600">
            باشگاه رانندگان
          </h3>
          <ThumbnailNews
            image="https://blog.tapsi.ir/wp-content/uploads/2022/03/dentist-x-ray-86x64.jpg"
            title="تخفیف ویژه دندانپزشکی کرج در باشگاه سفیران تپسی"
            date="۲۱ اسفند ۱۴۰۰"
          />
          <ThumbnailNews
            image="https://blog.tapsi.ir/wp-content/uploads/2022/03/dental-86x64.jpg"
            title="تخفیف دندانپزشکی در کرج ویژه باشگاه سفیران تپسی"
            date="۲۱ اسفند ۱۴۰۰"
          />
          <ThumbnailNews
            image="https://blog.tapsi.ir/wp-content/uploads/2022/03/car-starter-bend-86x64.jpg"
            title="تخفیف خرید لوازم یدکی در شیراز ویژه باشگاه سفیران تپسی"
            date="۱۷ اسفند ۱۴۰۰"
          />
          <ThumbnailNews
            image="https://blog.tapsi.ir/wp-content/uploads/2022/02/engineering-car-86x64.jpg"
            title="تخفیف تعمیرات خودرو در رشت ویژه باشگاه سفیران"
            date="۱۵ اسفند ۱۴۰۰"
          />
        </ul>
        <ul className="flex flex-col space-y-2">
          <h3 className="text-xl font-semibold pb-8 text-center text-gray-600">
            سلامت و امنیت
          </h3>
          <ThumbnailNews
            image="https://blog.tapsi.ir/wp-content/uploads/2020/08/amniat-86x64.jpg"
            title="تمهیدات تپسی برای حفظ امنیت سفرها"
            date="۱ شهریور ۱۳۹۹"
          />
          <ThumbnailNews
            image="https://blog.tapsi.ir/wp-content/uploads/2020/04/20200428-blog-sepid-86x64.jpg"
            title="سرویس جدید تپسی با عنوان «سپید» راه‌اندازی شد"
            date="۹ اردیبهشت ۱۳۹۹"
          />
          <ThumbnailNews
            image="https://blog.tapsi.ir/wp-content/uploads/2020/04/20200418-linkedin-darman2-86x64.jpg"
            title="استقرار ناوگان ویژه کادر درمان تپسی در بیمارستان‌ها"
            date="۳۰ فروردین ۱۳۹۹"
          />
          <ThumbnailNews
            image="https://blog.tapsi.ir/wp-content/uploads/2020/03/WhatsApp-Image-2020-03-11-at-12.15.12-AM.jpeg"
            title="تجهیز ناوگان تپسی به اقلام بهداشتی"
            date="۲۱ اسفند ۱۳۹۸"
          />
        </ul>
      </div>
    </section>
  );
};

export default NewsUpFooter;
