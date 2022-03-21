import React from "react";
import Layout from "@/components/layout/Layout";
import Navbar from "@/components/layout/Navbar";
import RoadBanner from "@/components/careers/RoadBanner";
import Footer from "@/components/layout/Footer";
import TabMenu from "@/components/careers/TabMenu";
import TapsiGallery from "@/components/careers/TapsiGallery";
// -----------------

const CareersPage = () => {
  return (
    <Layout title="فرصت‌های شغلی تپسی در شهرهای مختلف ایران | TAPSI">
      <Navbar />
      <RoadBanner />
      <TabMenu />
      <TapsiGallery />
      <Footer />
    </Layout>
  );
};

export default CareersPage;
