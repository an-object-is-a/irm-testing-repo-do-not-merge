import React from 'react';

const MarketplaceGridView = ({ data }) => (
  <>
    {data.map(({ node }, index) => (
      <div key={index} className="col-lg-4 col-md-6 col-sm-12 marketplace-box">
        <div className="we-offer-block d-flex flex-column justify-content-between">
          <div className="icon-area">
            <img
              src={node.marketplace.logo.localFile.childImageSharp.fixed.srcWebp}
              alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor"
            />
            <div className="text-box d-flex flex-column">
              <div>
                <h4>{node.title}</h4>
                <em>{node.marketplace.category}</em>
                <div className="para-price">
                  <span className="para">{node.marketplace.content}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="price d-flex justify-content-between">
            <span>{node.marketplace.price}</span>
            <a
              className="theme-btn btn-style-one"
              target="_blank"
              href={node.marketplace.link}
            >
              Visit
            </a>
          </div>
        </div>
      </div>
    ))}
  </>
);

export default MarketplaceGridView;
