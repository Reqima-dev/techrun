import React from "react";
import "../styles/blogArea.css";
import "../styles/servicearea.css";
import { blogData } from "../data/blogData";
import { Link } from "react-router-dom";
import slugify from "slugify";

export function BlogContent() {
  return (
    <div className="blogContent container">
      {blogData.map((index, i) => {
        const title = index.title;
        const slug = slugify(title, {
          replacement: "-",
          lower: true,
        });
        return (
          <div className="blogItem" key={i}>
            <div className="imgBLog">
              <img src={index.img} alt={index.title} />
            </div>
            <div className="blog-item-info">
              <div className="infoBLog">
                <div>
                  <i class="bx bx-user-circle"></i>
                  <span>By {index.author}</span>
                </div>
                <div>
                  <i class="bx bx-calendar"></i>
                  <span>{index.calendar}</span>
                </div>
              </div>
              <h4 className="blogTitle">
                <Link to={`/blog/${slug}`}>{index.title}</Link>
              </h4>
              <p>{index.paragraph}</p>

              <button className="theme-btn">
                <Link to={`/blog/${slug}`}>READ MORE</Link>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const BLogArea = () => {
  return (
    <>
      <div className="service_area blog_area">
        <div className="service_areaContent">
          <div className="headArea">
            <span className="site-title-tagline">OUR BLOG</span>
            <h2 className="site-title">
              News & <span>Blog</span>
            </h2>
            <div className="heading-divider"></div>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>

          <BlogContent />
        </div>
      </div>
    </>
  );
};

export default BLogArea;
