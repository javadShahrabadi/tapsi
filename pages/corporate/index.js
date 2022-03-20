import Navbar from "@/components/layout/Navbar";
import Layout from "@/components/layout/Layout";
import HeaderOverlay from "@/components/corporate/HeaderOverlay";
import TapsiIran from "@/components/home/TapsiIran";
import CorporateServices from "@/components/corporate/CorporateServices";
import ShowTime from "@/components/corporate/ShowTime";
import MoreInfo from "@/components/corporate/MoreInfo";
import Footer from "@/components/layout/Footer";
//--------------
const CorporatePage = () => {
  return (
    <Layout title=" سرویس سازمان‌ها و راهکارهای ویژه کسب‌وکارها تپسی | TAPSI ">
      <Navbar />
      <HeaderOverlay />
      <TapsiIran />
      <CorporateServices />
      <ShowTime />
      <MoreInfo />
      <Footer />
    </Layout>
  );
};

export default CorporatePage;
