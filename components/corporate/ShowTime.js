import React from "react";

const ShowTime = () => {
  return (
    <section className="px-4 xl:px-0 max-w-7xl mx-auto mt-20">
      <h2 className="text-xl lg:text-3xl text-gray-700 font-semibold">
        آموزش نحوه ثبت نام در پنل سازمانی تپسی
      </h2>
      <video width="100%" height="100%" controls className="rounded-md my-10">
        <source
          src="https://tapsi-statics-bucket.s3.ir-thr-at1.arvanstorage.com/corporate/Corporate-Panel_How-to-Sign-Up.mp4"
          type="video/mp4"
        />
      </video>
    </section>
  );
};

export default ShowTime;
