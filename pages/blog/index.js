import React from "react";
import Layout from "@/components/layout/Layout";
import Navbar from "@/components/blog/Navbar";
import Notofication from "@/components/blog/Notofication";
import Slider from "@/components/blog/Slider";
import FreshNewsList from "@/components/blog/FreshNewsList";
import Pagination from "@/components/blog/Pagination";
import NewsUpFooter from "@/components/blog/NewsUpFooter";
import Footer from "@/components/blog/Footer";
// ------------------
const BlogPage = () => {
  return (
    <Layout title="وبلاگ تپسی | TAPSI Blog">
      <Navbar />
      <Notofication />
      <Slider />
      <FreshNewsList />
      <Pagination />
      <NewsUpFooter />
      <Footer />
    </Layout>
  );
};

export default BlogPage;
