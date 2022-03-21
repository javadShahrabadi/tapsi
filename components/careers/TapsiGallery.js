import React from "react";
import Image from "next/image";
// ------------
const TapsiGallery = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 xl:px-0">
      <div className="grid grid-col-1 lg:grid-cols-8 justify-items-center gap-x-4 gap-y-4">
        <div className="lg:col-span-3 w-full h-[400px] lg:h-[480px] relative">
          <Image
            src="https://careers.tapsi.ir/assets/af266b68.webp"
            layout="fill"
            className="rounded-md "
          />
        </div>
        <div className="lg:col-span-5 relative w-full h-[350px] lg:h-[480px]">
          <Image
            src="https://careers.tapsi.ir/assets/9141929a.webp"
            alt="gallery-pic2"
            layout="fill"
            className="rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default TapsiGallery;
