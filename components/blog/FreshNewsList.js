import React from "react";
import NewsItem from "./NewsItem";
// ------------
function FreshNewsList() {
  return (
    <section className="max-w-7xl mx-auto ">
      <h2 className="text-xl lg:text-3xl font-bold text-gray-600 mt-20 mb-5 pr-4">
        تازه‌ترین‌های وبلاگ تپسی
      </h2>
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-5 px-4 lg:px-0">
        <NewsItem
          image="https://blog.tapsi.ir/wp-content/uploads/2022/03/A68CB9F1-AA36-4B75-99B7-DE475A5FFBDF-750x430.jpeg"
          title="تخفیف ویژه دیجی‌کالا جت برای کاربران تپسی"
          date="۱۹ اسفند ۱۴۰۰"
          description="سوپرمارکت آنلاین «دیجی‌کالا جت» با ارسال سریع محصولات سوپرمارکتی شروع به کار کرده است و سفارش‌های آنلاین…"
        />
        <NewsItem
          image="https://blog.tapsi.ir/wp-content/uploads/2022/03/blog2-750x430.jpg"
          title="برای دریافت دز سوم واکسن، با تخفیف به مراکز واکسیناسیون بروید!"
          date="۱۴ اسفند ۱۴۰۰"
          description="تپسی با همراهی شرکت سیناژن (تولیدکننده واکسن اسپایکوژن) برای رفتن به مراکز واکسیناسیون و تزریق دز سوم، تخفیف…"
        />
        <NewsItem
          image="https://blog.tapsi.ir/wp-content/uploads/2022/02/baner-blog-alodegi-hava-tehran-copy-750x430.jpg"
          title="دلایل آلودگی هوای تهران و راهکارهای پیشگیری از آن"
          date="۲۷ بهمن ۱۴۰۰"
          description="با توجه به روند افزایش جمعیت و صنعتی شدن بسیاری از شهرها، آلودگی هوا به یکی از بزرگ‌ترین معضلات زیست‌ محیطی…"
        />
        <NewsItem
          image="https://blog.tapsi.ir/wp-content/uploads/2022/02/kharid-khodro-karkarde2-copy-1-750x430.jpg"
          title="نکاتی که هنگام خرید خودرو کار کرده باید بدانید"
          date="۱۷ بهمن ۱۴۰۰"
          description="در این مطلب، به نکات مهمی اشاره کرده‌ایم که قبل از خرید خودرو کارکرده باید به آن‌ها دقت کنید تا خرید موفقی…"
        />
        <NewsItem
          image="https://blog.tapsi.ir/wp-content/uploads/2022/01/baner-blog-taxsi-1-750x430.jpg"
          title="خطوط تاکسی تهران را بشناسید و بی‌دغدغه سفر کنید!"
          date="۱۶ بهمن ۱۴۰۰"
          description="در حالی که جمعین شهر تهران روز به روز در حال افزایش است، وسایل حمل و نقل جمعی مانند خطوط تاکسی، اتوبوس و مترو…"
        />
        <NewsItem
          image="https://blog.tapsi.ir/wp-content/uploads/2022/01/radio-shows-scaled.jpg"
          title="برنامه‌های رادیو را بشناسید و از رانندگی لذت ببرید"
          date="۲ بهمن ۱۴۰۰"
          description="رادیو را شاید بتوان از قدیمی‌ترین وسایل ارتباط جمعی دانست. دقیقا همان زمان که نه گوشی تلفن همراه بود و نه…"
        />
        <NewsItem
          image="https://blog.tapsi.ir/wp-content/uploads/2022/01/license-1-750x430.jpg"
          title="برنامه‌های رادیو را بشناسید و از رانندگی لذت ببرید"
          date="۲۶ دی ۱۴۰۰"
          description="همیشه رفت ‌و آمد و ترافیک از مشکلات اصلی شهرهای بزرگ و پرجمعیت است. به همین دلیل استفاده از وسایل نقلیه…"
        />
        <NewsItem
          image="https://blog.tapsi.ir/wp-content/uploads/2022/01/shoghle-dovom2-750x430.jpg"
          title="شغل دوم‌هایی که درآمدتان را دگرگون می‌کند!"
          date="۲۰ دی ۱۴۰۰"
          description="اگر در گذشته اکثر افراد می‌توانستند با حقوق و مزایای شغل اول خود از پس تمام مخارج و هزینه‌ها بربیایند و حتی…"
        />
        <NewsItem
          image="https://blog.tapsi.ir/wp-content/uploads/2021/12/focus-scaled.jpg"
          title="کاهش تصادفات و جرایم با ۱۰ تکنیک تمرکز در رانندگی"
          date="۱۵ دی ۱۴۰۰"
          description="بیایید با هم ۱۰ تا از بهترین تکنیک‌های جهانی برای تمرکز در رانندگی را بخوانیم و بدانیم چطور می‌توان متمرکزتر…"
        />
        <NewsItem
          image="https://blog.tapsi.ir/wp-content/uploads/2021/12/book-garden-1-750x430.jpg"
          title="باغ کتاب تهران مقصد اصلی کتاب بازها!"
          date="۱۱ دی ۱۴۰۰"
          description="اگر شما هم عاشق کتاب باشید و دلتان بخواهد غرق دنیای زیبای داستان‌ها شوید، قطعا مراجعه به کتاب‌فروشی برایتان…"
        />
        <NewsItem
          image="https://blog.tapsi.ir/wp-content/uploads/2021/12/2022-blof-750x430.jpg"
          title="حال و هوای سال نو میلادی در تهران"
          date="۸ دی ۱۴۰۰"
          description="با نزدیک شدن به بازه کریسمس و سال نو میلادی در همه کشورها شور و حال جذابی برپا می‌شود. این شور و حال در…"
        />
        <NewsItem
          image="https://blog.tapsi.ir/wp-content/uploads/2021/12/cineplexes-750x430.jpg"
          title="معرفی بهترین پردیس‌های سینمایی ایران + تخفیف خرید بلیت"
          date="۶ دی ۱۴۰۰"
          description="تا همین چند سال پیش، سینماها تنها یک یا دو سالن برای پخش فیلم و یک بوفه برای فروش تنقلات داشتند و شما چند…"
        />
      </div>
    </section>
  );
}

export default FreshNewsList;
