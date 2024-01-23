import Link from "next/link";
import React, { useEffect, useReducer, useRef } from "react";
const initialState = {
  activeMenu: "",
  activeSubMenu: "",
  menuOpen: false,
  modalOpen: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_MENU":
      return {
        activeMenu: state.activeMenu === action.menu ? "" : action.menu,
        activeSubMenu: ""
      };
    case "TOGGLE_SUB_MENU":
      return {
        activeMenu: state.activeMenu,
        activeSubMenu: state.activeSubMenu === action.subMenu ? "" : action.subMenu
      };
      case "TOGGLE_MODAL":
      return { ...state, modalOpen: !state.modalOpen };
    case "setScrollY":
      return { ...state, scrollY: action.payload };
    default:
      return { ...state };
  }
}
function Header3() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const headerRef = useRef(null);

  const handleScroll = () => {
    const { scrollY } = window;
    dispatch({ type: "setScrollY", payload: scrollY });
  };
 
  const toggleMenu = (menu) => {
    dispatch({ type: "TOGGLE_MENU", menu });
  };

  const toggleSubMenu = (subMenu) => {
    dispatch({ type: "TOGGLE_SUB_MENU", subMenu });
  };
  function toggleModal() {
    dispatch({ type: "TOGGLE_MODAL" });
  }
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const mobileBtn = document.querySelector(".mobile-menu-btn");

    const nav = document.querySelector(".main-nav");
    const menuClose = document.querySelector(".menu-close-btn");
    mobileBtn.addEventListener("click", () => {
      nav.classList.add("show-menu");
    });
    menuClose.addEventListener("click", () => {
      nav.classList.remove("show-menu");
    });
  });
  return (
    <>
      <div className="topbar-three d-md-flex d-none">
        <div className="topbar-left">
          <h6>
            Bienvenido a nuestra empresa , suscríbase a nuestro{" "}
            <Link legacyBehavior href="/faq">
              <a>Boletin</a>
            </Link>
          </h6>
        </div>
        <div className="topbar-right">
          <div className="social-list">
            <ul className="social-style-two">
              <li>
                <a href="https://www.linkedin.com/">
                  <i className="bx bxl-linkedin" />
                </a>
              </li>
              {/* <li>
                <a href="https://www.pinterest.com/">
                  <i className="bx bxl-pinterest-alt" />
                </a>
              </li> */}
              <li>
                <a href="https://www.instagram.com/">
                  <i className="bx bxl-instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <i className="bx bxl-facebook" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.32809515636!2d90.3665091154322!3d23.806929392530332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d6f6b8c2ff%3A0x3b138861ee9c8c30!2sMirpur%2010%20Roundabout%2C%20Dhaka%201216!5e0!3m2!1sen!2sbd!4v1671510521035!5m2!1sen!2sbd"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`mobile-search ${state.modalOpen ? "slide" : ""}`}>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center gy-4">
            <div className="col-10">
              <label>Get StartWhat are you looking for?</label>
              <input
                type="text"
                placeholder="Search Products, Category, Services"
              />
            </div>
            <div className="col-2 d-flex justify-content-end align-items-center gap-2">
              <div className="search-cross-btn ">
                <i className="bi bi-search" />
              </div>
              <div className="search-cross-btn " onClick={toggleModal}>
                <i className="bi bi-x-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <header
        ref={headerRef}
        className={
          state.scrollY > 120
            ? "header-area style-3 pl-110 pr-110 sticky"
            : "header-area style-3 pl-110 pr-110"
        }
      >
        <div className="container-fluid d-flex justify-content-between align-items-center px-0">
          <div className="header-logo">
            <Link legacyBehavior href="/">
              <a>
                <img
                  alt="image"
                  className="img-fluid"
                  // src="assets/images/bg/header3-logo.svg"
                  src="assets/images/MrConsultingGroup/logo/MRCGR3.png"
                />
              </a>
            </Link>
          </div>
          <div className="main-nav">
            <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
              <div className="mobile-logo-wrap">
                <Link legacyBehavior href="/">
                  <a>
                    <img
                      alt="image"
                      className="img-fluid"
                      src="assets/images/MrConsultingGroup/logo/MRCGR3.png"
                    />
                  </a>
                </Link>
              </div>
              <div className="menu-close-btn">
                <i className="bi bi-x-lg text-dark" />
              </div>
            </div>
            <ul className="menu-list">
              <li className="menu-item-has-children">
                <Link legacyBehavior href="/index-technology">Inicio
                  {/* <a className="drop-down">Home</a> */}
                </Link>
              </li>
              <li className="menu-item-has-children">
                <Link legacyBehavior href="/services" className="drop-down">
                  <a>Servicios</a>
                </Link>
                <i
                  className="bi bi-chevron-down dropdown-icon"
                  onClick={() => toggleMenu("service")}
                />
                <ul
                  className={
                    state.activeMenu === "service"
                      ? "sub-menu d-block"
                      : "sub-menu"
                  }
                >
                  <li>
                    <Link legacyBehavior href="/services">
                      <a>Services One</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/services-two">
                      <a>Services Two</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/services-three">
                      <a>Services Three</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/services-four">
                      <a>Services Four</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/services-five">
                      <a>Services Five</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/service-details">
                      <a>Services Details</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="/about" className="drop-down">
                  Acerca de
                </a>
              </li>
              <li>
                <Link legacyBehavior href="/contact">
                  <a>Contactanos</a>
                </Link>
              </li>
            </ul>
            {/* mobile-search-area */}
            <div className="d-flex justify-content-start align-items-center flex-row d-lg-none d-block mt-5">
              <Link legacyBehavior href="/service-details">
                <a className="eg-btn btn--md btn--primary-three d-flex d-lg-none">
                  Solicitar contacto
                </a>
              </Link>
            </div>
          </div>
          <div className="nav-right header-five-right d-flex jsutify-content-end align-items-center gap-sm-5 gap-4">
            <div className="header-icons">
              <a href="#" className="search-btn" onClick={toggleModal}>
                <i className="bi bi-search" />
              </a>
              {/* <a href="#" className="cart-icon">
                <i className="bi bi-bag-check" />
              </a> */}
            </div>
            <Link legacyBehavior href="/service-details">
              <a className="eg-btn btn--md btn--primary-three d-xl-flex d-none">
                Solicitar contacto
              </a>
            </Link>
            <div className="header-phone">
              <div className="icon">
                <i className="bx bx-phone-call" />
              </div>
              <div className="email">
                <span>Llama ahora</span>
                <h5>
                  <a href="tel:+504-12345678">+504-12345678</a>
                </h5>
              </div>
            </div>
            <div className="mobile-menu-btn d-lg-none d-block">
              <i className="bi bi-list text-dark" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header3;
