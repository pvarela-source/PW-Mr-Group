import Link from "next/link";
import React from "react";

function Blog1() {
  return (
    <div className="blog-section pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center text-center mb-60">
          <div className="col-lg-10">
            <div className="section-title-one">
              <div className="section-subtitle d-flex justify-content-center">
                <img src="assets/images/icons/title-shape-before.svg" alt="" />
                Recent Blog
                <img src="assets/images/icons/title-shape-after.svg" alt="" />
              </div>
              <h2>
                Latest Our <span>Blog</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-5">
          <div className="col-lg-6">
            <div className="blog-one-single">
              <div className="blog-image">
                <img src="assets/images/blog/blog-one-1.jpg" alt="image" />
                <div className="blog-date">20 Jan 2023</div>
              </div>
              <ul className="blog-meta">
                <li>
                  <a href="#">
                    <i className="bi bi-person-bounding-box" />
                    By Rakhab
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-chat-dots-fill" />
                    (05) Comments
                  </a>
                </li>
              </ul>
              <div className="blog-content">
                <h4>
                  <Link
                    legacyBehavior
                    href="/blog-details"
                    data-cursor="Blog Details"
                  >
                    <a> Business Strategy Most Popular System To Grow.</a>
                  </Link>
                </h4>
                <Link legacyBehavior href="/blog-details">
                  <a className="readmore-btn">
                    Read More
                    <i className="bi bi-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blog-one-single">
              <div className="blog-image">
                <img src="assets/images/blog/blog-one-2.jpg" alt="image" />
                <div className="blog-date">20 Feb 2023</div>
              </div>
              <ul className="blog-meta">
                <li>
                  <a href="#">
                    <i className="bi bi-person-bounding-box" />
                    By Mokarram
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-chat-dots-fill" />
                    (12) Comments
                  </a>
                </li>
              </ul>
              <div className="blog-content">
                <h4>
                  <Link
                    legacyBehavior
                    href="/blog-details"
                    data-cursor="Blog Details"
                  >
                    <a>Grow Your Business With Management With Us.</a>
                  </Link>
                </h4>
                <Link legacyBehavior href="/blog-details">
                  <a className="readmore-btn">
                    Read More
                    <i className="bi bi-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog1;
