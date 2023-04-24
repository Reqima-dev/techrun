import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { blogData } from "../data/blogData";
import PageHero from "../components/PageHero/PageHero";
import slugify from "slugify";
import "../styles/blogSingle.css";
import Helmet from "../components/Helmet/Helmet";

const BlogSingle = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLinkClick = (event) => {
    window.scrollTo(0, 0);
  };

  const { slug } = useParams();
  const blog = blogData.find((blog) => {
    const blogSlug = slugify(blog.title).toLowerCase();
    const regex = new RegExp(`^${blogSlug}$`, "i"); // 'i' pour ignorer la casse
    return slug.match(regex);
  });
  const blogAcutelId = blog.id;
  const blogsSimilaire = blogData.filter((blog) => blog.id !== blogAcutelId);
  return (
    <Helmet title={blog.title}>
      <PageHero pageTitle={blog.title} currentPage={"Our Blog"} />
      <section className="container">
        <div className="BlogSingleContainer">
          <main>
            <div className="mainImg">
              <img src={blog.img} alt={blog.title} />
            </div>
            <div className="blogInfoAuthor">
              <div className="infoAuthor">
                <span>
                  <i class="bx bx-user"></i>
                  <Link to="#.">{blog.author}</Link>
                </span>
                <span>
                  <i class="bx bx-conversation"></i>
                  {blog.comment}
                </span>
                <span>
                  <i class="bx bx-like"></i>
                  {blog.like}
                </span>
              </div>
              <span>
                <i class="bx bx-share-alt"></i>
                <Link to="#.">Share</Link>
              </span>
            </div>

            <div className="blogDetailsContent">
              <h1 className="blog-details-title">{blog.title}</h1>
              <article>
                <p>{blog.content1}</p>
                <p>{blog.content2}</p>
                <blockquote className="blockqoute">
                  {blog.quote}
                  <h6 className="blockqoute-author">{blog.quoteAuthor}</h6>
                </blockquote>
                <p>
                  In a free hour when our power of choice is untrammelled and
                  when nothing prevents our being able to do what we like best,
                  every pleasure is to be welcomed and every pain avoided. But
                  in certain circumstances and owing to the claims of duty or
                  the obligations of business it will frequently occur that
                  pleasures have to be repudiated and annoyances accepted. The
                  wise man therefore always holds in these matters to this
                  principle of selection.
                </p>

                <div className="otherBlogImage">
                  {blogsSimilaire.map((imBlog, i) => {
                    if (i < 2) {
                      return (
                        <div className="img" key={i}>
                          <img src={imBlog.img} alt="" />
                        </div>
                      );
                    } else {
                      return null;
                    }
                  })}
                </div>
                <p>
                  Power of choice is untrammelled and when nothing prevents our
                  being able to do what we like best, every pleasure is to be
                  welcomed and every pain avoided. But in certain circumstances
                  and owing to the claims of duty or the obligations of business
                  it will frequently occur that pleasures have to be repudiated
                  and annoyances accepted. The wise man therefore always holds
                  in these matters to this principle of selection.
                </p>
              </article>
              <hr />
              <div className="blog-details-tags">
                <h5>Tags : </h5>
                <ul>
                  <li>
                    <Link to="#.">Design</Link>
                  </li>
                  <li>
                    <Link to="#.">Application</Link>
                  </li>
                  <li>
                    <Link to="#.">Branding</Link>
                  </li>
                </ul>
              </div>
            </div>
          </main>
          <aside className="sidebar">
            <div className="widget search">
              <h5 className="widget-title">Search</h5>
              <form action="" className="search-form">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Here..."
                />
                <button type="submit">
                  <i class="bx bx-search"></i>
                </button>
              </form>
            </div>
            <div className="widget category">
              <h5 className="widget-title">Category</h5>
              <div className="category-list">
                <Link to="#.">
                  <i class="bx bx-chevrons-right"></i>
                  Design
                  <span>(10)</span>
                </Link>
                <Link to="#.">
                  <i class="bx bx-chevrons-right"></i>
                  Development
                  <span>(15)</span>
                </Link>
                <Link to="#.">
                  <i class="bx bx-chevrons-right"></i>
                  SEO Optimization
                  <span>(20)</span>
                </Link>
                <Link to="#.">
                  <i class="bx bx-chevrons-right"></i>
                  Branding
                  <span>(25)</span>
                </Link>
                <Link to="#.">
                  <i class="bx bx-chevrons-right"></i>
                  Cyber Security
                  <span>(30)</span>
                </Link>
              </div>
            </div>
            <div className="widget recent-post">
              <h5 className="widget-title">Recent Post</h5>

              {blogsSimilaire.map((val, i) => {
                const titleSlug = val.title;
                const slug = slugify(titleSlug, {
                  replacement: "-",
                  lower: true,
                });
                if (i < 3) {
                  return (
                    <div className="recent-post-single" key={i}>
                      <div className="recent-post-img">
                        <img src={val.img} alt="thumb" />
                      </div>
                      <div className="recent-post-bio">
                        <h6>
                          <Link onClick={handleLinkClick} to={`/blog/${slug}`}>
                            {val.title}
                          </Link>
                        </h6>
                        <span>
                          <i class="bx bx-time-five"></i>25 August, 2022
                        </span>
                      </div>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
            <div className="widget social-share">
              <h5 className="widget-title">Follow Us</h5>
              <div className="social-share-link">
                <Link>
                  <i class="bx bxl-facebook"></i>
                </Link>
                <Link>
                  <i class="bx bxl-twitter"></i>
                </Link>
                <Link>
                  <i class="bx bxl-dribbble"></i>
                </Link>
                <Link>
                  <i class="bx bxl-whatsapp"></i>
                </Link>
                <Link>
                  <i class="bx bxl-youtube"></i>
                </Link>
              </div>
            </div>
            <div className="widget sidebar-tag">
              <h5 className="widget-title">Popular Tags</h5>
              <div className="tag-list">
                <Link to="#.">Design</Link>
                <Link to="#.">Branding</Link>
                <Link to="#.">App</Link>
                <Link to="#.">Software</Link>
                <Link to="#.">Development</Link>
                <Link to="#.">Technology</Link>
                <Link to="#.">Marketing</Link>
                <Link to="#.">Modern</Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </Helmet>
  );
};

export default BlogSingle;
