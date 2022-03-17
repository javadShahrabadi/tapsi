import React from "react";
import Layout from "@/components/layout/Layout";
import Navbar from "@/components/layout/Navbar";
import NavbarBottom from "@/components/home/NavbarBottom";
import ServiceList from "@/components/home/ServiceList";
import Divider from "@/components/ui/Divider";
import WorkServices from "@/components/home/WorkServices";
import GradientText from "@/components/home/GradientText";
import Adventage from "@/components/home/Adventage";
import BlogNews from "@/components/home/BlogNews";
// ----------------
const index = () => {
  return (
    <Layout>
      <Navbar />
      <NavbarBottom />
      <ServiceList />
      <Divider />
      <WorkServices />
      <GradientText />
      <Adventage />
      <BlogNews />
    </Layout>
  );
};

export default index;
