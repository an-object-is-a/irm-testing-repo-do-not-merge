import * as React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import Logos from "../components/Logos";
import HomeSlider from "../components/HomeSlider";
import HomepageBox1 from "../components/HomepageBox1";
import HomepageBox2 from "../components/HomepageBox2";
import HomepageBox3 from "../components/HomepageBox3";
import HomepageBox4 from "../components/HomepageBox4";
import HomepageBox5 from "../components/HomepageBox5";
import HomepageBox6 from "../components/HomepageBox6";
import HomepageBox7 from "../components/HomepageBox7";
import HomepageBox8 from "../components/HomepageBox8";
import HomepageBox9 from "../components/HomepageBox9";
import HomepageBox10 from "../components/HomepageBox10";
import FeaturedPostHome from "../components/FeaturedPostHome";

const HomePage = () => {
  return (
    <Layout pageTitle="Cybersecurity & Risk Management Services | IRM Consulting & Advisory">
      <Helmet>
        <meta name="description" content="IRM Consulting & Advisory is a boutique cybersecurity business obsessed with implementing security services and security best practices to help create a competitive advantage for SaaS Companies." />
        <meta name="keywords" content="cybersecurity consulting, cybersecurity services, cyber security services, cybersecurity risk management, information security and risk management, information security risk management, cyber security risk management, cyber security and risk management, cybersecurity risk management, Information risk management, Risk Management, cybersecurity" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="google-site-verification" content="7mCyYHywOZgOshvytuzwG7CdqjexkBr4tn3WykxnWxw" />
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="IRM Consulting &amp; Advisory" />
        <meta property="article:publisher" content="https://www.facebook.com/irmcon" />
        <meta property="article:modified_time" content="2021-01-11T10:52:43+00:00" />
        <meta property="og:image:width" content="1824" />
        <meta property="og:image:height" content="596" />
        <meta property="og:url" content="https://elated-swanson-224ee1.netlify.app/" />
        <meta property="og:title" content="IRM Consulting & Advisory - Cybersecurity Consulting for your SaaS Business" />
        <meta property="og:description" content="IRM Consulting & Advisory is a boutique cybersecurity business obsessed with implementing security services and security best practices to help create a competitive advantage for SaaS Companies." />
        <meta property="og:image" content="https://xgw.394.myftpupload.com/wp-content/uploads/2021/10/irm-logo-social-scaled.jpg" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content="IRM Consulting & Advisory - Cybersecurity Consulting for your SaaS Business" />
        <meta property="twitter:description" content="IRM Consulting & Advisory is a boutique cybersecurity business obsessed with implementing security services and security best practices to help create a competitive advantage for SaaS Companies." />
        <meta property="twitter:image" content="https://xgw.394.myftpupload.com/wp-content/uploads/2021/10/irm-logo-social-scaled.jpg" />
        <meta property="twitter:site" content="IRM Consulting & Advisory" />
        <link rel="canonical" href="https://elated-swanson-224ee1.netlify.app/" />
      </Helmet>

      <HomeSlider />
      <HomepageBox1 />
      <HomepageBox2 />
      <HomepageBox3 />
      <HomepageBox4 />
      <HomepageBox5 />
      <HomepageBox6 />
      <HomepageBox7 />
      <HomepageBox8 />
      <HomepageBox9 />
      <Logos />
      <HomepageBox10 />
      <FeaturedPostHome />
    </Layout>
  );
}

export default HomePage;