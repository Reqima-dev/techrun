import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import logo01 from "../../assets/logo.png";

const quickLinks = [
  { path: "/about", display: "About Us" },
  { path: "#.", display: "FAQ's" },
  { path: "#.", display: "Terms Of Service" },
  { path: "#.", display: "Privacy policy" },
  { path: "#.", display: "Our Services" },
  { path: "#.", display: "Team Members" },
  { path: "#.", display: "Latest Blog" },
];
const serviceLinks = [
  { path: "#", display: "IT Solutions" },
  { path: "#.", display: "Web Development" },
  { path: "#.", display: "Digital Marketing" },
  { path: "#.", display: "App Development" },
  { path: "#.", display: "Networking Service" },
  { path: "#.", display: "SEO Optimization" },
  { path: "#.", display: "Data Analysis" },
];

const Footer = () => {
  return (
    <footer className=" footer_area">
      <div className="footer-widget container">
        <div className="footer_flex">
          <div className="footer_info">
            <Link className="footer-logo">
              <img src={logo01} alt="logo" />
            </Link>
            <p>
              We are many variations of passages available but the majority have
              suffered alteration in some form by injected humour.
            </p>
            <div className="footer-contact">
              <ul>
                <li>
                  <i class="bx bxs-map"></i>25/B Milford Road, New York, USA
                </li>
                <li>
                  <Link href="tel:+21236547898">
                    <i class="bx bx-phone"></i>+2 123 654 7898
                  </Link>
                </li>
                <li>
                  <Link href="mailto:support@example.com">
                    <i class="bx bx-envelope"></i>support@example.com
                  </Link>
                </li>
              </ul>
            </div>
            <ul className="footer-social">
              <li>
                <Link href="#">
                  <i class="bx bxl-facebook"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i class="bx bxl-instagram"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i class="bx bxl-twitter"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i class="bx bxl-youtube"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer_links">
            <h4 className="footer-widget-title">Quick Links</h4>
            <ul className="footer-list">
              {quickLinks.map((links) => {
                return (
                  <li>
                    <Link to={links.path}>
                      <i class="bx bx-caret-right"></i>
                      {links.display}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="footer_links footer_servicelinks">
            <h4 className="footer-widget-title">Our Services</h4>
            <ul className="footer-list">
              {serviceLinks.map((links) => {
                return (
                  <li>
                    <Link to={links.path}>
                      <i class="bx bx-caret-right"></i>
                      {links.display}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="footer_links footerNewsletters">
            <h4 className="footer-widget-title">Newsletter</h4>
            <div className="footer-newsletter">
              <p>Subscribe Our Newsletter To Get Latest Update And News</p>
              <div className="subscribe-form">
                <form action="#">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your e-mail"
                  />
                  <button class="theme-btn" type="submit">
                    Subscribe Now <i class="bx bx-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="copyRow">
            <p className="copyright-text">
              © Copyright <span id="date">2023</span> <Link to="#."> Techrun </Link> 
              All Rights Reserved.
            </p>

            <ul className="footer-menu">
              <li>
                <Link href="#">Support</Link>
              </li>
              <li>
                <Link href="#">Terms Of Services</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
