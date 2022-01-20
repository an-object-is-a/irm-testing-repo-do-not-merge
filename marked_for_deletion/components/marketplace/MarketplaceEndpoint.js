import React, { useEffect, useState } from "react";
import { graphql, StaticQuery } from "gatsby";
import loadable from "@loadable/component";

const MarketplaceOptions = loadable(() => import('../../components/marketplace/MarketplaceOptions'));
const MarketplaceGridView = loadable(() => import('../../components/marketplace/MarketplaceGridView'));
const MarketplaceListView = loadable(() => import('../../components/marketplace/MarketplaceListView'));

const MarketplaceEndpoint = () => {
  const [listView, setListView] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPagesListView, setTotalPagesListView] = useState(1);
  const [totalPagesGridView, setTotalPagesGridView] = useState(1);
  const [allRecords, setAllRecords] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [displayPages, setDisplayPages] = useState([]);

  const displayCountListView = 5;
  const displayCountGridView = 9;

  useEffect(() => {
    let gridCount = Math.ceil(allRecords.length / displayCountGridView);
    let listCount = Math.ceil(allRecords.length / displayCountListView);
    setTotalPagesGridView(gridCount);
    setTotalPagesListView(listCount);
  }, [allRecords]);

  useEffect(() => {
    handleDisplayData();
  }, [totalPagesListView, currentPage, listView]);

  const handleDisplayData = async () => {
    let abc = [];
    if (listView) {
      if (currentPage === 1) {
        abc = allRecords.slice(0, displayCountListView);
      } else {
        const start = (currentPage - 1) * displayCountListView;
        const end = start + displayCountListView;

        abc = allRecords.slice(start, end);
      }
    } else {
      if (currentPage === 1) {
        abc = allRecords.slice(0, displayCountGridView);
      } else {
        const start = (currentPage - 1) * displayCountGridView;
        const end = start + displayCountGridView;

        abc = allRecords.slice(start, end);
      }
    }

    if (abc.length === 0) {
      setCurrentPage(1);
    } else {
      await handleDisplayPages();
      setDisplayData([...abc]);
    }
  };

  const handleDisplayPages = () => {
    let abc = [];
    if (listView) {
      if (currentPage === 1) {
        for (let i = 1; i <= totalPagesListView; i++) {
          abc.push(i);
          if (i === 5) break;
        }
      } else {
        let moveAll = totalPagesListView - currentPage + 1 >= 5 ? true : false;

        if (moveAll) {
          for (let i = currentPage; i <= totalPagesListView; i++) {
            abc.push(i);
            if (abc.length === 5) break;
          }
        } else {
          if (totalPagesListView <= 5) {
            for (let i = 1; i <= totalPagesListView; i++) {
              abc.push(i);
            }
          } else {
            for (let i = totalPagesListView - 4; i <= totalPagesListView; i++) {
              abc.push(i);
            }
          }
        }
      }
    } else {
      if (currentPage === 1) {
        for (let i = 1; i <= totalPagesGridView; i++) {
          abc.push(i);
          if (i === 5) break;
        }
      } else {
        let moveAll = totalPagesGridView - currentPage + 1 >= 5 ? true : false;
        if (moveAll) {
          for (let i = currentPage; i <= totalPagesGridView; i++) {
            abc.push(i);
            if (abc.length === 5) break;
          }
        } else {
          if (totalPagesGridView <= 5) {
            for (let i = 1; i <= totalPagesGridView; i++) {
              abc.push(i);
            }
          } else {
            for (let i = totalPagesGridView - 4; i <= totalPagesGridView; i++) {
              abc.push(i);
            }
          }
        }
      }
    }
    setDisplayPages([...abc]);
  };

  return (
    <StaticQuery
      query={graphql`
        query MarketplaceEndpoint {
          allWpPost(
            filter: {categories: {nodes: {elemMatch: {name: {in: "Endpoint Security"}}}}}
          ) {
            edges {
              node {
                title
                marketplace {
                  content
                  link
                  price
                  category
                  logo {
                    localFile {
                      childImageSharp {
                        fixed {
                          src
                          srcWebp
                          ...GatsbyImageSharpFixed
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        setAllRecords(data.allWpPost.edges);
        return (
          <>
            <div className="col-12">
              <MarketplaceOptions
                setListView={setListView}
                totalCount={allRecords.length || 0}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={listView ? totalPagesListView : totalPagesGridView}
                displayPages={displayPages}
                heading={"Endpoint Security"}
              />
            </div>

            {
              displayData.length &&
              (listView ?
                (<MarketplaceListView data={displayData} />) : (<MarketplaceGridView data={displayData} />)
              )
            }

            <div className="marketplace-options col-sm-12 text-right mb-3">
              <span className="marketplace-options-text page-text mr-3">
                Page
              </span>
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
              <span className="cursor-pointer"
                onClick={() => {
                  if (currentPage < totalPagesGridView)
                    setCurrentPage(currentPage + 1);
                }}
              >
                {">>"}
              </span>
            </div>
          </>
        );
      }}
    />
  );
};

export default MarketplaceEndpoint;


/* Gatsby V4 Syntax
query MarketplaceEndpoint {
  allWpPost(
    filter: {categories: {nodes: {elemMatch: {name: {in: "Endpoint Security"}}}}}
  ) {
    edges {
      node {
        title
        marketplace {
          content
          link
          price
          category
          logo {
            localFile {
              childImageSharp {
                fixed {
                  src
                  srcWebp
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
}
*/

/* Gatsby V2 Syntax
query Marketendpoint {
  allWordpressPost(filter: {categories: {elemMatch: {name: {eq: "Endpoint Security"}}}}) {
    edges {
      node {
        title
        acf {
          content
          link
          price
          category
          logo {
            localFile {
              childImageSharp {
                fixed {
                  src
                  srcWebp
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
}
*/