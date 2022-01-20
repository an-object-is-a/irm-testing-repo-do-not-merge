import React from 'react';

const MarketplaceListView = ({ data }) => (
  <>
    {data.map(({ node }, index) => (
      <div key={index} className="col-12 marketplace-box">
        <div className="grid-cont d-block-flex d-md-flex">
          <div className="col-md-5 col-sm-12 p-0 d-flex">
            <div className="icon-area">
              <img
                src={node.marketplace.logo.localFile.childImageSharp.fixed.srcWebp}
                alt="IRM Consulting & Advisory | Your Cybersecurity Trusted Advisor"
              />
            </div>
          </div>
          <div className="col-md-7 col-sm-12 pl-0 pl-md-3 pt-3 pr-0 py-md-0 d-block d-md-flex justify-content-between">
            <div className="col-md-7 col-sm-12 p-0">
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
            <div className="col-md-2 col-dm-6 p-0 price d-flex flex-column align-items-center justify-content-between">
              <span className="font-weight-bold">{node.marketplace.price}</span>
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
      </div>
    ))}
  </>
);

export default MarketplaceListView;
