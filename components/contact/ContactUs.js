import Map from "./Map";
import {
  AiOutlinePhone,
  AiOutlinePrinter,
  AiOutlineMail,
} from "react-icons/ai";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
// -----------

const ContactUs = () => {
  return (
    <section className="flex flex-col lg:flex-row items-start max-w-5xl mx-auto justify-between my-10">
      <div className="lg:w-1/2 w-full px-5 lg:px-0">
        <select
          className="block
          cursor-pointer
      w-full
      px-2
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border-b border-solid border-gray-300
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-500 focus:outline-none"
        >
          <option value="تهران">تهران</option>
          <option value="تهران">قزوین</option>
          <option value="تهران">کرج</option>
        </select>
        <div>
          <Map />
        </div>
        <div className="mt-5">
          <div className="flex items-center">
            <p className="font-semibold text-sm text-gray-600">شماره تماس:</p>
            <small className="text-gray-600 pr-2">۱۶۳۰</small>
          </div>
          <p className="text-gray-600 text-sm pt-2 leading-6">
            آدرس: تهران، سعادت‌آباد، بالاتر از میدان کاج، بلوار بهزاد، نبش کوچه
            <br />
            باغستان یکم، پلاک ۲. کد پستی: ۱۹۹۸۶۳۵۸۲۰
          </p>
        </div>
      </div>
      {/* left part */}
      <div className="flex flex-col space-y-8 w-[100%] lg:w-1/2 lg:mr-10 px-4 lg:px-0 mt-10 lg:mt-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <AiOutlinePhone className="w-6 h-6 text-gray-500" />
            <p className="text-gray-600 font-semibold pr-2 text-[14px]">
              شماره تماس با پشتیبانی:
            </p>
          </div>

          <p className="text-gray-400 text-[14px] ">۱۶۳۰</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <AiOutlinePrinter className="w-6 h-6 text-gray-500" />
            <p className="text-gray-600 font-semibold pr-2 text-[14px]">
              شماره فکس:
            </p>
          </div>

          <p className="text-gray-400 text-[14px]"> ۴۱۶۳۰۶۸۰ (۲۱) ۹۸+</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <AiOutlineMail className="w-6 h-6 text-gray-500 " />
            <p className="text-gray-600 font-semibold pr-2 text-[14px]">
              پست الکترونیکی:
            </p>
          </div>

          <p className="text-gray-400 text-[14px] ">info@tapsi.cab</p>
        </div>

        <div className="border-b border-gray-200 w-full" />

        {/* icons */}
        <div className="flex item-center space-x-4 w-full justify-center">
          <FaFacebookF className="w-5 h-5 text-gray-500  ml-4 hover:text-black transition-colors duration-300 ease-out cursor-pointer" />

          <FaInstagram className="w-6 h-6 text-gray-500 hover:text-black transition-colors duration-300 ease-out cursor-pointer" />

          <FaTwitter className="w-6 h-6 text-gray-500 hover:text-black transition-colors duration-300 ease-out cursor-pointer" />

          <FaLinkedin className="w-6 h-6 text-gray-500 hover:text-black transition-colors duration-300 ease-out cursor-pointer" />
        </div>
      </div>
    </section>
  );
};
export default ContactUs;
