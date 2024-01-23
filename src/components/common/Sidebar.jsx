import Link from "next/link";
import React from "react";

function Sidebar({ sidebarOpen, setSidebarOpen, children }) {
  return (
    <div
      className={`menu-toggle-btn-full-shape ${
        sidebarOpen ? "show-sidebar" : ""
      }`}
    >
      {children}
      <div className="menu-toggle-wrap">
        <div className="sidebar-top-area d-flex justify-content-between align-items-center">
          <div className="sidebar-logo py-3 rounded">
            <Link legacyBehavior href="/">
              <a>
                {" "}
                <img
                  alt="image"
                  className="img-fluid"
                  src="assets/images/bg/header-five-logo.svg"
                />
              </a>
            </Link>
          </div>
          <div className="cross-icon" onClick={() => setSidebarOpen(false)}>
            <i className="bx bx-x" />
          </div>
        </div>
        <div className="sidebar-body">
          <div className="sidebar-widget mb-60">
            <h3 className="blog-widget-title">Recent Article:</h3>
            <ul className="recent-post-list">
              <li className="recent-post-single">
                <Link legacyBehavior href="/blog-detials">
                  <a className="post-image">
                    <img src="assets/images/blog/recent-blog1.jpg" alt="" />
                  </a>
                </Link>
                <div className="post-content">
                  <Link legacyBehavior href="/blog-details">
                    <a className="date">07 January, 2022</a>
                  </Link>
                  <h5>
                    <Link
                      legacyBehavior
                      href="/blog-details"
                      data-cursor="Blog Details"
                    >
                      <a>Bootcamp; Change To Impressive Marketing Policy.</a>
                    </Link>
                  </h5>
                </div>
              </li>
              <li className="recent-post-single">
                <Link legacyBehavior href="/blog-detials">
                  <a className="post-image">
                    <img src="assets/images/blog/recent-blog2.jpg" alt="" />
                  </a>
                </Link>
                <div className="post-content">
                  <Link legacyBehavior href="/blog-detials">
                    <a className="date"> 02 March, 2022</a>
                  </Link>
                  <h5>
                    <Link
                      legacyBehavior
                      href="/blog-details"
                      data-cursor="Blog Details"
                    >
                      <a> Become A Expert Any Business Field.</a>
                    </Link>
                  </h5>
                </div>
              </li>
              <li className="recent-post-single">
                <Link legacyBehavior href="/blog-detials">
                  <a className="post-image">
                  <img src="assets/images/blog/recent-blog3.jpg" alt="" />
                  </a>
                </Link>
                <div className="post-content">
                  <Link legacyBehavior href="/blog-detials">
                    <a className="date">
                        
                    06 March, 2022
                    </a>
                  </Link>
                  <h5>
                    <Link legacyBehavior href="/blog-details" data-cursor="Blog Details">
                      Discussion Always Be Fast To Change Marketing Strategy.
                    </Link>
                  </h5>
                </div>
              </li>
            </ul>
          </div>
          <div className="booking-form style-two">
            <h3 className="form-title">Subscribe Newsletter</h3>
            <form className="form-style-one sibling-two">
              <div className="form-inner">
                <div className="input-icon">
                  <i className="bx bx-envelope" />
                </div>
                <input type="text" placeholder="Email*" />
              </div>
              <button className="eg-btn btn--primary-five btn--lg w-100">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
