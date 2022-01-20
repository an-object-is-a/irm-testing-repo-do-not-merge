import * as React from 'react';

import GridViewImg from '../../images/marketplace/grid-view.png';
import ListViewImg from '../../images/marketplace/list-view.png';

const MarketplaceOptions = ({
  setListView,
  totalCount,
  currentPage,
  setCurrentPage,
  totalPages,
  displayPages,
  heading
}) => (
  <div className="d-block d-md-flex justify-content-between mb-3 marketplace-options">
    <div className="col-md-4 col-sm-12 p-md-0 ">
      <h3 className="marketplace-cat m-0">{heading}</h3>
    </div>
    <div className="col-md-5 col-sm-12 p-md-0 d-flex">
      <div className="mr-3 cursor-pointer" onClick={() => setListView(false)}>
        <img className="mr-1" src={GridViewImg} />
        <span className="marketplace-options-text">Grid view</span>
      </div>
      <div className="mr-3 cursor-pointer" onClick={() => setListView(true)}>
        <img className="mr-1" src={ListViewImg} />
        <span className="marketplace-options-text">List view</span>
      </div>
      <div className="d-flex align-items-center">
        <span className="marketplace-cat-item-count d-flex justify-content-center align-items-center mr-1">
          {totalCount}
        </span>
        <span className="marketplace-options-text">Products</span>
      </div>
    </div>
    <div className="col-md-3 col-sm-12 p-md-0 d-block d-md-flex align-items-center justify-content-end">
      <span className="marketplace-options-text page-text mr-3">Page</span>
      <span
        className="mr-2 cursor-pointer"
        onClick={() => {
          if (currentPage > 1) setCurrentPage(currentPage - 1);
        }}
      >
        {"<<"}
      </span>
      {displayPages.map((item, index) => (
        <span
          onClick={() => setCurrentPage(item)}
          className={`mr-2 cursor-pointer page-item ${item === currentPage ? "active-page" : ""
            }`}
          key={index}
        >
          {item}
        </span>
      ))}
      <span
        className="cursor-pointer"
        onClick={() => {
          if (currentPage < totalPages) setCurrentPage(currentPage + 1);
        }}
      >
        {">>"}
      </span>
    </div>
  </div>
);

export default MarketplaceOptions;
