import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import loadable from "@loadable/component";

import Layout from "../components/Layout";
import homepagebanner1 from '../images/banners/bc.webp';
import bs1 from '../images/svg/bs1.webp';
import bs2 from '../images/svg/bs2.webp';
import bs3 from '../images/svg/bs3.svg';
import bitcoin from '../images/new-images/bitcoin.png';
import check from '../images/svg/check.svg';
import ethereum from '../images/new-images/ethereum.png';
import bs4 from '../images/new-images/30.webp';

const Slide = loadable(() => import('react-reveal/Slide'));
const Logos = loadable(() => import('../components/Logos'));

const BlockchainSecurity = () => (
  <Layout pageTitle="Blockchain Security Services | IRM Consulting & Advisory">
    <Helmet>
      <meta name="description" content="As the demand for virtual currencies grows, so does the potential risk of theft and fraud in your DApps. Blockchain Security services are available from IRM Consulting & Advisory to help you protect your digital assets." />
      <meta name="keywords" content="Cryptojacking, cybersecurity compliance" />
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
      <meta property="og:url" content="https://irmcon-staging.netlify.app/blockchain-security/" />
      <meta property="og:title" content="IRM Consulting & Advisory - Cybersecurity Consulting for your SaaS Business" />
      <meta property="og:description" content="As the demand for virtual currencies grows, so does the potential risk of theft and fraud in your DApps. Blockchain Security services are available from IRM Consulting & Advisory to help you protect your digital assets." />
      <meta property="og:image" content="https://xgw.394.myftpupload.com/wp-content/uploads/2021/10/irm-logo-social-scaled.jpg" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content="IRM Consulting & Advisory - Cybersecurity Consulting for your SaaS Business" />
      <meta property="twitter:description" content="As the demand for virtual currencies grows, so does the potential risk of theft and fraud in your DApps. Blockchain Security services are available from IRM Consulting & Advisory to help you protect your digital assets." />
      <meta property="twitter:image" content="https://xgw.394.myftpupload.com/wp-content/uploads/2021/10/irm-logo-social-scaled.jpg" />
      <meta property="twitter:site" content="IRM Consulting & Advisory" />
      <link rel="canonical" href="https://irmcon-staging.netlify.app/blockchain-security/" />
    </Helmet>

    <section className="page-title-sec" style={{ background: `url(${homepagebanner1})` }}>
      <div className="auto-container">
        <div className="row">
          <div className="col-md-12">
            <div className="content-box">
              <h1>Blockchain Security (BS)</h1>
              <p>Protect and secure Smart Contracts, Distributed Applications (DApps) and Digital <br /> Assets</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="services-detail bs-page">
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-5 col-md-12">
            <Slide left duration={2000}>
              <div className="image-box">
                <img src={bs1} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" />
              </div>
            </Slide>
          </div>
          <div className="col-lg-7 col-md-12">
            <Slide right duration={2000}>
              <div className="detail-box">
                <h3>What is Blockchain Technology?</h3>
                <p>Blockchain is a decentralized and distributed database that uses algorithms to perform calculations. Blockchain facilitates the process of recording transactions and tracking digital assets in a business network. An asset can be tangible (a house, car, cash, land) or intangible (intellectual property, patents, copyrights, branding). Virtually anything of value can be tracked and traded on a blockchain network, reducing risk and cutting costs.</p>
                <h3>Why is Blockchain Important</h3>
                <p>Businesses run on information. The faster it’s received and the more accurate it is, the better. Blockchain is ideal for delivering that information because it provides immediate, shared and completely transparent information stored on an immutable ledger that can be accessed only by permissioned network members. A blockchain network can track orders, payments, accounts, production and much more, and because members share a single view of the truth, businesses can see all details of a transaction end-to-end, providing greater confidence, trust as well as new efficiencies and opportunities.</p>
              </div>
            </Slide>
          </div>
          <div className="col-md-12 bs-mb-50">
            <div className="detail-box">
              <p>Each set of records in the database is referred to as a “Block” and anything that is recorded in the database is preserved forever. Because of the immutability of the database, once a record has been entered, it’s impossible to manipulate or alter that record.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="light-blue-background py-5">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-7 col-md-12">
              <Slide left duration={2000}>
                <div className="detail-box">
                  <h3>GDPR Compliance Challenges with Blockchain Technology</h3>
                  <p>GDPR – “A Subject’s Right to be Forgotten” allows individuals to request the deletion/erasure of data associated with them if it is no longer relevant. Due to Blockchain's nature of immutability, there may be potential complications if an individual who made transactions on the Blockchain requests their data to be deleted/erased. Once a block is verified on the Blockchain, it is impossible to delete it – “Immutable”.</p>
                  <h3>PII &amp; ePHI Data Protection and Access Controls</h3>
                  <p>Storage of PII (Your Identity) and ePHI (Your Health Information) is a strong use case for Blockchain Technology. Rather than having both physical and electronic copies of records, Blockchain Technology allows the shift to electronic Identity Verification and Health Records Access Controls to PII and ePHI Information on the Blockchain needs to be elevated to another level. Compliance with PII and ePHI regulations need to be considered when accessing and transferring Health information and records in the Blockchain across Third-Parties, Supply Chain and Jurisdictions.</p>
                </div>
              </Slide>
            </div>
            <div className="col-lg-5 col-md-12">
              <Slide right duration={2000}>
                <div className="image-box">
                  <img src={bs2} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" />
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </div>
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="detail-list detail-box">
              <div className="center-image text-center">
                <img src={bs3} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" />
                <h3>What is Cryptocurrency?</h3>
              </div>
              <p>Cryptocurrency is a <span className="blue-color"> Digital Asset</span> designed to work as a means of exchange for buying and selling Products and Services over the Internet.</p>
              <p><span className="icon"><img src={bitcoin} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" /></span> <span className="blue-color">Bitcoin</span> , a digital currency, uses <span className="blue-color">Blockchain Technology</span>.</p>
              <ul>
                <li><i className="icon"><img src={check} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" /></i>But Blockchain also powers other digital currencies and has many other practical use cases.</li>
                <li><i className="icon"><img src={check} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" /></i>While <span className="blue-color"> Bitcoin</span>  is a currency, Blockchain is the underlying infrastructure on which the currency exists. Bitcoin is just one use-case for Blockchain Technology, just as email is one use of Internet technology.</li>
                <li><i className="icon"><img src={check} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" /></i><span className="blue-color"> Ethereum</span>   is a decentralized platform that runs Smart Contracts. However, most people think of Ethereum as a digital currency, similar to Bitcoin or Ripple. While it’s true that Ethereum has agreed-upon value and is often traded for cash or used to pay for goods and services, there is much more depth to Ethereum than meets the eye.</li>
              </ul>
              <p><span className="icon"><img src={ethereum} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" /></span> <span className="blue-color">Ethereum </span> is more than a digital currency.</p>
              <ul>
                <li><i className="icon"><img src={check} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" /></i>Ethereum’s is a capacity for a shared global infrastructure that anyone with suitable programming skills can build their own applications and ecosystems on the Ethereum network, harnessing the decentralization and immutability facets of <span className="blue-color">Blockchain Technology.</span></li>
                <li><i className="icon"><img src={check} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" /></i><span className="blue-color">Ethereum</span>  applications remove the middleman and lower downtime via decentralization. Everyone using an application does their part to “host” it, thus removing any single point of failure, barring poor coding. Ethereum utilizes <span className="blue-color"> “smart contracts”</span>  in order to autonomously complete the necessary processes to run an application, ecosystem, or organization. ETH tokens monetize the network and enable developers to run their distributed applications, known commonly as <span className="blue-color">DApps.</span> </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="light-blue-background py-5 mb-5">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <Slide left duration={2000}>
                <div className="image-box">
                  <img src={bs4} alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor" />
                </div>
              </Slide>
            </div>
            <div className="col-lg-7 col-md-12">
              <Slide right duration={2000}>
                <div className="detail-box">
                  <h3>What is Cryptojacking?</h3>
                  <p>Cryptojacking is unauthorized use of a victim’s machine to mine digital currencies by installing a binary on the machine, or by using an in-browser script. The mining code works in the background while the unaware victim is using their End-Point Devices. E.g. Desktop, Laptop, Tablet, Phone, Gaming Console etc.</p>
                  <p>In-Browser cryptojacking is done by injecting a JavaScript code in a website, allowing it to hijack the processing power of a visitor’s device to mine a specific cryptocurrency. Generally, JavaScript is automatically executed when a website is loaded. Upon visiting a website with cryptojacking code, the visiting host starts to perform CPU-intensive cryptocurrency mining, using your browser to tab into your computer processing power.</p>
                  <p>A Website Administrator can add a mining script to her webpage, with or without informing users. Website owners may do this to monetize their sites, especially when they have been blacklisted or blocked by standard advertising platforms.</p>
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </div>
      <div className="auto-container">
        <div className="row">
          <div className="col-md-12">
            <div className="detail-box">
              <p>Many websites serve active JavaScript from third parties within their own webpages. This could be ads from an ad network, accessibility tools or tracking and analytics services. Third parties with these privileges can inject cryptojacking scripts into the sites that use them, either intentionally or as a result of a breach</p>
              <p>Cryptojacking is not limited to Websites. Browser Extensions and Add-Ons can be used for cryptojacking. If an attacker is able to breach principle servers, websites, extensions, or the scripting services they use, they can inject cryptojacking scripts that will impact the site’s users without the site’s knowledge or consent.</p>
              <p>Talk to our Trusted Advisors, we can help you protect your SaaS Business against these Security Threats and Risks.</p>
              <div className="learno-more">
                <Link to="/cybersecurity-consulting-appointments" className="theme-btn btn-style-one">
                  Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Logos />
  </Layout>
)

export default BlockchainSecurity;
