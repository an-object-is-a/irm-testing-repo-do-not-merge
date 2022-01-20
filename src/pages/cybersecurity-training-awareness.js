import React from 'react';
import { Helmet } from 'react-helmet';
import loadable from '@loadable/component';

import Layout from '../components/Layout';
import CybersecurityCourses from '../components/CybersecurityCourses';
import PrivacyCourses from '../components/PrivacyCourses';
import InformationSecurityCourses from '../components/InformationSecurityCourses';
import GovernanceCourses from '../components/GovernanceCourses';
import ContinuityResilienceRecoveryCourses from '../components/ContinuityResilienceRecoveryCourses';
import bgtitle from '../images/cyber-image.jpg';

const Logos = loadable(() => import('../components/Logos'));

const CybersecurityTrainingAwareness = () => {
  return (
    <Layout pageTitle="Cybersecurity Training & Awareness">
      <Helmet>
        <meta name="description" content="IRM Consulting & Advisory provides Cybersecurity Training and Awareness Courses for Technology Teams." />
        <meta name="keywords" content="cybersecurity, security assurance, security best practices, security blogs, blogs" />
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
        <meta property="og:url" content="https://irmcon-staging.netlify.app/cybersecurity-training-awareness/" />
        <meta property="og:title" content="IRM Consulting & Advisory - Cybersecurity Consulting for your SaaS Business" />
        <meta property="og:description" content="IRM Consulting & Advisory provides Cybersecurity Training and Awareness Courses for Technology Teams." />
        <meta property="og:image" content="https://xgw.394.myftpupload.com/wp-content/uploads/2021/10/irm-logo-social-scaled.jpg" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content="IRM Consulting & Advisory - Cybersecurity Consulting for your SaaS Business" />
        <meta property="twitter:description" content="IRM Consulting & Advisory provides Cybersecurity Training and Awareness Courses for Technology Teams." />
        <meta property="twitter:image" content="https://xgw.394.myftpupload.com/wp-content/uploads/2021/10/irm-logo-social-scaled.jpg" />
        <meta property="twitter:site" content="IRM Consulting & Advisory" />
        <link rel="canonical" href="https://irmcon-staging.netlify.app/cybersecurity-training-awareness/" />
      </Helmet>

      <section className="page-title-sec" style={{ backgroundImage: `url(${bgtitle})` }}>
        <div className="auto-container">
          <div className="row">
            <div className="col-md-12">
              <div className="content-box">
                <h1>Cybersecurity Training & Awareness</h1>
                <p>Our Courses are designed to help you understand Industry Best Practices and to prepare you for a new or transitional career in Cybersecurity & Risk Management.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center">
        <div className="light-blue-background py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p>
                  We provide the following Cybersecurity and Information Risk Management Training & Awareness Courses.
                </p>
                <p>
                  Courses are delivered through an eLearning Platform, Online or Self-Study Channels.
                </p>
                <p>
                  Select and Schedule a Course that suits your needs and we will deliver on the Dates and Times convenient for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cybersecurity-training-awareness-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <table className="table table-striped cyber-sec-page">
                <thead>
                  <tr>
                    <th style={{ width: '51%' }} width="35%" scope="col">Cybersecurity</th>
                    <th width="20%" scope="col" className="center">Course Delivery</th>
                    <th width="10%" scope="col" className="center">Order</th>
                    <th width="20%" scope="col" className="center">Schedule a Course</th>
                    <th width="15%" scope="col" className="center">Download</th>
                  </tr>
                </thead>
                <tbody>
                  <CybersecurityCourses />
                </tbody>
                <thead>
                  <tr>
                    <th style={{ width: '51%' }} scope="col">Privacy & Data Protection</th>
                    <th scope="col" className="center">Course Delivery</th>
                    <th scope="col" className="center">Order</th>
                    <th scope="col" className="center">Schedule a Course</th>
                    <th scope="col" className="center">Download</th>
                  </tr>
                </thead>
                <tbody>
                  <PrivacyCourses />
                </tbody>
                <thead>
                  <tr>
                    <th style={{ width: '51%' }} scope="col">Information Security</th>
                    <th scope="col" className="center">Course Delivery</th>
                    <th scope="col" className="center">Order</th>
                    <th scope="col" className="center">Schedule a Course</th>
                    <th scope="col" className="center">Download</th>
                  </tr>
                </thead>
                <tbody>
                  <InformationSecurityCourses />
                </tbody>
                <thead>
                  <tr>
                    <th style={{ width: '51%' }} scope="col">Governance Risk & Compliance</th>
                    <th scope="col" className="center">Course Delivery</th>
                    <th scope="col" className="center">Order</th>
                    <th scope="col" className="center">Schedule a Course</th>
                    <th scope="col" className="center">Download</th>
                  </tr>
                </thead>
                <tbody>
                  <GovernanceCourses />
                </tbody>
                <thead>
                  <tr>
                    <th style={{ width: '51%' }} scope="col">Continuity, Resilience and Recovery</th>
                    <th scope="col" className="center">Course Delivery</th>
                    <th scope="col" className="center">Order</th>
                    <th scope="col" className="center">Schedule a Course</th>
                    <th scope="col" className="center">Download</th>
                  </tr>
                </thead>
                <tbody>
                  <ContinuityResilienceRecoveryCourses />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Logos />
    </Layout>
  )
}

export default CybersecurityTrainingAwareness;