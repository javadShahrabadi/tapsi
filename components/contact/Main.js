import Layout from "../layout/Layout";
import ContactUs from "./ContactUs";
import { useState } from "react";
import Footer from "../layout/Footer";
import CreditReturn from "./CreditReturn";
import ProblemRegister from "./ProblemRegister";
// --------------
const Main = () => {
  const [choice, setChioce] = useState(0);

  const choiceHandler = (choiceNumber) => {
    setChioce(choiceNumber);
  };
  return (
    <Layout title=" تماس با شرکت تپسی - پشتیبانی مسافران و رانندگان | TAPSI ">
      <nav className="max-w-6xl mx-auto mt-32 border-b border-gray-200 pb-5 ">
        <ul className="flex flex-row items-center justify-evenly text-xs lg:justify-start lg:space-x-10 font-bold text-gray-600 relative lg:text-[14px] px-4 lg:px-0">
          <li
            className="lg:pr-5 lg:pl-10 cursor-pointer"
            onClick={() => choiceHandler(0)}
          >
            تماس با ما
            {choice === 0 && <div className="active__contact_link" />}
          </li>
          <li className="cursor-pointer" onClick={() => choiceHandler(1)}>
            درخواست بازگشت اعتبار
            {choice === 1 && <div className="active__contact_link" />}
          </li>

          <li className="cursor-pointer" onClick={() => choiceHandler(2)}>
            ثبت مشکل یا طرح پرسش
            {choice === 2 && <div className="active__contact_link" />}
          </li>
        </ul>
      </nav>
      {/* info section */}
      {choice === 0 && <ContactUs />}
      {choice === 1 && <CreditReturn />}
      {choice === 2 && <ProblemRegister />}
      <Footer />
    </Layout>
  );
};

export default Main;
