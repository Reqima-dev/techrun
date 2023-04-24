import React from "react";
import PageHero from "../components/PageHero/PageHero";
import Helmet from "../components/Helmet/Helmet";

import "../styles/contact.css";

const Contact = () => {
  return (
    <Helmet title="Contact US">
      <PageHero pageTitle={"Contact US"} currentPage={"Contact US"} />
      <section className="container">
        <div className="contact-wrapper">
          <div className="row">
            <div className="rowLeft">
              <div className="contact-form">
                <div className="contact-form-header">
                  <h2>Get In Touch</h2>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
                <form action="">
                  <div className="formleft">
                    <div className="form-group">
                      <input
                        type="text"
                        class="form-control"
                        name="name"
                        placeholder="Your Name"
                        required=""
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        placeholder="Your Email"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      class="form-control"
                      name="subject"
                      placeholder="Your Subject"
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      cols="30"
                      rows="5"
                      class="form-control"
                      placeholder="Write Your Message"
                    />
                  </div>
                  <button type="submit" class="theme-btn">
                    Send Message <i class="bx bx-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
            <div className="contact-content">
              <div className="contact-info">
                <div className="contact-info-icon">
                  <i class="bx bxs-map"></i>
                </div>
                <div className="contact-info-content">
                  <h5>Office Address</h5>
                  <p>25/B Milford, New York, USA</p>
                </div>
              </div>
              <div className="contact-info">
                <div className="contact-info-icon">
                  <i class="bx bx-phone"></i>
                </div>
                <div className="contact-info-content">
                  <h5>Call Us</h5>
                  <p>+2 123 654 7898</p>
                </div>
              </div>
              <div className="contact-info">
                <div className="contact-info-icon">
                  <i class="bx bx-envelope"></i>
                </div>
                <div className="contact-info-content">
                  <h5>Email Us</h5>
                  <p>info@example.com</p>
                </div>
              </div>
              <div className="contact-info">
                <div className="contact-info-icon">
                  <i class="bx bx-time-five"></i>
                </div>
                <div className="contact-info-content">
                  <h5>Office Open</h5>
                  <p>Sun - Fri (08AM - 10PM)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31721.46191775601!2d2.42126695!3d6.3703924999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sbj!4v1682335200294!5m2!1sfr!2sbj"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </Helmet>
  );
};

export default Contact;
