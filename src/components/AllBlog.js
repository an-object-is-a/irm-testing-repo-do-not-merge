import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';

import sectiongbg from '../images/banners/blog.webp';

const AllBlog = ({ parentBlogs: data }) => {
  const [displayData, setDisplayData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [totalBlogs, setTotalBlogs] = useState(0);

  useEffect(() => {
    setTotalBlogs(data.allWpPost.edges.length);
    setTotalPages(Math.ceil(data.allWpPost.edges.length / 6));
    setCurrentPage(0);
  }, []);

  useEffect(() => {
    let x = data.allWpPost.edges.slice(currentPage * 6, currentPage * 6 + 6);
    setDisplayData(x);
  }, [currentPage]);

  return (
    <div>
      <div>
        <section className="page-title-sec" style={{ backgroundImage: `url(${sectiongbg})` }} >
          <div className="auto-container">
            <div className="row">
              <div className="col-md-12">
                <div className="content-box">
                  <h1>Welcome to our Blogs & eBooks</h1>
                  <p>Read and Learn about Cybersecurity Best Practices, Tips & Tricks</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="light-blue-background mb-5">
          <div className="we-offer-sec services-sub-heading auto-container pt-5">
            <div className="row">
              <div className="col-md-12">
                <div className="content-box">
                  <h5 className="page-title mb-0">Our Latest Blog Posts</h5>
                </div>
              </div>
            </div>
          </div>
          <section className="blog-sec">
            <div className="auto-container">
              <div className="row">
                {displayData.map(({ node }, index) => (
                  <div className="col-lg-4 col-md-6 col-sm-12 blog-card" key={index}>
                    <div className="blog-block">
                      <div className="image-box position-relative">
                        <Link to={`/blog/${node.slug}`}>
                          <img className="blog-card-image" src={node.featuredImage.node.localFile.childImageSharp.fixed.src} alt="IRM Consulting & Advisory" />
                          <div className="position-relative">
                            <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                              <svg viewBox="0 0 2150 480" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z" fill="#fff"></path></svg>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="text-box pb-4 px-3">
                        <h5><Link to={node.slug}>{node.title}</Link></h5>
                        <h5>by IRM Consulting & Advisory</h5>
                        <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                        <Link to={`/blog/${node.slug}`} className="theme-btn btn-style-one">Read More</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row">
                <div className="col-sm-12 d-flex justify-content-center">
                  <button className={`blog-pagination-prev-btn transperent-bg ${currentPage === 0 && 'text-muted'}`}
                    disabled={currentPage === 0}
                    onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
                  <button className={`blog-pagination-next-btn transperent-bg ${currentPage === totalPages - 1 && 'text-muted'}`}
                    disabled={currentPage === totalPages - 1}
                    onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default AllBlog;
