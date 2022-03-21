import React from "react";
import ReviewsSlider from "./ReviewsSlider";
// -----------

const TapsiReviews = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 xl:px-0 mt-10 lg:mt-20">
      <h2 className="text-3xl font-semibold text-center">
        تپسی از نگاه همکاران
      </h2>
      {/*  */}
      <ReviewsSlider />
    </section>
  );
};

export default TapsiReviews;
