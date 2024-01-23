import Link from "next/link";
import React from "react";

function Topbar1() {
  return (
    <div className="topbar-five">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7 topbar-five-left">
            <ul className="topbar-list">
              <li>
                <Link legacyBehavior href="/blog-details"><a>Insight &amp; Events</a></Link>
              </li>
              <li>
                <Link legacyBehavior href="/faq"><a>Faq</a></Link>
              </li>
              <li>
                <Link legacyBehavior href="/portfolio-full"><a>Resources</a></Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-5 topbar-five-right">
            <ul className="topbar-address-list">
              <li>
                <i className="bi bi-telephone" />{" "}
                <a href="tel:+998-8776345">+998-8776345</a>
              </li>
              <li>
                <i className="bi bi-geo-alt" />
                <a href="#">Road: 02, House: 122-123, NewYork</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar1;
