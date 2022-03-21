import React from "react";
import Layout from "@/components/layout/Layout";
import Navbar from "@/components/layout/Navbar";
import RoadBanner from "@/components/careers/RoadBanner";
import Footer from "@/components/layout/Footer";
import TabMenu from "@/components/careers/TabMenu";
import TapsiGallery from "@/components/careers/TapsiGallery";
import TapsiReviws from "@/components/careers/TapsiReviews";
import JobTable from "@/components/careers/JobTable";
import UniConnection from "@/components/careers/UniConnection";
import AcademyRegistration from "@/components/careers/AcademyRegistration";
// -----------------

const CareersPage = () => {
  return (
    <Layout title="فرصت‌های شغلی تپسی در شهرهای مختلف ایران | TAPSI">
      <Navbar />
      <RoadBanner />
      <TabMenu />
      <TapsiGallery />
      <TapsiReviws />
      <JobTable />
      <UniConnection />
      <AcademyRegistration />
      <Footer />
    </Layout>
  );
};

export default CareersPage;
