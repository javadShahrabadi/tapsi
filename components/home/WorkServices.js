import { ChevronLeftIcon } from "@heroicons/react/solid";
import Button from "../ui/Button";
import Image from "next/image";
// ------------
const WorkServices = () => {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row w-full items-start lg:max-w-7xl lg:mx-auto">
        <div className="w-full lg:w-1/2 px-4 xl:px-0">
          <h2 className="text-xl lg:text-3xl font-bold">
            خدمات تپسی ویژه کسب‌وکارها
          </h2>
          <p className="text-lg pt-6 text-justify text-gray-600">
            پنل سازمانی تپسی، یک سامانه تحت وب است که به سادگی امکان درخواست
            هم‌زمان تعداد نامحدودی خودرو و پیک را برای کسب‌وکارها و سازمان‌ها
            فراهم می‌کند. و با استفاده از آن می‌توانید ماموریت های درون‌شهری و
            ارسال کالاهای خود را به سادگی مدیریت کنید.
          </p>
          <p className="flex items-center pt-4 text-[#FF6738] cursor-pointer">
            اطلاعات بیشتر سرویس سازمانی
            <span>
              <ChevronLeftIcon className="w-5 h-5 " />
            </span>
          </p>
          <div className="pt-4">
            <Button text="ورود و ثبت نام پنل سازمانی" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:mr-32 mt-10 lg:mt-0 px-4 lg:px-0 mr-[40px] pb-10 lg:pb-0">
          <Image
            src="https://tapsi.ir/images/home/i-mac.webp"
            width={480}
            height={310}
            alt="startups-services"
          />
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row-reverse items-start w-full lg:max-w-7xl lg:mx-auto md:pt-40 pt-10">
        <div className="w-full lg:w-1/2 px-4 xl:px-0">
          <h2 className="text-xl lg:text-3xl font-bold">خرید کد اعتبار تپسی</h2>
          <p className="text-lg pt-6 text-justify text-gray-600">
            کاربران، کسب‌وکارها و سازمان‌ها می‌توانند به تعداد و مبلغ مورد
            نظرشان، کد اعتبار یا کد تخفیف تپسی تهیه کرده، برای خود، پرسنل و یا
            مشتریانشان استفاده کنند و از تخفیف‌های ویژه تپسی نیز بهره‌مند شوند.
            این کدها امکان سفارشی‌سازی بر اساس مبدا، مقصد، زمان، درصد و مبلغ را
            دارند.
          </p>

          <div className="pt-4">
            <Button text="خرید کد اعتبار و تخفیف" />
          </div>
        </div>
        <div className=" w-full lg:w-1/2  mt-10 lg:mt-0 px-4 lg:px-0  pb-10 lg:pb-0">
          <Image
            src="https://tapsi.ir/images/home/macbook.webp"
            width={480}
            height={310}
            alt="startups-services"
          />
        </div>
      </div>
    </section>
  );
};

export default WorkServices;
