import * as React from "react";
import { Helmet } from "react-helmet";
import loadable from "@loadable/component";

import Layout from "../components/Layout";
import AllServicesSection from "../components/AllServicesSection";

const Logos = loadable(() => import('../components/Logos'))

const CybersecurityConsultingServices = () => (
  <Layout pageTitle="Cybersecurity Specialist & Consulting Solutions | IRM Consulting & Advisory">
    <Helmet>
      <meta name="description" content="IRM Consulting & Advisory is your intelligent choice for cybersecurity specialist providing great consulting solutions for your business needs." />
      <meta name="keywords" content="cybersecurity consulting, virtual ciso services, vciso services, vciso, virtual ciso, security program, SOC2, IS27001, " />
      {/* <meta charSet="UTF-8" /> */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="google-site-verification" content="7mCyYHywOZgOshvytuzwG7CdqjexkBr4tn3WykxnWxw" />
      <meta name="robots" content="index, follow" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="IRM Consulting &amp; Advisory" />
      <meta property="article:publisher" content="https://www.facebook.com/irmcon" />
      <meta property="article:modified_time" content="2021-01-11T10:52:43+00:00" />
      <meta property="og:image:width" content="1824" />
      <meta property="og:image:height" content="596" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://elated-swanson-224ee1.netlify.app/cybersecurity-consulting-services/" />
      <meta property="og:title" content="IRM Consulting & Advisory - Cybersecurity Consulting for your SaaS Business" />
      <meta property="og:description" content="IRM Consulting & Advisory is your intelligent choice for cybersecurity specialist providing great consulting solutions for your business needs." />
      <meta property="og:image" content="https://xgw.394.myftpupload.com/wp-content/uploads/2021/10/irm-logo-social-scaled.jpg" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content="IRM Consulting & Advisory - Cybersecurity Consulting for your SaaS Business" />
      <meta property="twitter:description" content="IRM Consulting & Advisory is your intelligent choice for cybersecurity specialist providing great consulting solutions for your business needs." />
      <meta property="twitter:image" content="https://xgw.394.myftpupload.com/wp-content/uploads/2021/10/irm-logo-social-scaled.jpg" />
      <meta property="twitter:site" content="IRM Consulting & Advisory" />
      <link rel="canonical" href="https://elated-swanson-224ee1.netlify.app/cybersecurity-consulting-services/" />
    </Helmet>
    <AllServicesSection />
    <Logos />
  </Layout>
);

export default CybersecurityConsultingServices;
