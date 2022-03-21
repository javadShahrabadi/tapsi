import React from "react";
import Image from "next/image";
// ------------
const TapsiGallery = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 xl:px-0">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0">
        <div>
          <Image
            src="https://careers.tapsi.ir/assets/af266b68.webp"
            width={544}
            height={499}
            alt="gallery-pic1"
            className="rounded-md"
          />
        </div>
        <div className="w-full md:w-auto md:pr-4">
          <Image
            src="https://careers.tapsi.ir/assets/9141929a.webp"
            width={762}
            height={499}
            alt="gallery-pic2"
            className="rounded-md"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-4 mt-4">
        <div>
          <Image
            src="https://careers.tapsi.ir/assets/0a527c5b.webp"
            width={643}
            height={499}
            alt="gallery-pic3"
            className="rounded-md"
          />
        </div>
        <div className="w-full md:w-auto md:pr-4">
          <Image
            src="https://careers.tapsi.ir/assets/e19769ea.webp"
            width={663}
            height={499}
            alt="gallery-pic4"
            className="rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default TapsiGallery;
