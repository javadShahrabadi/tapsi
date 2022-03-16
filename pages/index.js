import React from "react";
import Layout from "@/components/layout/Layout";
import Navbar from "@/components/layout/Navbar";
import NavbarBottom from "@/components/home/NavbarBottom";
// ----------------
const index = () => {
  return (
    <Layout>
      <Navbar />
      <NavbarBottom />
    </Layout>
  );
};

export default index;
