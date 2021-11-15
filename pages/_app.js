import React, { useEffect, useState } from "react";
import { Layout } from "../components";
import "tailwindcss/tailwind.css";
import "../styles/globals.scss";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-antiquewhite dark:bg-magicBlack-500 transition duration-300 ">
    <Layout >
      <Component {...pageProps} />
      <Footer />
    </Layout>
    </div>
  );
}

export default MyApp;
