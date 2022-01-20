import React from 'react';
import { Helmet } from 'react-helmet';
import '../css/bootstrap.min.css';
import '../css/style.css';
import '../css/responsive.css';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = (props) => {
  return (
    <div className="wrapper" id="wrapper">
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <meta charSet="UTF-8" />
        <title>{props.pageTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="google-site-verification" content="7mCyYHywOZgOshvytuzwG7CdqjexkBr4tn3WykxnWxw" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="page-wrapper">
        <Header />
        {props.children}
        <Footer />
      </div>

      <script type="text/javascript" id="hs-script-loader" async defer src="https://js.hs-scripts.com/8566999.js"></script>
    </div>
  );
};

export default Layout;
