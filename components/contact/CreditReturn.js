import React from "react";
import Input from "../ui/Input";

// -----------
const CreditReturn = () => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form
      onSubmit={formSubmitHandler}
      className="max-w-2xl mx-auto flex flex-col items-center space-y-5 mt-10 px-8 lg:px-0"
    >
      <Input type="text" name="username" placeholder="نام و نام خانوادگی" />
      <Input type="tel" name="phone_number" placeholder="شماره تلفن" />
      <Input type="email" name="email" placeholder="ایمیل" />
      <Input type="text" name="code_meli" placeholder="شماره ملی" />
      <Input type="text" name="cart_number" placeholder="شماره کارت" />
      <Input type="text" name="price_toman" placeholder="مبلغ به تومان" />
      <button type="button" className="orange__btn w-full lg:w-1/2">
        ارسال
      </button>
    </form>
  );
};

export default CreditReturn;
