import React from "react";
import Input from "../ui/Input";
// -------------

const ProblemRegister = () => {
  const submitFormHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form
      onSubmit={submitFormHandler}
      className="max-w-2xl mx-auto flex flex-col items-center space-y-5 mt-10 px-8 lg:px-0"
    >
      <Input type="text" name="username" placeholder="نام و نام خانوادگی" />
      <Input type="tel" name="phone_number" placeholder="شماره تلفن" />
      <Input type="email" name="email" placeholder="ایمیل" />
      <textarea
        name="message"
        cols="40"
        rows="10"
        placeholder="متن پیام"
        className="text-sm border w-full lg:w-1/2 rounded-md text-gray-500 py-2 px-4 focus:outline-0 hover:border-[#ff5722] transition-all duration-300 ease-out focus:scale-105"
      ></textarea>
      <button type="button" className="orange__btn w-full lg:w-1/2">
        ارسال
      </button>
    </form>
  );
};

export default ProblemRegister;
