import * as React from 'react';
import { Helmet } from 'react-helmet';
import loadable from '@loadable/component';

import Layout from '../components/Layout';

const Logos = loadable(() => import('../components/Logos'));
const ReCAPTCHA = loadable(() => import('react-google-recaptcha'));

const PenetrationTestQuote = () => (
  <Layout pageTitle="Request a Penetration Test Quote - IRM Consulting & Advisory">
    <Helmet>
      <meta charSet="UTF-8" />
      <meta name="description" content="IRM Consulting & Advisory Penetration Testing Services" />
      <meta name="keywords" content="Penetration Testing, Web Application Testing, Application Security, OWASP" />
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
      <meta property="og:url" content="https://irmcon-staging.netlify.app/penetration-test-quote/" />
      <meta property="og:title" content="IRM Consulting & Advisory - Cybersecurity Consulting for your SaaS Business" />
      <meta property="og:description" content="IRM Consulting & Advisory Penetration Testing Services" />
      <meta property="og:image" content="https://xgw.394.myftpupload.com/wp-content/uploads/2021/10/irm-logo-social-scaled.jpg" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content="IRM Consulting & Advisory - Cybersecurity Consulting for your SaaS Business" />
      <meta property="twitter:description" content="IRM Consulting & Advisory Penetration Testing Services" />
      <meta property="twitter:image" content="https://xgw.394.myftpupload.com/wp-content/uploads/2021/10/irm-logo-social-scaled.jpg" />
      <meta property="twitter:site" content="IRM Consulting & Advisory" />
      <link rel="canonical" href="https://irmcon-staging.netlify.app/penetration-test-quote/" />
    </Helmet>

    <section className="contact-form section-padding-xs bg-grey ref qoute-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <h1>Request a Penetration Test Quote - IRM Consulting & Advisory Penetration Testing Services</h1>

            <form className="contact-form" name="Request-a-Penetration-Test-Quote" method="post" data-netlify-recaptcha="true" data-netlify="true">
              <div className="row contactus">
                <div className="col-lg-12">

                  <input type="hidden" name="form-name" value="Request-a-Penetration-Test-Quote" />
                  <label>Email*</label>
                  <input type="email" name="email" required="" placeholder="" />
                </div>
                <div className="col-lg-12">
                  <label>Company name*</label>
                  <input type="text" name="companyname" required />
                </div>

                <div className="col-lg-12 radio-input">
                  <span>What is the business requirement for this penetration test? *</span>
                  <p><label htmlFor="penetration_test_reason0-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" className="hs-form-radio-display" data-reactid=".hbspt-forms-0.1:$2.$penetration_test_reason.0.$Required by a regulatory audit or standard.0"><input id="penetration_test_reason0-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" type="radio" name="penetration_test_reason" value="Required by a regulatory audit or standard" aria-labelledby="label-penetration_test_reason-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" data-reactid=".hbspt-forms-0.1:$2.$penetration_test_reason.0.$Required by a regulatory audit or standard.0.0" /><span data-reactid=".hbspt-forms-0.1:$2.$penetration_test_reason.0.$Required by a regulatory audit or standard.0.1">Required by a regulatory audit or standard</span></label>  </p>
                  <p><label htmlFor="penetration_test_reason1-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" className="hs-form-radio-display" data-reactid=".hbspt-forms-0.1:$2.$penetration_test_reason.0.$is the driver for this to comply with an audit requirement.0"><input id="penetration_test_reason1-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" type="radio" name="penetration_test_reason" value="is the driver for this to comply with an audit requirement" aria-labelledby="label-penetration_test_reason-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" data-reactid=".hbspt-forms-0.1:$2.$penetration_test_reason.0.$is the driver for this to comply with an audit requirement.0.0" /><span data-reactid=".hbspt-forms-0.1:$2.$penetration_test_reason.0.$is the driver for this to comply with an audit requirement.0.1">Proactive internal decision to determine all weaknesses. (For example, is the driver for this to comply with an audit requirement, or are you seeking to proactively evaluate the security in your environment?)</span></label></p>
                  <p><label htmlFor="penetration_test_reason2-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" className="hs-form-radio-display" data-reactid=".hbspt-forms-0.1:$2.$penetration_test_reason.0.$Other.0"><input id="penetration_test_reason2-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" type="radio" name="penetration_test_reason" value="Other" aria-labelledby="label-penetration_test_reason-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" data-reactid=".hbspt-forms-0.1:$2.$penetration_test_reason.0.$Other.0.0" /><span data-reactid=".hbspt-forms-0.1:$2.$penetration_test_reason.0.$Other.0.1">Other</span></label></p>
                </div>

                <div className="col-lg-12 radio-input">
                  <div data-reactid=".hbspt-forms-0.1:$3"><div className="hs-richtext hs-main-font-element" data-reactid=".hbspt-forms-0.1:$3.0">
                    <h1><span>Web Application Testing</span></h1>
                    <p><span><em>Define requirements for testing the web application(s). <strong>Please answer with as much detail and accuracy as you can.</strong></em></span></p></div></div>

                  <div className="hs_how_many_applications_are_included_in_the_scope_for_this_testing_ hs-how_many_applications_are_included_in_the_scope_for_this_testing_ hs-fieldtype-radio field hs-form-field" data-reactid=".hbspt-forms-0.1:$4">
                    <label
                      id="label-how_many_applications_are_included_in_the_scope_for_this_testing_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                      className=""
                      placeholder="Enter your How many web applications are included in the scope for this testing?"
                      htmlFor="how_many_applications_are_included_in_the_scope_for_this_testing_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                      data-reactid=".hbspt-forms-0.1:$4.0"
                    >
                      <span data-reactid=".hbspt-forms-0.1:$4.0.0">How many web applications are included in the scope for this testing?</span>
                    </label>
                    <legend className="hs-field-desc" data-reactid=".hbspt-forms-0.1:$4.1">
                      A web application would be the application itself, and an additional dependent service such as an API.
                    </legend>
                    <div className="input" data-reactid=".hbspt-forms-0.1:$4.$how_many_applications_are_included_in_the_scope_for_this_testing_">
                      <ul role="checkbox" className="inputs-list multi-container" data-reactid=".hbspt-forms-0.1:$4.$how_many_applications_are_included_in_the_scope_for_this_testing_.0">
                        <li className="hs-form-radio" role="radio" data-reactid=".hbspt-forms-0.1:$4.$how_many_applications_are_included_in_the_scope_for_this_testing_.0.$1-2">
                          <label htmlFor="how_many_applications_are_included_in_the_scope_for_this_testing_0-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" className="hs-form-radio-display" data-reactid=".hbspt-forms-0.1:$4.$how_many_applications_are_included_in_the_scope_for_this_testing_.0.$1-2.0">
                            <input id="how_many_applications_are_included_in_the_scope_for_this_testing_0-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" type="radio" name="how_many_applications_are_included_in_the_scope_for_this_testing_" value="1-2" aria-labelledby="label-how_many_applications_are_included_in_the_scope_for_this_testing_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" data-reactid=".hbspt-forms-0.1:$4.$how_many_applications_are_included_in_the_scope_for_this_testing_.0.$1-2.0.0" />
                            <span data-reactid=".hbspt-forms-0.1:$4.$how_many_applications_are_included_in_the_scope_for_this_testing_.0.$1-2.0.1">1</span>
                          </label>
                        </li>
                        <li className="hs-form-radio" role="radio" data-reactid=".hbspt-forms-0.1:$4.$how_many_applications_are_included_in_the_scope_for_this_testing_.0.$3-4">
                          <label htmlFor="how_many_applications_are_included_in_the_scope_for_this_testing_1-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" className="hs-form-radio-display" data-reactid=".hbspt-forms-0.1:$4.$how_many_applications_are_included_in_the_scope_for_this_testing_.0.$3-4.0">
                            <input id="how_many_applications_are_included_in_the_scope_for_this_testing_1-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" className="hs-input " type="radio" name="how_many_applications_are_included_in_the_scope_for_this_testing_" value="3-4" aria-labelledby="label-how_many_applications_are_included_in_the_scope_for_this_testing_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" data-reactid=".hbspt-forms-0.1:$4.$how_many_applications_are_included_in_the_scope_for_this_testing_.0.$3-4.0.0" />
                            <span data-reactid=".hbspt-forms-0.1:$4.$how_many_applications_are_included_in_the_scope_for_this_testing_.0.$3-4.0.1">2</span>
                          </label>
                        </li>
                        <li className="hs-form-radio" role="radio" data-reactid=".hbspt-forms-0.1:$4.$how_many_applications_are_included_in_the_scope_for_this_testing_.0.$More than 5">
                          <label htmlFor="how_many_applications_are_included_in_the_scope_for_this_testing_2-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" className="hs-form-radio-display" data-reactid=".hbspt-forms-0.1:$4.$how_many_applications_are_included_in_the_scope_for_this_testing_.0.$More than 5.0">
                            <input id="how_many_applications_are_included_in_the_scope_for_this_testing_2-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" type="radio" name="how_many_applications_are_included_in_the_scope_for_this_testing_" value="More than 5" aria-labelledby="label-how_many_applications_are_included_in_the_scope_for_this_testing_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" data-reactid=".hbspt-forms-0.1:$4.$how_many_applications_are_included_in_the_scope_for_this_testing_.0.$More than 5.0.0" />
                            <span data-reactid=".hbspt-forms-0.1:$4.$how_many_applications_are_included_in_the_scope_for_this_testing_.0.$More than 5.0.1">3 or more</span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 radio-input">
                  <div className="hs_how_many_top_level_domains_are_included_in_the_scope_for_this_testing_ hs-how_many_top_level_domains_are_included_in_the_scope_for_this_testing_ hs-fieldtype-radio field hs-form-field" data-reactid=".hbspt-forms-0.1:$5">
                    <label
                      id="label-how_many_top_level_domains_are_included_in_the_scope_for_this_testing_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                      className=""
                      placeholder="Enter your How many top-level domains are included in the scope for this testing?"
                      htmlFor="how_many_top_level_domains_are_included_in_the_scope_for_this_testing_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                      data-reactid=".hbspt-forms-0.1:$5.0"
                    >
                      <span data-reactid=".hbspt-forms-0.1:$5.0.0">How many top-level domains are included in the scope for this testing?</span>
                    </label>
                    <legend className="hs-field-desc" data-reactid=".hbspt-forms-0.1:$5.1">
                      Example of a top-level domain: <strong><em>.domain.com</em></strong>
                    </legend>
                    <div className="input" data-reactid=".hbspt-forms-0.1:$5.$how_many_top_level_domains_are_included_in_the_scope_for_this_testing_">
                      <ul role="checkbox" className="inputs-list multi-container" data-reactid=".hbspt-forms-0.1:$5.$how_many_top_level_domains_are_included_in_the_scope_for_this_testing_.0">
                        <li className="hs-form-radio" role="radio" data-reactid=".hbspt-forms-0.1:$5.$how_many_top_level_domains_are_included_in_the_scope_for_this_testing_.0.$1">
                          <label
                            htmlFor="how_many_top_level_domains_are_included_in_the_scope_for_this_testing_0-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                            className="hs-form-radio-display"
                            data-reactid=".hbspt-forms-0.1:$5.$how_many_top_level_domains_are_included_in_the_scope_for_this_testing_.0.$1.0"
                          >
                            <input
                              id="how_many_top_level_domains_are_included_in_the_scope_for_this_testing_0-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"

                              type="radio"
                              name="how_many_top_level_domains_are_included_in_the_scope_for_this_testing_"
                              value="1"
                              aria-labelledby="label-how_many_top_level_domains_are_included_in_the_scope_for_this_testing_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              data-reactid=".hbspt-forms-0.1:$5.$how_many_top_level_domains_are_included_in_the_scope_for_this_testing_.0.$1.0.0"
                            />
                            <span data-reactid=".hbspt-forms-0.1:$5.$how_many_top_level_domains_are_included_in_the_scope_for_this_testing_.0.$1.0.1">1</span>
                          </label>
                        </li>
                        <li className="hs-form-radio" role="radio" data-reactid=".hbspt-forms-0.1:$5.$how_many_top_level_domains_are_included_in_the_scope_for_this_testing_.0.$2">
                          <label
                            htmlFor="how_many_top_level_domains_are_included_in_the_scope_for_this_testing_1-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                            className="hs-form-radio-display"
                            data-reactid=".hbspt-forms-0.1:$5.$how_many_top_level_domains_are_included_in_the_scope_for_this_testing_.0.$2.0"
                          >
                            <input
                              id="how_many_top_level_domains_are_included_in_the_scope_for_this_testing_1-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"

                              type="radio"
                              name="how_many_top_level_domains_are_included_in_the_scope_for_this_testing_"
                              value="2"
                              aria-labelledby="label-how_many_top_level_domains_are_included_in_the_scope_for_this_testing_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              data-reactid=".hbspt-forms-0.1:$5.$how_many_top_level_domains_are_included_in_the_scope_for_this_testing_.0.$2.0.0"
                            />
                            <span data-reactid=".hbspt-forms-0.1:$5.$how_many_top_level_domains_are_included_in_the_scope_for_this_testing_.0.$2.0.1">2</span>
                          </label>
                        </li>
                        <li className="hs-form-radio" role="radio" data-reactid=".hbspt-forms-0.1:$5.$how_many_top_level_domains_are_included_in_the_scope_for_this_testing_.0.$3 or more">
                          <label
                            htmlFor="how_many_top_level_domains_are_included_in_the_scope_for_this_testing_2-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                            className="hs-form-radio-display"
                            data-reactid=".hbspt-forms-0.1:$5.$how_many_top_level_domains_are_included_in_the_scope_for_this_testing_.0.$3 or more.0"
                          >
                            <input
                              id="how_many_top_level_domains_are_included_in_the_scope_for_this_testing_2-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"

                              type="radio"
                              name="how_many_top_level_domains_are_included_in_the_scope_for_this_testing_"
                              value="3 or more"
                              aria-labelledby="label-how_many_top_level_domains_are_included_in_the_scope_for_this_testing_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              data-reactid=".hbspt-forms-0.1:$5.$how_many_top_level_domains_are_included_in_the_scope_for_this_testing_.0.$3 or more.0.0"
                            />
                            <span data-reactid=".hbspt-forms-0.1:$5.$how_many_top_level_domains_are_included_in_the_scope_for_this_testing_.0.$3 or more.0.1">3 or more</span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <label>Please enter a link to the web applications and services you want to be tested.</label> <br />
                  <small>example: app.domain.com, api.domain.com</small>
                  <input type="text" name="appdomain" placeholder="app.domain.com" required />
                </div>

                <div className="col-lg-12 radio-input">
                  <div className="hs_how_many_subdomains_urls_are_included_in_the_scope_for_this_testing_ hs-how_many_subdomains_urls_are_included_in_the_scope_for_this_testing_ hs-fieldtype-radio field hs-form-field" data-reactid=".hbspt-forms-0.1:$7">
                    <label
                      id="label-how_many_subdomains_urls_are_included_in_the_scope_for_this_testing_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                      className=""
                      placeholder="Enter your How many subdomains/URLs are included in the scope for this testing?"
                      htmlFor="how_many_subdomains_urls_are_included_in_the_scope_for_this_testing_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                      data-reactid=".hbspt-forms-0.1:$7.0"
                    >
                      <span data-reactid=".hbspt-forms-0.1:$7.0.0">How many subdomains/URLs are included in the scope for this testing?</span>
                    </label>
                    <legend className="hs-field-desc" data-reactid=".hbspt-forms-0.1:$7.1">
                      Example of a subdomain/URL: <em><strong>app.domain.com/index</strong>&nbsp;and <strong>app.domain.com/contact</strong></em>
                    </legend>
                    <div className="input" data-reactid=".hbspt-forms-0.1:$7.$how_many_subdomains_urls_are_included_in_the_scope_for_this_testing_">
                      <ul role="checkbox" className="inputs-list multi-container" data-reactid=".hbspt-forms-0.1:$7.$how_many_subdomains_urls_are_included_in_the_scope_for_this_testing_.0">
                        <li className="hs-form-radio" role="radio" data-reactid=".hbspt-forms-0.1:$7.$how_many_subdomains_urls_are_included_in_the_scope_for_this_testing_.0.$~10">
                          <label
                            htmlFor="how_many_subdomains_urls_are_included_in_the_scope_for_this_testing_0-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                            className="hs-form-radio-display"
                            data-reactid=".hbspt-forms-0.1:$7.$how_many_subdomains_urls_are_included_in_the_scope_for_this_testing_.0.$~10.0"
                          >
                            <input
                              id="how_many_subdomains_urls_are_included_in_the_scope_for_this_testing_0-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"

                              type="radio"
                              name="how_many_subdomains_urls_are_included_in_the_scope_for_this_testing_"
                              value="~10"
                              aria-labelledby="label-how_many_subdomains_urls_are_included_in_the_scope_for_this_testing_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              data-reactid=".hbspt-forms-0.1:$7.$how_many_subdomains_urls_are_included_in_the_scope_for_this_testing_.0.$~10.0.0"
                            />
                            <span data-reactid=".hbspt-forms-0.1:$7.$how_many_subdomains_urls_are_included_in_the_scope_for_this_testing_.0.$~10.0.1">2 or less</span>
                          </label>
                        </li>
                        <li className="hs-form-radio" role="radio" data-reactid=".hbspt-forms-0.1:$7.$how_many_subdomains_urls_are_included_in_the_scope_for_this_testing_.0.$~20">
                          <label
                            htmlFor="how_many_subdomains_urls_are_included_in_the_scope_for_this_testing_1-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                            className="hs-form-radio-display"
                            data-reactid=".hbspt-forms-0.1:$7.$how_many_subdomains_urls_are_included_in_the_scope_for_this_testing_.0.$~20.0"
                          >
                            <input
                              id="how_many_subdomains_urls_are_included_in_the_scope_for_this_testing_1-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"

                              type="radio"
                              name="how_many_subdomains_urls_are_included_in_the_scope_for_this_testing_"
                              value="~20"
                              aria-labelledby="label-how_many_subdomains_urls_are_included_in_the_scope_for_this_testing_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              data-reactid=".hbspt-forms-0.1:$7.$how_many_subdomains_urls_are_included_in_the_scope_for_this_testing_.0.$~20.0.0"
                            />
                            <span data-reactid=".hbspt-forms-0.1:$7.$how_many_subdomains_urls_are_included_in_the_scope_for_this_testing_.0.$~20.0.1">3-5</span>
                          </label>
                        </li>
                        <li className="hs-form-radio" role="radio" data-reactid=".hbspt-forms-0.1:$7.$how_many_subdomains_urls_are_included_in_the_scope_for_this_testing_.0.$30 or more">
                          <label
                            htmlFor="how_many_subdomains_urls_are_included_in_the_scope_for_this_testing_2-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                            className="hs-form-radio-display"
                            data-reactid=".hbspt-forms-0.1:$7.$how_many_subdomains_urls_are_included_in_the_scope_for_this_testing_.0.$30 or more.0"
                          >
                            <input
                              id="how_many_subdomains_urls_are_included_in_the_scope_for_this_testing_2-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"

                              type="radio"
                              name="how_many_subdomains_urls_are_included_in_the_scope_for_this_testing_"
                              value="30 or more"
                              aria-labelledby="label-how_many_subdomains_urls_are_included_in_the_scope_for_this_testing_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              data-reactid=".hbspt-forms-0.1:$7.$how_many_subdomains_urls_are_included_in_the_scope_for_this_testing_.0.$30 or more.0.0"
                            />
                            <span data-reactid=".hbspt-forms-0.1:$7.$how_many_subdomains_urls_are_included_in_the_scope_for_this_testing_.0.$30 or more.0.1">more than 5</span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>


                <div className="col-lg-12 radio-input">
                  <div className="hs_how_many_unique_input_fields_and_pages_does_the_application_s_have_ hs-how_many_unique_input_fields_and_pages_does_the_application_s_have_ hs-fieldtype-radio field hs-form-field" data-reactid=".hbspt-forms-0.1:$8">
                    <label
                      id="label-how_many_unique_input_fields_and_pages_does_the_application_s_have_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                      className=""
                      placeholder="Enter your How many unique input fields and pages does the web application(s) have?"
                      htmlFor="how_many_unique_input_fields_and_pages_does_the_application_s_have_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                      data-reactid=".hbspt-forms-0.1:$8.0"
                    >
                      <span data-reactid=".hbspt-forms-0.1:$8.0.0">How many unique input fields and pages does the web application(s) have?</span>
                    </label>
                    <legend className="hs-field-desc" data-reactid=".hbspt-forms-0.1:$8.1"></legend>
                    <div className="input" data-reactid=".hbspt-forms-0.1:$8.$how_many_unique_input_fields_and_pages_does_the_application_s_have_">
                      <ul role="checkbox" className="inputs-list multi-container" data-reactid=".hbspt-forms-0.1:$8.$how_many_unique_input_fields_and_pages_does_the_application_s_have_.0">
                        <li className="hs-form-radio" role="radio" data-reactid=".hbspt-forms-0.1:$8.$how_many_unique_input_fields_and_pages_does_the_application_s_have_.0.$Less than 50">
                          <label
                            htmlFor="how_many_unique_input_fields_and_pages_does_the_application_s_have_0-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                            className="hs-form-radio-display"
                            data-reactid=".hbspt-forms-0.1:$8.$how_many_unique_input_fields_and_pages_does_the_application_s_have_.0.$Less than 50.0"
                          >
                            <input
                              id="how_many_unique_input_fields_and_pages_does_the_application_s_have_0-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"

                              type="radio"
                              name="how_many_unique_input_fields_and_pages_does_the_application_s_have_"
                              value="Less than 50"
                              aria-labelledby="label-how_many_unique_input_fields_and_pages_does_the_application_s_have_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              data-reactid=".hbspt-forms-0.1:$8.$how_many_unique_input_fields_and_pages_does_the_application_s_have_.0.$Less than 50.0.0"
                            />
                            <span data-reactid=".hbspt-forms-0.1:$8.$how_many_unique_input_fields_and_pages_does_the_application_s_have_.0.$Less than 50.0.1">Less than 50</span>
                          </label>
                        </li>
                        <li className="hs-form-radio" role="radio" data-reactid=".hbspt-forms-0.1:$8.$how_many_unique_input_fields_and_pages_does_the_application_s_have_.0.$50-100">
                          <label
                            htmlFor="how_many_unique_input_fields_and_pages_does_the_application_s_have_1-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                            className="hs-form-radio-display"
                            data-reactid=".hbspt-forms-0.1:$8.$how_many_unique_input_fields_and_pages_does_the_application_s_have_.0.$50-100.0"
                          >
                            <input
                              id="how_many_unique_input_fields_and_pages_does_the_application_s_have_1-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"

                              type="radio"
                              name="how_many_unique_input_fields_and_pages_does_the_application_s_have_"
                              value="50-100"
                              aria-labelledby="label-how_many_unique_input_fields_and_pages_does_the_application_s_have_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              data-reactid=".hbspt-forms-0.1:$8.$how_many_unique_input_fields_and_pages_does_the_application_s_have_.0.$50-100.0.0"
                            />
                            <span data-reactid=".hbspt-forms-0.1:$8.$how_many_unique_input_fields_and_pages_does_the_application_s_have_.0.$50-100.0.1">50-100</span>
                          </label>
                        </li>
                        <li className="hs-form-radio" role="radio" data-reactid=".hbspt-forms-0.1:$8.$how_many_unique_input_fields_and_pages_does_the_application_s_have_.0.$more than 100">
                          <label
                            htmlFor="how_many_unique_input_fields_and_pages_does_the_application_s_have_2-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                            className="hs-form-radio-display"
                            data-reactid=".hbspt-forms-0.1:$8.$how_many_unique_input_fields_and_pages_does_the_application_s_have_.0.$more than 100.0"
                          >
                            <input
                              id="how_many_unique_input_fields_and_pages_does_the_application_s_have_2-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"

                              type="radio"
                              name="how_many_unique_input_fields_and_pages_does_the_application_s_have_"
                              value="more than 100"
                              aria-labelledby="label-how_many_unique_input_fields_and_pages_does_the_application_s_have_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              data-reactid=".hbspt-forms-0.1:$8.$how_many_unique_input_fields_and_pages_does_the_application_s_have_.0.$more than 100.0.0"
                            />
                            <span data-reactid=".hbspt-forms-0.1:$8.$how_many_unique_input_fields_and_pages_does_the_application_s_have_.0.$more than 100.0.1">more than 100</span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 radio-input">
                  <div className="hs_api_documentation hs-api_documentation hs-fieldtype-radio field hs-form-field" data-reactid=".hbspt-forms-0.1:$9">
                    <label id="label-api_documentation-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" className="" placeholder="Enter your Are there APIs and will API documentation be available for the pentester if needed?" htmlFor="api_documentation-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" data-reactid=".hbspt-forms-0.1:$9.0">

                      <span data-reactid=".hbspt-forms-0.1:$9.0.0">Are there APIs and will API documentation be available for the pentester if needed?
                      </span>

                      <span className="hs-form-required" data-reactid=".hbspt-forms-0.1:$9.0.1">*
                      </span>
                    </label>
                    <legend className="hs-field-desc" data-reactid=".hbspt-forms-0.1:$9.1">
                    </legend>

                    <div className="input" data-reactid=".hbspt-forms-0.1:$9.$api_documentation">
                      <ul required="" role="checkbox" className="inputs-list multi-container" data-reactid=".hbspt-forms-0.1:$9.$api_documentation.0">
                        <li className="hs-form-radio" role="radio" data-reactid=".hbspt-forms-0.1:$9.$api_documentation.0.$Yes">
                          <label htmlFor="api_documentation0-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" className="hs-form-radio-display" data-reactid=".hbspt-forms-0.1:$9.$api_documentation.0.$Yes.0">
                            <input id="api_documentation0-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" type="radio" name="api_documentation" value="Yes" aria-labelledby="label-api_documentation-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" data-reactid=".hbspt-forms-0.1:$9.$api_documentation.0.$Yes.0.0" />

                            <span data-reactid=".hbspt-forms-0.1:$9.$api_documentation.0.$Yes.0.1">Yes
                            </span>
                          </label></li>
                        <li className="hs-form-radio" role="radio" data-reactid=".hbspt-forms-0.1:$9.$api_documentation.0.$No">
                          <label htmlFor="api_documentation1-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" className="hs-form-radio-display" data-reactid=".hbspt-forms-0.1:$9.$api_documentation.0.$No.0">
                            <input id="api_documentation1-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" type="radio" name="api_documentation" value="No" aria-labelledby="label-api_documentation-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" data-reactid=".hbspt-forms-0.1:$9.$api_documentation.0.$No.0.0" />

                            <span data-reactid=".hbspt-forms-0.1:$9.$api_documentation.0.$No.0.1">No
                            </span>
                          </label></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 radio-input">
                  <div className="hs_user_roles hs-user_roles hs-fieldtype-radio field hs-form-field" data-reactid=".hbspt-forms-0.1:$10">
                    <label
                      id="label-user_roles-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                      className=""
                      placeholder="Enter your How many user roles will be included in the testing?"
                      htmlFor="user_roles-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                      data-reactid=".hbspt-forms-0.1:$10.0"
                    >
                      <span data-reactid=".hbspt-forms-0.1:$10.0.0">How many user roles will be included in the testing?</span><span className="hs-form-required" data-reactid=".hbspt-forms-0.1:$10.0.1">*</span>
                    </label>
                    <legend className="hs-field-desc" data-reactid=".hbspt-forms-0.1:$10.1"></legend>
                    <div className="input" data-reactid=".hbspt-forms-0.1:$10.$user_roles">
                      <ul required="" role="checkbox" className="inputs-list multi-container" data-reactid=".hbspt-forms-0.1:$10.$user_roles.0">
                        <li className="hs-form-radio" role="radio" data-reactid=".hbspt-forms-0.1:$10.$user_roles.0.$1-2">
                          <label htmlFor="user_roles0-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" className="hs-form-radio-display" data-reactid=".hbspt-forms-0.1:$10.$user_roles.0.$1-2.0">
                            <input
                              id="user_roles0-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              type="radio"
                              name="user_roles"
                              value="1-2"
                              aria-labelledby="label-user_roles-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              data-reactid=".hbspt-forms-0.1:$10.$user_roles.0.$1-2.0.0"
                            />
                            <span data-reactid=".hbspt-forms-0.1:$10.$user_roles.0.$1-2.0.1">1-2</span>
                          </label>
                        </li>
                        <li className="hs-form-radio" role="radio" data-reactid=".hbspt-forms-0.1:$10.$user_roles.0.$2-3">
                          <label htmlFor="user_roles1-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" className="hs-form-radio-display" data-reactid=".hbspt-forms-0.1:$10.$user_roles.0.$2-3.0">
                            <input
                              id="user_roles1-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              className="hs-input"
                              type="radio"
                              name="user_roles"
                              value="2-3"
                              aria-labelledby="label-user_roles-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              data-reactid=".hbspt-forms-0.1:$10.$user_roles.0.$2-3.0.0"
                            />
                            <span data-reactid=".hbspt-forms-0.1:$10.$user_roles.0.$2-3.0.1">2-3</span>
                          </label>
                        </li>
                        <li className="hs-form-radio" role="radio" data-reactid=".hbspt-forms-0.1:$10.$user_roles.0.$Other">
                          <label htmlFor="user_roles2-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" className="hs-form-radio-display" data-reactid=".hbspt-forms-0.1:$10.$user_roles.0.$Other.0">
                            <input
                              id="user_roles2-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              className="hs-input"
                              type="radio"
                              name="user_roles"
                              value="Other"
                              aria-labelledby="label-user_roles-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              data-reactid=".hbspt-forms-0.1:$10.$user_roles.0.$Other.0.0"
                            />
                            <span data-reactid=".hbspt-forms-0.1:$10.$user_roles.0.$Other.0.1">Other</span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>


                <div className="col-lg-12 radio-input">
                  <label
                    id="label-provide_login-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                    className=""
                    placeholder='Enter your Can you provide a login for each role for testing? (OWASP 2017 - A5 - Broken Access Control) If none provided, it will be tested from a "blackbox" perspective.'
                    htmlFor="provide_login-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                    data-reactid=".hbspt-forms-0.1:$11.0"
                  >
                    <span data-reactid=".hbspt-forms-0.1:$11.0.0">Can you provide a login for each role for testing? (OWASP 2017 - A5 - Broken Access Control) If none provided, it will be tested from a "blackbox" perspective.</span>
                    <span className="hs-form-required" data-reactid=".hbspt-forms-0.1:$11.0.1">*</span>
                  </label>

                  <div className="input" data-reactid=".hbspt-forms-0.1:$11.$provide_login">
                    <ul required="" role="checkbox" className="inputs-list multi-container" data-reactid=".hbspt-forms-0.1:$11.$provide_login.0">
                      <li className="hs-form-radio" role="radio" data-reactid=".hbspt-forms-0.1:$11.$provide_login.0.$Yes">
                        <label htmlFor="provide_login0-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" className="hs-form-radio-display" data-reactid=".hbspt-forms-0.1:$11.$provide_login.0.$Yes.0">
                          <input id="provide_login0-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" className="hs-input " type="radio" name="provide_login" value="Yes" aria-labelledby="label-provide_login-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" data-reactid=".hbspt-forms-0.1:$11.$provide_login.0.$Yes.0.0" />

                          <span data-reactid=".hbspt-forms-0.1:$11.$provide_login.0.$Yes.0.1">Yes
                          </span>
                        </label></li>
                      <li className="hs-form-radio" role="radio" data-reactid=".hbspt-forms-0.1:$11.$provide_login.0.$No">
                        <label htmlFor="provide_login1-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" className="hs-form-radio-display" data-reactid=".hbspt-forms-0.1:$11.$provide_login.0.$No.0">
                          <input id="provide_login1-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" className="hs-input " type="radio" name="provide_login" value="No" aria-labelledby="label-provide_login-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" data-reactid=".hbspt-forms-0.1:$11.$provide_login.0.$No.0.0" />

                          <span data-reactid=".hbspt-forms-0.1:$11.$provide_login.0.$No.0.1">No
                          </span>
                        </label></li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div
                    className="hs_please_provide_any_additional_details_that_may_help_us_understand_what_you_are_looking_for_in_the_w hs-please_provide_any_additional_details_that_may_help_us_understand_what_you_are_looking_for_in_the_w hs-fieldtype-textarea field hs-form-field"
                    data-reactid=".hbspt-forms-0.1:$12"
                  >
                    <label
                      id="label-please_provide_any_additional_details_that_may_help_us_understand_what_you_are_looking_for_in_the_w-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                      className=""
                      placeholder="Enter your Please provide any additional details that may help us understand what you are looking for in the web application penetration test."
                      htmlFor="please_provide_any_additional_details_that_may_help_us_understand_what_you_are_looking_for_in_the_w-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                      data-reactid=".hbspt-forms-0.1:$12.0"
                    >
                      <span data-reactid=".hbspt-forms-0.1:$12.0.0">Please provide any additional details that may help us understand what you are looking for in the web application penetration test.</span>
                    </label>
                    <legend className="hs-field-desc" data-reactid=".hbspt-forms-0.1:$12.1"></legend>
                    <div className="input" data-reactid=".hbspt-forms-0.1:$12.$please_provide_any_additional_details_that_may_help_us_understand_what_you_are_looking_for_in_the_w">
                      <textarea
                        id="please_provide_any_additional_details_that_may_help_us_understand_what_you_are_looking_for_in_the_w-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                        className="hs-input"
                        name="please_provide_any_additional_details_that_may_help_us_understand_what_you_are_looking_for_in_the_w"
                        placeholder=""
                        data-reactid=".hbspt-forms-0.1:$12.$please_provide_any_additional_details_that_may_help_us_understand_what_you_are_looking_for_in_the_w.0"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div data-reactid=".hbspt-forms-0.1:$13">
                    <div className="hs-richtext hs-main-font-element" data-reactid=".hbspt-forms-0.1:$13.0">
                      <h1><span>Mobile Application Section</span></h1>
                      <p>
                        <em><span>Define requirements for testing iOS and Android applications. Please add as much detail as you can in your response.</span></em>
                      </p>
                    </div>
                  </div>

                  <div className="hs_please_enter_the_link_for_your_ios_application_on_the_app_store_ hs-please_enter_the_link_for_your_ios_application_on_the_app_store_ hs-fieldtype-text field hs-form-field" data-reactid=".hbspt-forms-0.1:$14">
                    <label id="label-please_enter_the_link_for_your_ios_application_on_the_app_store_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" className="" placeholder="Enter your Please enter the link for the iOS application you want to be tested on the app store." htmlFor="please_enter_the_link_for_your_ios_application_on_the_app_store_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" data-reactid=".hbspt-forms-0.1:$14.0">

                      <span data-reactid=".hbspt-forms-0.1:$14.0.0">Please enter the link for the iOS application you want to be tested on the app store.
                      </span>
                    </label>
                    <legend className="hs-field-desc" data-reactid=".hbspt-forms-0.1:$14.1">example: https://www.apple.com/ios/app-store/<strong>my-app</strong>/
                    </legend>

                    <div className="input" data-reactid=".hbspt-forms-0.1:$14.$please_enter_the_link_for_your_ios_application_on_the_app_store_">
                      <input type="text" name="please_enter_the_link_for_your_ios_application_on_the_app_store_" placeholder="https://www.apple.com/ios/app-store/" data-reactid=".hbspt-forms-0.1:$14.$please_enter_the_link_for_your_ios_application_on_the_app_store_.0" />
                    </div>
                  </div>

                </div>

                <div className="col-lg-12">
                  <div className="hs_please_enter_the_link_for_the_android_application_that_you_want_to_be_tested_on_the_google_play_sto hs-please_enter_the_link_for_the_android_application_that_you_want_to_be_tested_on_the_google_play_sto hs-fieldtype-text field hs-form-field" data-reactid=".hbspt-forms-0.1:$15">
                    <label id="label-please_enter_the_link_for_the_android_application_that_you_want_to_be_tested_on_the_google_play_sto-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" className="" placeholder="Enter your Please enter the link for the Android application that you want to be tested on the Google Play Store." htmlFor="please_enter_the_link_for_the_android_application_that_you_want_to_be_tested_on_the_google_play_sto-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" data-reactid=".hbspt-forms-0.1:$15.0">

                      <span data-reactid=".hbspt-forms-0.1:$15.0.0">Please enter the link for the Android application that you want to be tested on the Google Play Store.
                      </span>
                    </label>
                    <legend className="hs-field-desc" data-reactid=".hbspt-forms-0.1:$15.1">example: https://play.google.com/store/apps/details?id=com.<strong>myapp</strong>
                    </legend>

                    <div className="input" data-reactid=".hbspt-forms-0.1:$15.$please_enter_the_link_for_the_android_application_that_you_want_to_be_tested_on_the_google_play_sto">
                      <input id="please_enter_the_link_for_the_android_application_that_you_want_to_be_tested_on_the_google_play_sto-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" type="text" name="please_enter_the_link_for_the_android_application_that_you_want_to_be_tested_on_the_google_play_sto" placeholder="https://play.google.com/store/" data-reactid=".hbspt-forms-0.1:$15.$please_enter_the_link_for_the_android_application_that_you_want_to_be_tested_on_the_google_play_sto.0" />
                    </div>
                  </div>
                </div>


                <div className="col-lg-12">
                  <div
                    className="hs_please_provide_any_additional_details_you_feel_would_help_us_better_unerstand_what_you_are_looking_ hs-please_provide_any_additional_details_you_feel_would_help_us_better_unerstand_what_you_are_looking_ hs-fieldtype-textarea field hs-form-field"
                    data-reactid=".hbspt-forms-0.1:$16"
                  >
                    <label
                      id="label-please_provide_any_additional_details_you_feel_would_help_us_better_unerstand_what_you_are_looking_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                      className=""
                      placeholder="Enter your Please provide any additional details you feel would help us better understand what you are looking for from this mobile application penetration test."
                      htmlFor="please_provide_any_additional_details_you_feel_would_help_us_better_unerstand_what_you_are_looking_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                      data-reactid=".hbspt-forms-0.1:$16.0"
                    >
                      <span data-reactid=".hbspt-forms-0.1:$16.0.0">Please provide any additional details you feel would help us better understand what you are looking for from this mobile application penetration test.</span>
                    </label>
                    <legend className="hs-field-desc" data-reactid=".hbspt-forms-0.1:$16.1"></legend>
                    <div className="input" data-reactid=".hbspt-forms-0.1:$16.$please_provide_any_additional_details_you_feel_would_help_us_better_unerstand_what_you_are_looking_">
                      <textarea
                        id="please_provide_any_additional_details_you_feel_would_help_us_better_unerstand_what_you_are_looking_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                        className="hs-input"
                        name="please_provide_any_additional_details_you_feel_would_help_us_better_unerstand_what_you_are_looking_"
                        placeholder=""
                        data-reactid=".hbspt-forms-0.1:$16.$please_provide_any_additional_details_you_feel_would_help_us_better_unerstand_what_you_are_looking_.0"
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div data-reactid=".hbspt-forms-0.1:$17">
                      <div className="hs-richtext hs-main-font-element" data-reactid=".hbspt-forms-0.1:$17.0">
                        <h1><span>Network Section</span></h1>
                        <p>
                          <em><span>Define requirements for testing network and unique environments. Please add as much detail as you can in your response.</span> </em>
                        </p>
                      </div>
                    </div>

                  </div>


                  <div className="col-lg-12 radio-input">
                    <div
                      className="hs_how_many_unique_network_segments_are_included_in_the_scope_for_this_test_ hs-how_many_unique_network_segments_are_included_in_the_scope_for_this_test_ hs-fieldtype-radio field hs-form-field"
                      data-reactid=".hbspt-forms-0.1:$18"
                    >
                      <label
                        id="label-how_many_unique_network_segments_are_included_in_the_scope_for_this_test_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                        className=""
                        placeholder="Enter your How many unique network segments are included in the scope for this test?"
                        htmlFor="how_many_unique_network_segments_are_included_in_the_scope_for_this_test_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                        data-reactid=".hbspt-forms-0.1:$18.0"
                      >
                        <span data-reactid=".hbspt-forms-0.1:$18.0.0">How many unique network segments are included in the scope for this test?</span>
                      </label>
                      <legend className="hs-field-desc" data-reactid=".hbspt-forms-0.1:$18.1"></legend>
                      <div className="input" data-reactid=".hbspt-forms-0.1:$18.$how_many_unique_network_segments_are_included_in_the_scope_for_this_test_">
                        <ul role="checkbox" className="inputs-list multi-container" data-reactid=".hbspt-forms-0.1:$18.$how_many_unique_network_segments_are_included_in_the_scope_for_this_test_.0">
                          <li className="hs-form-radio" role="radio" data-reactid=".hbspt-forms-0.1:$18.$how_many_unique_network_segments_are_included_in_the_scope_for_this_test_.0.$1-2">
                            <label
                              htmlFor="how_many_unique_network_segments_are_included_in_the_scope_for_this_test_0-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              className="hs-form-radio-display"
                              data-reactid=".hbspt-forms-0.1:$18.$how_many_unique_network_segments_are_included_in_the_scope_for_this_test_.0.$1-2.0"
                            >
                              <input
                                id="how_many_unique_network_segments_are_included_in_the_scope_for_this_test_0-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                                className="hs-input"
                                type="radio"
                                name="how_many_unique_network_segments_are_included_in_the_scope_for_this_test_"
                                value="1-2"
                                aria-labelledby="label-how_many_unique_network_segments_are_included_in_the_scope_for_this_test_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                                data-reactid=".hbspt-forms-0.1:$18.$how_many_unique_network_segments_are_included_in_the_scope_for_this_test_.0.$1-2.0.0"
                              />
                              <span data-reactid=".hbspt-forms-0.1:$18.$how_many_unique_network_segments_are_included_in_the_scope_for_this_test_.0.$1-2.0.1">1-2</span>
                            </label>
                          </li>
                          <li className="hs-form-radio" role="radio" data-reactid=".hbspt-forms-0.1:$18.$how_many_unique_network_segments_are_included_in_the_scope_for_this_test_.0.$3-4">
                            <label
                              htmlFor="how_many_unique_network_segments_are_included_in_the_scope_for_this_test_1-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              className="hs-form-radio-display"
                              data-reactid=".hbspt-forms-0.1:$18.$how_many_unique_network_segments_are_included_in_the_scope_for_this_test_.0.$3-4.0"
                            >
                              <input
                                id="how_many_unique_network_segments_are_included_in_the_scope_for_this_test_1-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                                className="hs-input"
                                type="radio"
                                name="how_many_unique_network_segments_are_included_in_the_scope_for_this_test_"
                                value="3-4"
                                aria-labelledby="label-how_many_unique_network_segments_are_included_in_the_scope_for_this_test_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                                data-reactid=".hbspt-forms-0.1:$18.$how_many_unique_network_segments_are_included_in_the_scope_for_this_test_.0.$3-4.0.0"
                              />
                              <span data-reactid=".hbspt-forms-0.1:$18.$how_many_unique_network_segments_are_included_in_the_scope_for_this_test_.0.$3-4.0.1">3-4</span>
                            </label>
                          </li>
                          <li className="hs-form-radio" role="radio" data-reactid=".hbspt-forms-0.1:$18.$how_many_unique_network_segments_are_included_in_the_scope_for_this_test_.0.$5 or more">
                            <label
                              htmlFor="how_many_unique_network_segments_are_included_in_the_scope_for_this_test_2-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              className="hs-form-radio-display"
                              data-reactid=".hbspt-forms-0.1:$18.$how_many_unique_network_segments_are_included_in_the_scope_for_this_test_.0.$5 or more.0"
                            >
                              <input
                                id="how_many_unique_network_segments_are_included_in_the_scope_for_this_test_2-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                                className="hs-input"
                                type="radio"
                                name="how_many_unique_network_segments_are_included_in_the_scope_for_this_test_"
                                value="5 or more"
                                aria-labelledby="label-how_many_unique_network_segments_are_included_in_the_scope_for_this_test_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                                data-reactid=".hbspt-forms-0.1:$18.$how_many_unique_network_segments_are_included_in_the_scope_for_this_test_.0.$5 or more.0.0"
                              />
                              <span data-reactid=".hbspt-forms-0.1:$18.$how_many_unique_network_segments_are_included_in_the_scope_for_this_test_.0.$5 or more.0.1">5 or more</span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>

                  </div>

                  <div className="col-lg-12 radio-input">

                    <div
                      className="hs_how_many_unique_network_devices_would_you_estimate_will_be_included_in_the_scope_of_this_test_ hs-how_many_unique_network_devices_would_you_estimate_will_be_included_in_the_scope_of_this_test_ hs-fieldtype-radio field hs-form-field"
                      data-reactid=".hbspt-forms-0.1:$19"
                    >
                      <label
                        id="label-how_many_unique_network_devices_would_you_estimate_will_be_included_in_the_scope_of_this_test_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                        className=""
                        placeholder="Enter your How many unique network devices would you estimate will be included in the scope of this test?"
                        htmlFor="how_many_unique_network_devices_would_you_estimate_will_be_included_in_the_scope_of_this_test_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                        data-reactid=".hbspt-forms-0.1:$19.0"
                      >
                        <span data-reactid=".hbspt-forms-0.1:$19.0.0">How many unique network devices would you estimate will be included in the scope of this test?</span>
                      </label>
                      <legend className="hs-field-desc" data-reactid=".hbspt-forms-0.1:$19.1"></legend>
                      <div className="input" data-reactid=".hbspt-forms-0.1:$19.$how_many_unique_network_devices_would_you_estimate_will_be_included_in_the_scope_of_this_test_">
                        <ul role="checkbox" className="inputs-list multi-container" data-reactid=".hbspt-forms-0.1:$19.$how_many_unique_network_devices_would_you_estimate_will_be_included_in_the_scope_of_this_test_.0">
                          <li className="hs-form-radio" role="radio" data-reactid=".hbspt-forms-0.1:$19.$how_many_unique_network_devices_would_you_estimate_will_be_included_in_the_scope_of_this_test_.0.$Under 50">
                            <label
                              htmlFor="how_many_unique_network_devices_would_you_estimate_will_be_included_in_the_scope_of_this_test_0-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              className="hs-form-radio-display"
                              data-reactid=".hbspt-forms-0.1:$19.$how_many_unique_network_devices_would_you_estimate_will_be_included_in_the_scope_of_this_test_.0.$Under 50.0"
                            >
                              <input
                                id="how_many_unique_network_devices_would_you_estimate_will_be_included_in_the_scope_of_this_test_0-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                                className="hs-input"
                                type="radio"
                                name="how_many_unique_network_devices_would_you_estimate_will_be_included_in_the_scope_of_this_test_"
                                value="Under 50"
                                aria-labelledby="label-how_many_unique_network_devices_would_you_estimate_will_be_included_in_the_scope_of_this_test_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                                data-reactid=".hbspt-forms-0.1:$19.$how_many_unique_network_devices_would_you_estimate_will_be_included_in_the_scope_of_this_test_.0.$Under 50.0.0"
                              />
                              <span data-reactid=".hbspt-forms-0.1:$19.$how_many_unique_network_devices_would_you_estimate_will_be_included_in_the_scope_of_this_test_.0.$Under 50.0.1">Under 50</span>
                            </label>
                          </li>
                          <li className="hs-form-radio" role="radio" data-reactid=".hbspt-forms-0.1:$19.$how_many_unique_network_devices_would_you_estimate_will_be_included_in_the_scope_of_this_test_.0.$50 - 200">
                            <label
                              htmlFor="how_many_unique_network_devices_would_you_estimate_will_be_included_in_the_scope_of_this_test_1-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              className="hs-form-radio-display"
                              data-reactid=".hbspt-forms-0.1:$19.$how_many_unique_network_devices_would_you_estimate_will_be_included_in_the_scope_of_this_test_.0.$50 - 200.0"
                            >
                              <input
                                id="how_many_unique_network_devices_would_you_estimate_will_be_included_in_the_scope_of_this_test_1-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                                className="hs-input"
                                type="radio"
                                name="how_many_unique_network_devices_would_you_estimate_will_be_included_in_the_scope_of_this_test_"
                                value="50 - 200"
                                aria-labelledby="label-how_many_unique_network_devices_would_you_estimate_will_be_included_in_the_scope_of_this_test_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                                data-reactid=".hbspt-forms-0.1:$19.$how_many_unique_network_devices_would_you_estimate_will_be_included_in_the_scope_of_this_test_.0.$50 - 200.0.0"
                              />
                              <span data-reactid=".hbspt-forms-0.1:$19.$how_many_unique_network_devices_would_you_estimate_will_be_included_in_the_scope_of_this_test_.0.$50 - 200.0.1">50 - 200</span>
                            </label>
                          </li>
                          <li className="hs-form-radio" role="radio" data-reactid=".hbspt-forms-0.1:$19.$how_many_unique_network_devices_would_you_estimate_will_be_included_in_the_scope_of_this_test_.0.$Over 200">
                            <label
                              htmlFor="how_many_unique_network_devices_would_you_estimate_will_be_included_in_the_scope_of_this_test_2-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              className="hs-form-radio-display"
                              data-reactid=".hbspt-forms-0.1:$19.$how_many_unique_network_devices_would_you_estimate_will_be_included_in_the_scope_of_this_test_.0.$Over 200.0"
                            >
                              <input
                                id="how_many_unique_network_devices_would_you_estimate_will_be_included_in_the_scope_of_this_test_2-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                                className="hs-input"
                                type="radio"
                                name="how_many_unique_network_devices_would_you_estimate_will_be_included_in_the_scope_of_this_test_"
                                value="Over 200"
                                aria-labelledby="label-how_many_unique_network_devices_would_you_estimate_will_be_included_in_the_scope_of_this_test_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                                data-reactid=".hbspt-forms-0.1:$19.$how_many_unique_network_devices_would_you_estimate_will_be_included_in_the_scope_of_this_test_.0.$Over 200.0.0"
                              />
                              <span data-reactid=".hbspt-forms-0.1:$19.$how_many_unique_network_devices_would_you_estimate_will_be_included_in_the_scope_of_this_test_.0.$Over 200.0.1">Over 200</span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div data-reactid=".hbspt-forms-0.1:$20">
                        <div className="hs-richtext hs-main-font-element" data-reactid=".hbspt-forms-0.1:$20.0">
                          <h1><span>Targets, Objectives, and Conditions of Testing</span></h1>
                          <p>
                            <em><span>This section is to define the goals, objectives and some of the conditions and limitations of the testing.</span> </em>
                          </p>
                        </div>
                      </div>

                      <div className="hs_what_is_the_target_of_the_penetration_test_ hs-what_is_the_target_of_the_penetration_test_ hs-fieldtype-checkbox field hs-form-field" data-reactid=".hbspt-forms-0.1:$21">
                        <label
                          id="label-what_is_the_target_of_the_penetration_test_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                          className=""
                          placeholder="Enter your What is the &amp;quot;target&amp;quot; of the penetration test?"
                          htmlFor="what_is_the_target_of_the_penetration_test_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                          data-reactid=".hbspt-forms-0.1:$21.0"
                        >
                          <span data-reactid=".hbspt-forms-0.1:$21.0.0">What is the "target" of the penetration test?</span><span className="hs-form-required" data-reactid=".hbspt-forms-0.1:$21.0.1">*</span>
                        </label>
                        <legend className="hs-field-desc" data-reactid=".hbspt-forms-0.1:$21.1"></legend>
                        <div className="input" data-reactid=".hbspt-forms-0.1:$21.$what_is_the_target_of_the_penetration_test_">
                          <ul required="" role="checkbox" className="inputs-list multi-container" data-reactid=".hbspt-forms-0.1:$21.$what_is_the_target_of_the_penetration_test_.0">
                            <li className="hs-form-checkbox" role="checkbox" data-reactid=".hbspt-forms-0.1:$21.$what_is_the_target_of_the_penetration_test_.0.$An Application">
                              <label
                                htmlFor="what_is_the_target_of_the_penetration_test_0-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                                className="hs-form-checkbox-display"
                                data-reactid=".hbspt-forms-0.1:$21.$what_is_the_target_of_the_penetration_test_.0.$An Application.0"
                              >
                                <input
                                  id="what_is_the_target_of_the_penetration_test_0-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                                  className="hs-input"
                                  type="checkbox"
                                  name="what_is_the_target_of_the_penetration_test_"
                                  value="An Application"
                                  aria-labelledby="label-what_is_the_target_of_the_penetration_test_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                                  data-reactid=".hbspt-forms-0.1:$21.$what_is_the_target_of_the_penetration_test_.0.$An Application.0.0"
                                />
                                <span data-reactid=".hbspt-forms-0.1:$21.$what_is_the_target_of_the_penetration_test_.0.$An Application.0.1">A Web Application</span>
                              </label>
                            </li>
                            <li className="hs-form-checkbox" role="checkbox" data-reactid=".hbspt-forms-0.1:$21.$what_is_the_target_of_the_penetration_test_.0.$Other">
                              <label htmlFor="what_is_the_target_of_the_penetration_test_1-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" className="hs-form-checkbox-display" data-reactid=".hbspt-forms-0.1:$21.$what_is_the_target_of_the_penetration_test_.0.$Other.0">
                                <input
                                  id="what_is_the_target_of_the_penetration_test_1-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                                  className="hs-input"
                                  type="checkbox"
                                  name="what_is_the_target_of_the_penetration_test_"
                                  value="Other"
                                  aria-labelledby="label-what_is_the_target_of_the_penetration_test_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                                  data-reactid=".hbspt-forms-0.1:$21.$what_is_the_target_of_the_penetration_test_.0.$Other.0.0"
                                />
                                <span data-reactid=".hbspt-forms-0.1:$21.$what_is_the_target_of_the_penetration_test_.0.$Other.0.1">A Mobile Application</span>
                              </label>
                            </li>
                            <li className="hs-form-checkbox" role="checkbox" data-reactid=".hbspt-forms-0.1:$21.$what_is_the_target_of_the_penetration_test_.0.$A Website">
                              <label htmlFor="what_is_the_target_of_the_penetration_test_2-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" className="hs-form-checkbox-display" data-reactid=".hbspt-forms-0.1:$21.$what_is_the_target_of_the_penetration_test_.0.$A Website.0">
                                <input
                                  id="what_is_the_target_of_the_penetration_test_2-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                                  className="hs-input"
                                  type="checkbox"
                                  name="what_is_the_target_of_the_penetration_test_"
                                  value="A Website"
                                  aria-labelledby="label-what_is_the_target_of_the_penetration_test_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                                  data-reactid=".hbspt-forms-0.1:$21.$what_is_the_target_of_the_penetration_test_.0.$A Website.0.0"
                                />
                                <span data-reactid=".hbspt-forms-0.1:$21.$what_is_the_target_of_the_penetration_test_.0.$A Website.0.1">A Website</span>
                              </label>
                            </li>
                            <li className="hs-form-checkbox" role="checkbox" data-reactid=".hbspt-forms-0.1:$21.$what_is_the_target_of_the_penetration_test_.0.$A Network">
                              <label htmlFor="what_is_the_target_of_the_penetration_test_3-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" className="hs-form-checkbox-display" data-reactid=".hbspt-forms-0.1:$21.$what_is_the_target_of_the_penetration_test_.0.$A Network.0">
                                <input
                                  id="what_is_the_target_of_the_penetration_test_3-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                                  className="hs-input"
                                  type="checkbox"
                                  name="what_is_the_target_of_the_penetration_test_"
                                  value="A Network"
                                  aria-labelledby="label-what_is_the_target_of_the_penetration_test_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                                  data-reactid=".hbspt-forms-0.1:$21.$what_is_the_target_of_the_penetration_test_.0.$A Network.0.0"
                                />
                                <span data-reactid=".hbspt-forms-0.1:$21.$what_is_the_target_of_the_penetration_test_.0.$A Network.0.1">A Network</span>
                              </label>
                            </li>
                            <li className="hs-form-checkbox" role="checkbox" data-reactid=".hbspt-forms-0.1:$21.$what_is_the_target_of_the_penetration_test_.0.$An Application and Network">
                              <label
                                htmlFor="what_is_the_target_of_the_penetration_test_4-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                                className="hs-form-checkbox-display"
                                data-reactid=".hbspt-forms-0.1:$21.$what_is_the_target_of_the_penetration_test_.0.$An Application and Network.0"
                              >
                                <input
                                  id="what_is_the_target_of_the_penetration_test_4-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                                  className="hs-input"
                                  type="checkbox"
                                  name="what_is_the_target_of_the_penetration_test_"
                                  value="An Application and Network"
                                  aria-labelledby="label-what_is_the_target_of_the_penetration_test_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                                  data-reactid=".hbspt-forms-0.1:$21.$what_is_the_target_of_the_penetration_test_.0.$An Application and Network.0.0"
                                />
                                <span data-reactid=".hbspt-forms-0.1:$21.$what_is_the_target_of_the_penetration_test_.0.$An Application and Network.0.1">A Web Application and Network</span>
                              </label>
                            </li>
                            <li className="hs-form-checkbox" role="checkbox" data-reactid=".hbspt-forms-0.1:$21.$what_is_the_target_of_the_penetration_test_.0.$Wireless Network">
                              <label
                                htmlFor="what_is_the_target_of_the_penetration_test_5-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                                className="hs-form-checkbox-display"
                                data-reactid=".hbspt-forms-0.1:$21.$what_is_the_target_of_the_penetration_test_.0.$Wireless Network.0"
                              >
                                <input
                                  id="what_is_the_target_of_the_penetration_test_5-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                                  className="hs-input"
                                  type="checkbox"
                                  name="what_is_the_target_of_the_penetration_test_"
                                  value="Wireless Network"
                                  aria-labelledby="label-what_is_the_target_of_the_penetration_test_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                                  data-reactid=".hbspt-forms-0.1:$21.$what_is_the_target_of_the_penetration_test_.0.$Wireless Network.0.0"
                                />
                                <span data-reactid=".hbspt-forms-0.1:$21.$what_is_the_target_of_the_penetration_test_.0.$Wireless Network.0.1">Wireless Network</span>
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>


                    </div>

                  </div>
                </div>


                <div className="col-lg-12 radio-input">
                  <div className="hs_what_are_the_objectives_ hs-what_are_the_objectives_ hs-fieldtype-checkbox field hs-form-field" data-reactid=".hbspt-forms-0.1:$22">
                    <label
                      id="label-what_are_the_objectives_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                      className=""
                      placeholder="Enter your What are the objectives?"
                      htmlFor="what_are_the_objectives_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                      data-reactid=".hbspt-forms-0.1:$22.0"
                    >
                      <span data-reactid=".hbspt-forms-0.1:$22.0.0">What are the objectives?</span><span className="hs-form-required" data-reactid=".hbspt-forms-0.1:$22.0.1">*</span>
                    </label>
                    <legend className="hs-field-desc" data-reactid=".hbspt-forms-0.1:$22.1"></legend>
                    <div className="input" data-reactid=".hbspt-forms-0.1:$22.$what_are_the_objectives_">
                      <ul required="" role="checkbox" className="inputs-list multi-container" data-reactid=".hbspt-forms-0.1:$22.$what_are_the_objectives_.0">
                        <li className="hs-form-checkbox" role="checkbox" data-reactid=".hbspt-forms-0.1:$22.$what_are_the_objectives_.0.$Map out vulnerabilities">
                          <label htmlFor="what_are_the_objectives_0-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" className="hs-form-checkbox-display" data-reactid=".hbspt-forms-0.1:$22.$what_are_the_objectives_.0.$Map out vulnerabilities.0">
                            <input
                              id="what_are_the_objectives_0-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              className="hs-input"
                              type="checkbox"
                              name="what_are_the_objectives_"
                              value="Map out vulnerabilities"
                              aria-labelledby="label-what_are_the_objectives_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              data-reactid=".hbspt-forms-0.1:$22.$what_are_the_objectives_.0.$Map out vulnerabilities.0.0"
                            />
                            <span data-reactid=".hbspt-forms-0.1:$22.$what_are_the_objectives_.0.$Map out vulnerabilities.0.1">Identify and report vulnerabilities</span>
                          </label>
                        </li>
                        <li className="hs-form-checkbox" role="checkbox" data-reactid=".hbspt-forms-0.1:$22.$what_are_the_objectives_.0.$Demonstrate that the vulnerabilities exist">
                          <label htmlFor="what_are_the_objectives_1-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" className="hs-form-checkbox-display" data-reactid=".hbspt-forms-0.1:$22.$what_are_the_objectives_.0.$Demonstrate that the vulnerabilities exist.0">
                            <input
                              id="what_are_the_objectives_1-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              className="hs-input"
                              type="checkbox"
                              name="what_are_the_objectives_"
                              value="Demonstrate that the vulnerabilities exist"
                              aria-labelledby="label-what_are_the_objectives_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              data-reactid=".hbspt-forms-0.1:$22.$what_are_the_objectives_.0.$Demonstrate that the vulnerabilities exist.0.0"
                            />
                            <span data-reactid=".hbspt-forms-0.1:$22.$what_are_the_objectives_.0.$Demonstrate that the vulnerabilities exist.0.1">Demonstrate that the vulnerabilities exist</span>
                          </label>
                        </li>
                        <li className="hs-form-checkbox" role="checkbox" data-reactid=".hbspt-forms-0.1:$22.$what_are_the_objectives_.0.$Test our Incident Response process">
                          <label htmlFor="what_are_the_objectives_2-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" className="hs-form-checkbox-display" data-reactid=".hbspt-forms-0.1:$22.$what_are_the_objectives_.0.$Test our Incident Response process.0">
                            <input
                              id="what_are_the_objectives_2-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              className="hs-input"
                              type="checkbox"
                              name="what_are_the_objectives_"
                              value="Test our Incident Response process"
                              aria-labelledby="label-what_are_the_objectives_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              data-reactid=".hbspt-forms-0.1:$22.$what_are_the_objectives_.0.$Test our Incident Response process.0.0"
                            />
                            <span data-reactid=".hbspt-forms-0.1:$22.$what_are_the_objectives_.0.$Test our Incident Response process.0.1">Test our Incident Response process</span>
                          </label>
                        </li>
                        <li className="hs-form-checkbox" role="checkbox" data-reactid=".hbspt-forms-0.1:$22.$what_are_the_objectives_.0.$Actual exploitation of a vulnerability in a network, system or application">
                          <label
                            htmlFor="what_are_the_objectives_3-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                            className="hs-form-checkbox-display"
                            data-reactid=".hbspt-forms-0.1:$22.$what_are_the_objectives_.0.$Actual exploitation of a vulnerability in a network, system or application.0"
                          >
                            <input
                              id="what_are_the_objectives_3-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              className="hs-input"
                              type="checkbox"
                              name="what_are_the_objectives_"
                              value="Actual exploitation of a vulnerability in a network, system or application"
                              aria-labelledby="label-what_are_the_objectives_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              data-reactid=".hbspt-forms-0.1:$22.$what_are_the_objectives_.0.$Actual exploitation of a vulnerability in a network, system or application.0.0"
                            />
                            <span data-reactid=".hbspt-forms-0.1:$22.$what_are_the_objectives_.0.$Actual exploitation of a vulnerability in a network, system or application.0.1">
                              Exploitation of vulnerabilities in a network, system or application that will not impact system availability
                            </span>
                          </label>
                        </li>
                        <li
                          className="hs-form-checkbox"
                          role="checkbox"
                          data-reactid=".hbspt-forms-0.1:$22.$what_are_the_objectives_.0.$Obtain privileged access exploit buffer overflows, SQL injection, etc=1 **This level of test would carry out the exploitation of a weakness and can impact system availability"
                        >
                          <label
                            htmlFor="what_are_the_objectives_4-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                            className="hs-form-checkbox-display"
                            data-reactid=".hbspt-forms-0.1:$22.$what_are_the_objectives_.0.$Obtain privileged access exploit buffer overflows, SQL injection, etc=1 **This level of test would carry out the exploitation of a weakness and can impact system availability.0"
                          >
                            <input
                              id="what_are_the_objectives_4-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              className="hs-input"
                              type="checkbox"
                              name="what_are_the_objectives_"
                              value="Obtain privileged access exploit buffer overflows, SQL injection, etc. **This level of test would carry out the exploitation of a weakness and can impact system availability"
                              aria-labelledby="label-what_are_the_objectives_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              data-reactid=".hbspt-forms-0.1:$22.$what_are_the_objectives_.0.$Obtain privileged access exploit buffer overflows, SQL injection, etc=1 **This level of test would carry out the exploitation of a weakness and can impact system availability.0.0"
                            />
                            <span
                              data-reactid=".hbspt-forms-0.1:$22.$what_are_the_objectives_.0.$Obtain privileged access exploit buffer overflows, SQL injection, etc=1 **This level of test would carry out the exploitation of a weakness and can impact system availability.0.1"
                            >
                              Obtain privileged access, exploit buffer overflows, SQL injection, etc. **This level of test can impact system availability
                            </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>


                <div className="col-lg-12 radio-input">
                  <div className="hs_what_protocol_should_be_followed_for_alerting_on_vulnerabilities_found_ hs-what_protocol_should_be_followed_for_alerting_on_vulnerabilities_found_ hs-fieldtype-radio field hs-form-field" data-reactid=".hbspt-forms-0.1:$23">
                    <label
                      id="label-what_protocol_should_be_followed_for_alerting_on_vulnerabilities_found_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                      className=""
                      placeholder="Enter your What protocol should be followed for alerting on vulnerabilities found?"
                      htmlFor="what_protocol_should_be_followed_for_alerting_on_vulnerabilities_found_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                      data-reactid=".hbspt-forms-0.1:$23.0"
                    >
                      <span data-reactid=".hbspt-forms-0.1:$23.0.0">What protocol should be followed for alerting on vulnerabilities found?</span><span className="hs-form-required" data-reactid=".hbspt-forms-0.1:$23.0.1">*</span>
                    </label>
                    <legend className="hs-field-desc" data-reactid=".hbspt-forms-0.1:$23.1"></legend>
                    <div className="input" data-reactid=".hbspt-forms-0.1:$23.$what_protocol_should_be_followed_for_alerting_on_vulnerabilities_found_">
                      <ul required="" role="checkbox" className="inputs-list multi-container" data-reactid=".hbspt-forms-0.1:$23.$what_protocol_should_be_followed_for_alerting_on_vulnerabilities_found_.0">
                        <li className="hs-form-radio" role="radio" data-reactid=".hbspt-forms-0.1:$23.$what_protocol_should_be_followed_for_alerting_on_vulnerabilities_found_.0.$Wait until the end of testing to report all vulnerabilities">
                          <label
                            htmlFor="what_protocol_should_be_followed_for_alerting_on_vulnerabilities_found_0-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                            className="hs-form-radio-display"
                            data-reactid=".hbspt-forms-0.1:$23.$what_protocol_should_be_followed_for_alerting_on_vulnerabilities_found_.0.$Wait until the end of testing to report all vulnerabilities.0"
                          >
                            <input
                              id="what_protocol_should_be_followed_for_alerting_on_vulnerabilities_found_0-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              className="hs-input"
                              type="radio"
                              name="what_protocol_should_be_followed_for_alerting_on_vulnerabilities_found_"
                              value="Wait until the end of testing to report all vulnerabilities"
                              aria-labelledby="label-what_protocol_should_be_followed_for_alerting_on_vulnerabilities_found_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              data-reactid=".hbspt-forms-0.1:$23.$what_protocol_should_be_followed_for_alerting_on_vulnerabilities_found_.0.$Wait until the end of testing to report all vulnerabilities.0.0"
                            />
                            <span data-reactid=".hbspt-forms-0.1:$23.$what_protocol_should_be_followed_for_alerting_on_vulnerabilities_found_.0.$Wait until the end of testing to report all vulnerabilities.0.1">
                              Wait until the end of testing to report all vulnerabilities
                            </span>
                          </label>
                        </li>
                        <li className="hs-form-radio" role="radio" data-reactid=".hbspt-forms-0.1:$23.$what_protocol_should_be_followed_for_alerting_on_vulnerabilities_found_.0.$Report vulnerabilities as we find them">
                          <label
                            htmlFor="what_protocol_should_be_followed_for_alerting_on_vulnerabilities_found_1-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                            className="hs-form-radio-display"
                            data-reactid=".hbspt-forms-0.1:$23.$what_protocol_should_be_followed_for_alerting_on_vulnerabilities_found_.0.$Report vulnerabilities as we find them.0"
                          >
                            <input
                              id="what_protocol_should_be_followed_for_alerting_on_vulnerabilities_found_1-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              className="hs-input"
                              type="radio"
                              name="what_protocol_should_be_followed_for_alerting_on_vulnerabilities_found_"
                              value="Report vulnerabilities as we find them"
                              aria-labelledby="label-what_protocol_should_be_followed_for_alerting_on_vulnerabilities_found_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              data-reactid=".hbspt-forms-0.1:$23.$what_protocol_should_be_followed_for_alerting_on_vulnerabilities_found_.0.$Report vulnerabilities as we find them.0.0"
                            />
                            <span data-reactid=".hbspt-forms-0.1:$23.$what_protocol_should_be_followed_for_alerting_on_vulnerabilities_found_.0.$Report vulnerabilities as we find them.0.1">Report vulnerabilities as we find them</span>
                          </label>
                        </li>
                        <li className="hs-form-radio" role="radio" data-reactid=".hbspt-forms-0.1:$23.$what_protocol_should_be_followed_for_alerting_on_vulnerabilities_found_.0.$Daily report on the status of the testing">
                          <label
                            htmlFor="what_protocol_should_be_followed_for_alerting_on_vulnerabilities_found_2-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                            className="hs-form-radio-display"
                            data-reactid=".hbspt-forms-0.1:$23.$what_protocol_should_be_followed_for_alerting_on_vulnerabilities_found_.0.$Daily report on the status of the testing.0"
                          >
                            <input
                              id="what_protocol_should_be_followed_for_alerting_on_vulnerabilities_found_2-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              className="hs-input"
                              type="radio"
                              name="what_protocol_should_be_followed_for_alerting_on_vulnerabilities_found_"
                              value="Daily report on the status of the testing"
                              aria-labelledby="label-what_protocol_should_be_followed_for_alerting_on_vulnerabilities_found_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              data-reactid=".hbspt-forms-0.1:$23.$what_protocol_should_be_followed_for_alerting_on_vulnerabilities_found_.0.$Daily report on the status of the testing.0.0"
                            />
                            <span data-reactid=".hbspt-forms-0.1:$23.$what_protocol_should_be_followed_for_alerting_on_vulnerabilities_found_.0.$Daily report on the status of the testing.0.1">Daily report on the status of the testing</span>
                          </label>
                        </li>
                        <li className="hs-form-radio" role="radio" data-reactid=".hbspt-forms-0.1:$23.$what_protocol_should_be_followed_for_alerting_on_vulnerabilities_found_.0.$Report only critical findings immediately">
                          <label
                            htmlFor="what_protocol_should_be_followed_for_alerting_on_vulnerabilities_found_3-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                            className="hs-form-radio-display"
                            data-reactid=".hbspt-forms-0.1:$23.$what_protocol_should_be_followed_for_alerting_on_vulnerabilities_found_.0.$Report only critical findings immediately.0"
                          >
                            <input
                              id="what_protocol_should_be_followed_for_alerting_on_vulnerabilities_found_3-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              className="hs-input"
                              type="radio"
                              name="what_protocol_should_be_followed_for_alerting_on_vulnerabilities_found_"
                              value="Report only critical findings immediately"
                              aria-labelledby="label-what_protocol_should_be_followed_for_alerting_on_vulnerabilities_found_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              data-reactid=".hbspt-forms-0.1:$23.$what_protocol_should_be_followed_for_alerting_on_vulnerabilities_found_.0.$Report only critical findings immediately.0.0"
                            />
                            <span data-reactid=".hbspt-forms-0.1:$23.$what_protocol_should_be_followed_for_alerting_on_vulnerabilities_found_.0.$Report only critical findings immediately.0.1">Report only critical findings immediately</span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>

                <div className="col-lg-12 radio-input">


                  <div className="hs_will_this_testing_be_done_on_a_production_environment_certain_exploitation_of_vulnerabilities_to_de hs-will_this_testing_be_done_on_a_production_environment_certain_exploitation_of_vulnerabilities_to_de hs-fieldtype-radio field hs-form-field" data-reactid=".hbspt-forms-0.1:$24">
                    <label id="label-will_this_testing_be_done_on_a_production_environment_certain_exploitation_of_vulnerabilities_to_de-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" className="" placeholder="Enter your Will this testing be done on a production environment? ** Certain exploitation of vulnerabilities to determine and/or prove a weakness could crash your system(s). Securicy is not liable for downtime caused by proving the system’s weakness to attack." htmlFor="will_this_testing_be_done_on_a_production_environment_certain_exploitation_of_vulnerabilities_to_de-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" data-reactid=".hbspt-forms-0.1:$24.0">

                      <span data-reactid=".hbspt-forms-0.1:$24.0.0">Will this testing be done on a production environment? ** Certain exploitation of vulnerabilities to determine and/or prove a weakness could crash your system(s). Securicy is not liable for downtime caused by proving the system’s weakness to attack.
                      </span>

                      <span className="hs-form-required" data-reactid=".hbspt-forms-0.1:$24.0.1">*
                      </span>
                    </label>
                    <legend className="hs-field-desc" data-reactid=".hbspt-forms-0.1:$24.1">
                    </legend>

                    <div className="input" data-reactid=".hbspt-forms-0.1:$24.$will_this_testing_be_done_on_a_production_environment_certain_exploitation_of_vulnerabilities_to_de">
                      <ul required="" role="checkbox" className="inputs-list multi-container" data-reactid=".hbspt-forms-0.1:$24.$will_this_testing_be_done_on_a_production_environment_certain_exploitation_of_vulnerabilities_to_de.0">
                        <li className="hs-form-radio" role="radio" data-reactid=".hbspt-forms-0.1:$24.$will_this_testing_be_done_on_a_production_environment_certain_exploitation_of_vulnerabilities_to_de.0.$Yes">
                          <label htmlFor="will_this_testing_be_done_on_a_production_environment_certain_exploitation_of_vulnerabilities_to_de0-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" className="hs-form-radio-display" data-reactid=".hbspt-forms-0.1:$24.$will_this_testing_be_done_on_a_production_environment_certain_exploitation_of_vulnerabilities_to_de.0.$Yes.0">
                            <input id="will_this_testing_be_done_on_a_production_environment_certain_exploitation_of_vulnerabilities_to_de0-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" className="hs-input " type="radio" name="will_this_testing_be_done_on_a_production_environment_certain_exploitation_of_vulnerabilities_to_de" value="Yes" aria-labelledby="label-will_this_testing_be_done_on_a_production_environment_certain_exploitation_of_vulnerabilities_to_de-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" data-reactid=".hbspt-forms-0.1:$24.$will_this_testing_be_done_on_a_production_environment_certain_exploitation_of_vulnerabilities_to_de.0.$Yes.0.0" />

                            <span data-reactid=".hbspt-forms-0.1:$24.$will_this_testing_be_done_on_a_production_environment_certain_exploitation_of_vulnerabilities_to_de.0.$Yes.0.1">Yes
                            </span>
                          </label></li>
                        <li className="hs-form-radio" role="radio" data-reactid=".hbspt-forms-0.1:$24.$will_this_testing_be_done_on_a_production_environment_certain_exploitation_of_vulnerabilities_to_de.0.$No">
                          <label htmlFor="will_this_testing_be_done_on_a_production_environment_certain_exploitation_of_vulnerabilities_to_de1-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" className="hs-form-radio-display" data-reactid=".hbspt-forms-0.1:$24.$will_this_testing_be_done_on_a_production_environment_certain_exploitation_of_vulnerabilities_to_de.0.$No.0">
                            <input id="will_this_testing_be_done_on_a_production_environment_certain_exploitation_of_vulnerabilities_to_de1-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" className="hs-input " type="radio" name="will_this_testing_be_done_on_a_production_environment_certain_exploitation_of_vulnerabilities_to_de" value="No" aria-labelledby="label-will_this_testing_be_done_on_a_production_environment_certain_exploitation_of_vulnerabilities_to_de-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" data-reactid=".hbspt-forms-0.1:$24.$will_this_testing_be_done_on_a_production_environment_certain_exploitation_of_vulnerabilities_to_de.0.$No.0.0" />

                            <span data-reactid=".hbspt-forms-0.1:$24.$will_this_testing_be_done_on_a_production_environment_certain_exploitation_of_vulnerabilities_to_de.0.$No.0.1">No
                            </span>
                          </label></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="hs_please_explain hs-please_explain hs-fieldtype-textarea field hs-form-field" data-reactid=".hbspt-forms-0.1:$25">
                    <label
                      id="label-please_explain-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                      className=""
                      placeholder="Enter your If production environments can't be affected, does a similar environment (development and/or test systems) exist that can be used to conduct the penetration test?"
                      htmlFor="please_explain-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                      data-reactid=".hbspt-forms-0.1:$25.0"
                    >
                      <span data-reactid=".hbspt-forms-0.1:$25.0.0">If production environments can't be affected, does a similar environment (development and/or test systems) exist that can be used to conduct the penetration test?</span>
                      <span className="hs-form-required" data-reactid=".hbspt-forms-0.1:$25.0.1">*</span>
                    </label>
                    <legend className="hs-field-desc" data-reactid=".hbspt-forms-0.1:$25.1">Please input a testing environment or development environment you would like testing to be performed on if that is available.</legend>
                    <div className="input" data-reactid=".hbspt-forms-0.1:$25.$please_explain">
                      <textarea id="please_explain-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" className="hs-input" name="please_explain" required="" placeholder="" data-reactid=".hbspt-forms-0.1:$25.$please_explain.0"></textarea>
                    </div>
                  </div>

                </div>

                <div className="col-lg-12 radio-input">


                  <div className="hs_are_the_business_owners_aware_of_this_penetration_test_ hs-are_the_business_owners_aware_of_this_penetration_test_ hs-fieldtype-radio field hs-form-field" data-reactid=".hbspt-forms-0.1:$26">
                    <label id="label-are_the_business_owners_aware_of_this_penetration_test_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" className="" placeholder="Enter your Are the business owners aware of this penetration test?" htmlFor="are_the_business_owners_aware_of_this_penetration_test_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" data-reactid=".hbspt-forms-0.1:$26.0">

                      <span data-reactid=".hbspt-forms-0.1:$26.0.0">Are the business owners aware of this penetration test?
                      </span>

                      <span className="hs-form-required" data-reactid=".hbspt-forms-0.1:$26.0.1">*
                      </span>
                    </label>
                    <legend className="hs-field-desc" data-reactid=".hbspt-forms-0.1:$26.1">
                    </legend>

                    <div className="input" data-reactid=".hbspt-forms-0.1:$26.$are_the_business_owners_aware_of_this_penetration_test_">
                      <ul required="" role="checkbox" className="inputs-list multi-container" data-reactid=".hbspt-forms-0.1:$26.$are_the_business_owners_aware_of_this_penetration_test_.0">
                        <li className="hs-form-radio" role="radio" data-reactid=".hbspt-forms-0.1:$26.$are_the_business_owners_aware_of_this_penetration_test_.0.$Yes">
                          <label htmlFor="are_the_business_owners_aware_of_this_penetration_test_0-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" className="hs-form-radio-display" data-reactid=".hbspt-forms-0.1:$26.$are_the_business_owners_aware_of_this_penetration_test_.0.$Yes.0">
                            <input id="are_the_business_owners_aware_of_this_penetration_test_0-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" className="hs-input " type="radio" name="are_the_business_owners_aware_of_this_penetration_test_" value="Yes" aria-labelledby="label-are_the_business_owners_aware_of_this_penetration_test_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" data-reactid=".hbspt-forms-0.1:$26.$are_the_business_owners_aware_of_this_penetration_test_.0.$Yes.0.0" />

                            <span data-reactid=".hbspt-forms-0.1:$26.$are_the_business_owners_aware_of_this_penetration_test_.0.$Yes.0.1">Yes
                            </span>
                          </label></li>
                        <li className="hs-form-radio" role="radio" data-reactid=".hbspt-forms-0.1:$26.$are_the_business_owners_aware_of_this_penetration_test_.0.$No">
                          <label htmlFor="are_the_business_owners_aware_of_this_penetration_test_1-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" className="hs-form-radio-display" data-reactid=".hbspt-forms-0.1:$26.$are_the_business_owners_aware_of_this_penetration_test_.0.$No.0">
                            <input id="are_the_business_owners_aware_of_this_penetration_test_1-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" className="hs-input " type="radio" name="are_the_business_owners_aware_of_this_penetration_test_" value="No" aria-labelledby="label-are_the_business_owners_aware_of_this_penetration_test_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" data-reactid=".hbspt-forms-0.1:$26.$are_the_business_owners_aware_of_this_penetration_test_.0.$No.0.0" />

                            <span data-reactid=".hbspt-forms-0.1:$26.$are_the_business_owners_aware_of_this_penetration_test_.0.$No.0.1">No
                            </span>
                          </label></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 radio-input">


                  <div className="hs_are_key_stakeholders_business_owners_aware_that_the_nature_of_a_penetration_test_is_to_attack_the_s hs-are_key_stakeholders_business_owners_aware_that_the_nature_of_a_penetration_test_is_to_attack_the_s hs-fieldtype-radio field hs-form-field" data-reactid=".hbspt-forms-0.1:$27">
                    <label id="label-are_key_stakeholders_business_owners_aware_that_the_nature_of_a_penetration_test_is_to_attack_the_s-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" className="" placeholder="Enter your Are key stakeholders (business owners) aware that the nature of a penetration test is to attack the system as a hacker (or hostile actor) would in order to learn and prove the system’s weakness?" htmlFor="are_key_stakeholders_business_owners_aware_that_the_nature_of_a_penetration_test_is_to_attack_the_s-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" data-reactid=".hbspt-forms-0.1:$27.0">

                      <span data-reactid=".hbspt-forms-0.1:$27.0.0">Are key stakeholders (business owners) aware that the nature of a penetration test is to attack the system as a hacker (or hostile actor) would in order to learn and prove the system’s weakness?
                      </span>

                      <span className="hs-form-required" data-reactid=".hbspt-forms-0.1:$27.0.1">*
                      </span>
                    </label>
                    <legend className="hs-field-desc" data-reactid=".hbspt-forms-0.1:$27.1">
                    </legend>

                    <div className="input" data-reactid=".hbspt-forms-0.1:$27.$are_key_stakeholders_business_owners_aware_that_the_nature_of_a_penetration_test_is_to_attack_the_s">
                      <ul required="" role="checkbox" className="inputs-list multi-container" data-reactid=".hbspt-forms-0.1:$27.$are_key_stakeholders_business_owners_aware_that_the_nature_of_a_penetration_test_is_to_attack_the_s.0">
                        <li className="hs-form-radio" role="radio" data-reactid=".hbspt-forms-0.1:$27.$are_key_stakeholders_business_owners_aware_that_the_nature_of_a_penetration_test_is_to_attack_the_s.0.$Yes">
                          <label htmlFor="are_key_stakeholders_business_owners_aware_that_the_nature_of_a_penetration_test_is_to_attack_the_s0-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" className="hs-form-radio-display" data-reactid=".hbspt-forms-0.1:$27.$are_key_stakeholders_business_owners_aware_that_the_nature_of_a_penetration_test_is_to_attack_the_s.0.$Yes.0">
                            <input id="are_key_stakeholders_business_owners_aware_that_the_nature_of_a_penetration_test_is_to_attack_the_s0-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" className="hs-input " type="radio" name="are_key_stakeholders_business_owners_aware_that_the_nature_of_a_penetration_test_is_to_attack_the_s" value="Yes" aria-labelledby="label-are_key_stakeholders_business_owners_aware_that_the_nature_of_a_penetration_test_is_to_attack_the_s-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" data-reactid=".hbspt-forms-0.1:$27.$are_key_stakeholders_business_owners_aware_that_the_nature_of_a_penetration_test_is_to_attack_the_s.0.$Yes.0.0" />

                            <span data-reactid=".hbspt-forms-0.1:$27.$are_key_stakeholders_business_owners_aware_that_the_nature_of_a_penetration_test_is_to_attack_the_s.0.$Yes.0.1">Yes
                            </span>
                          </label></li>
                        <li className="hs-form-radio" role="radio" data-reactid=".hbspt-forms-0.1:$27.$are_key_stakeholders_business_owners_aware_that_the_nature_of_a_penetration_test_is_to_attack_the_s.0.$No">
                          <label htmlFor="are_key_stakeholders_business_owners_aware_that_the_nature_of_a_penetration_test_is_to_attack_the_s1-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" className="hs-form-radio-display" data-reactid=".hbspt-forms-0.1:$27.$are_key_stakeholders_business_owners_aware_that_the_nature_of_a_penetration_test_is_to_attack_the_s.0.$No.0">
                            <input id="are_key_stakeholders_business_owners_aware_that_the_nature_of_a_penetration_test_is_to_attack_the_s1-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" className="hs-input " type="radio" name="are_key_stakeholders_business_owners_aware_that_the_nature_of_a_penetration_test_is_to_attack_the_s" value="No" aria-labelledby="label-are_key_stakeholders_business_owners_aware_that_the_nature_of_a_penetration_test_is_to_attack_the_s-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" data-reactid=".hbspt-forms-0.1:$27.$are_key_stakeholders_business_owners_aware_that_the_nature_of_a_penetration_test_is_to_attack_the_s.0.$No.0.0" />

                            <span data-reactid=".hbspt-forms-0.1:$27.$are_key_stakeholders_business_owners_aware_that_the_nature_of_a_penetration_test_is_to_attack_the_s.0.$No.0.1">No
                            </span>
                          </label></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 radio-input">
                  <div data-reactid=".hbspt-forms-0.1:$28">
                    <div className="hs-richtext hs-main-font-element" data-reactid=".hbspt-forms-0.1:$28.0">
                      <h1><span>Setting Up "Goalposts"</span></h1>
                      <p>
                        <span><em>This section is meant to identify the time in between starting and when we finish testing.</em></span>
                      </p>
                    </div>
                  </div>

                  <div className="hs_at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_ hs-at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_ hs-fieldtype-radio field hs-form-field" data-reactid=".hbspt-forms-0.1:$29">
                    <label
                      id="label-at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                      className=""
                      placeholder="Enter your At what preferred time of day do you want these tests to be performed?"
                      htmlFor="at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                      data-reactid=".hbspt-forms-0.1:$29.0"
                    >
                      <span data-reactid=".hbspt-forms-0.1:$29.0.0">At what preferred time of day do you want these tests to be performed?</span><span className="hs-form-required" data-reactid=".hbspt-forms-0.1:$29.0.1">*</span>
                    </label>
                    <legend className="hs-field-desc" data-reactid=".hbspt-forms-0.1:$29.1"></legend>
                    <div className="input" data-reactid=".hbspt-forms-0.1:$29.$at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_">
                      <ul required="" role="checkbox" className="inputs-list multi-container" data-reactid=".hbspt-forms-0.1:$29.$at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_.0">
                        <li className="hs-form-radio" role="radio" data-reactid=".hbspt-forms-0.1:$29.$at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_.0.$During regular business hours">
                          <label
                            htmlFor="at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_0-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                            className="hs-form-radio-display"
                            data-reactid=".hbspt-forms-0.1:$29.$at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_.0.$During regular business hours.0"
                          >
                            <input
                              id="at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_0-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              className="hs-input"
                              type="radio"
                              name="at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_"
                              value="During regular business hours"
                              aria-labelledby="label-at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              data-reactid=".hbspt-forms-0.1:$29.$at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_.0.$During regular business hours.0.0"
                            />
                            <span data-reactid=".hbspt-forms-0.1:$29.$at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_.0.$During regular business hours.0.1">During regular business hours</span>
                          </label>
                        </li>
                        <li className="hs-form-radio" role="radio" data-reactid=".hbspt-forms-0.1:$29.$at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_.0.$Outside of business hours">
                          <label
                            htmlFor="at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_1-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                            className="hs-form-radio-display"
                            data-reactid=".hbspt-forms-0.1:$29.$at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_.0.$Outside of business hours.0"
                          >
                            <input
                              id="at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_1-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              className="hs-input"
                              type="radio"
                              name="at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_"
                              value="Outside of business hours"
                              aria-labelledby="label-at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              data-reactid=".hbspt-forms-0.1:$29.$at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_.0.$Outside of business hours.0.0"
                            />
                            <span data-reactid=".hbspt-forms-0.1:$29.$at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_.0.$Outside of business hours.0.1">Outside of business hours</span>
                          </label>
                        </li>
                        <li className="hs-form-radio" role="radio" data-reactid=".hbspt-forms-0.1:$29.$at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_.0.$Weekend">
                          <label
                            htmlFor="at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_2-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                            className="hs-form-radio-display"
                            data-reactid=".hbspt-forms-0.1:$29.$at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_.0.$Weekend.0"
                          >
                            <input
                              id="at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_2-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              className="hs-input"
                              type="radio"
                              name="at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_"
                              value="Weekend"
                              aria-labelledby="label-at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              data-reactid=".hbspt-forms-0.1:$29.$at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_.0.$Weekend.0.0"
                            />
                            <span data-reactid=".hbspt-forms-0.1:$29.$at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_.0.$Weekend.0.1">Weekend</span>
                          </label>
                        </li>
                        <li className="hs-form-radio" role="radio" data-reactid=".hbspt-forms-0.1:$29.$at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_.0.$During a scheduled system maintenance window">
                          <label
                            htmlFor="at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_3-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                            className="hs-form-radio-display"
                            data-reactid=".hbspt-forms-0.1:$29.$at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_.0.$During a scheduled system maintenance window.0"
                          >
                            <input
                              id="at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_3-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              className="hs-input"
                              type="radio"
                              name="at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_"
                              value="During a scheduled system maintenance window"
                              aria-labelledby="label-at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              data-reactid=".hbspt-forms-0.1:$29.$at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_.0.$During a scheduled system maintenance window.0.0"
                            />
                            <span data-reactid=".hbspt-forms-0.1:$29.$at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_.0.$During a scheduled system maintenance window.0.1">During a scheduled system maintenance window</span>
                          </label>
                        </li>
                        <li className="hs-form-radio" role="radio" data-reactid=".hbspt-forms-0.1:$29.$at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_.0.$Other">
                          <label
                            htmlFor="at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_4-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                            className="hs-form-radio-display"
                            data-reactid=".hbspt-forms-0.1:$29.$at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_.0.$Other.0"
                          >
                            <input
                              id="at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_4-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              className="hs-input"
                              type="radio"
                              name="at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_"
                              value="Other"
                              aria-labelledby="label-at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6"
                              data-reactid=".hbspt-forms-0.1:$29.$at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_.0.$Other.0.0"
                            />
                            <span data-reactid=".hbspt-forms-0.1:$29.$at_what_preferred_time_of_day_do_you_want_these_tests_to_be_performed_.0.$Other.0.1">Other</span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>


                </div>

                <div className="col-lg-12">


                  <div className="hs_what_date_would_you_prefer_the_testing_to_start_ hs-what_date_would_you_prefer_the_testing_to_start_ hs-fieldtype-date field hs-form-field" data-reactid=".hbspt-forms-0.1:$30">
                    <label id="label-what_date_would_you_prefer_the_testing_to_start_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" className="" placeholder="Enter your What date would you prefer the testing to start?" htmlFor="what_date_would_you_prefer_the_testing_to_start_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" data-reactid=".hbspt-forms-0.1:$30.0">

                      <span data-reactid=".hbspt-forms-0.1:$30.0.0">What date would you prefer the testing to start?
                      </span>

                      <span className="hs-form-required" data-reactid=".hbspt-forms-0.1:$30.0.1">*
                      </span>
                    </label>
                    <legend className="hs-field-desc" data-reactid=".hbspt-forms-0.1:$30.1">
                    </legend>

                    <div className="input" data-reactid=".hbspt-forms-0.1:$30.$what_date_would_you_prefer_the_testing_to_start_">

                      <div className="hs-dateinput" data-reactid=".hbspt-forms-0.1:$30.$what_date_would_you_prefer_the_testing_to_start_.0">
                        <input id="what_date_would_you_prefer_the_testing_to_start_-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" type="text" name="what_date_would_you_prefer_the_testing_to_start_" required="" data-reactid=".hbspt-forms-0.1:$30.$what_date_would_you_prefer_the_testing_to_start_.0.0" />

                        <div className="hs-datepicker" data-reactid=".hbspt-forms-0.1:$30.$what_date_would_you_prefer_the_testing_to_start_.0.1">

                          <div className="pika-single fn-date-picker is-hidden is-bound">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">


                  <div className="hs_what_date_would_you_prefer_to_receive_the_testing_report_please_allow_a_buffer_of_at_least_5_10_bus hs-what_date_would_you_prefer_to_receive_the_testing_report_please_allow_a_buffer_of_at_least_5_10_bus hs-fieldtype-date field hs-form-field" data-reactid=".hbspt-forms-0.1:$31">
                    <label id="label-what_date_would_you_prefer_to_receive_the_testing_report_please_allow_a_buffer_of_at_least_5_10_bus-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" className="" placeholder="Enter your What date would you prefer to receive the testing report? (Please allow a buffer of at least 5-10 business days after testing start date)" htmlFor="what_date_would_you_prefer_to_receive_the_testing_report_please_allow_a_buffer_of_at_least_5_10_bus-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" data-reactid=".hbspt-forms-0.1:$31.0">

                      <span data-reactid=".hbspt-forms-0.1:$31.0.0">What date would you prefer to receive the testing report? (Please allow a buffer of at least 5-10 business days after testing start date)
                      </span>

                      <span className="hs-form-required" data-reactid=".hbspt-forms-0.1:$31.0.1">*
                      </span>
                    </label>
                    <legend className="hs-field-desc" data-reactid=".hbspt-forms-0.1:$31.1">
                    </legend>

                    <div className="input" data-reactid=".hbspt-forms-0.1:$31.$what_date_would_you_prefer_to_receive_the_testing_report_please_allow_a_buffer_of_at_least_5_10_bus">

                      <div className="hs-dateinput" data-reactid=".hbspt-forms-0.1:$31.$what_date_would_you_prefer_to_receive_the_testing_report_please_allow_a_buffer_of_at_least_5_10_bus.0">
                        <input id="what_date_would_you_prefer_to_receive_the_testing_report_please_allow_a_buffer_of_at_least_5_10_bus-1b97a16f-e073-4a7a-9c0e-a0214ced56f6" type="text" name="what_date_would_you_prefer_to_receive_the_testing_report_please_allow_a_buffer_of_at_least_5_10_bus" required="" data-reactid=".hbspt-forms-0.1:$31.$what_date_would_you_prefer_to_receive_the_testing_report_please_allow_a_buffer_of_at_least_5_10_bus.0.0" />

                        <div className="hs-datepicker" data-reactid=".hbspt-forms-0.1:$31.$what_date_would_you_prefer_to_receive_the_testing_report_please_allow_a_buffer_of_at_least_5_10_bus.0.1">

                          <div className="pika-single fn-date-picker is-hidden is-bound">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="legal-consent-container" data-reactid=".hbspt-forms-0.2">
                    <div className="hs-richtext" data-reactid=".hbspt-forms-0.2.2">
                      <p>
                        IRM Consulting & Advisory needs the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at any time. For information on how to unsubscribe, as well as our privacy
                        practices and commitment to protecting your privacy, please review our Privacy Policy.
                      </p>
                    </div>
                  </div>

                </div>

                <div className="col-lg-12 text-center recaptcha-div">
                  <div className="d-flex justify-content-center">
                    <ReCAPTCHA sitekey="6Lc4v-0aAAAAAIL9Hpo_L4SXf95pq2_-XG6ApiBP" />
                  </div>
                </div>
                <div className="col-lg-12 text-center">
                  <button type="submit" className="cr-btn cr-btn-sm remove-cap b-t-btn white-color theme-btn btn-style-one mmmm"> <span>Send a Message</span></button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <Logos />
  </Layout>
);

export default PenetrationTestQuote;
