import React from "react";
import Head from "next/head";
const Layout = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title>{props.title}</title>
      </Head>
      <main>{props.children}</main>
    </React.Fragment>
  );
};

Layout.defaultProps = {
  title: "تاکسی اینترنتی تپسی - اپلیکیشن درخواست خودرو و پیک | TAPSI",
};

export default Layout;
