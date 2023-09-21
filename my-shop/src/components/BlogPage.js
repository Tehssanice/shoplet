import React from "react";
import useFetch from "./useFetch";

export default function BlogPage() {
  const { data: blogs } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="blog-cards">
      <div className="row row-cols-1 row-cols-lg-3 g-4">blogs.map()</div>
      {blogs && (
        <>
          {blogs.map((blog) => (
            <div className="col">
              <div className="card">
                <img src="assets/images/blog/01.webp" className="card-img-top rounded-0" alt="..." />
                <div className="card-body">
                  <div className="d-flex align-items-center gap-4">
                    <div className="posted-by">
                      <p className="mb-0">
                        <i className="bi bi-person me-2"></i>
                        {blog.author}
                      </p>
                    </div>
                    <div className="posted-date">
                      <p className="mb-0">
                        <i className="bi bi-calendar me-2"></i>
                        {blog.date}
                      </p>
                    </div>
                  </div>
                  <h5 className="card-title fw-bold mt-3">{blog.title}</h5>
                  <p className="mb-0">{blog.description}</p>
                  <a href="blog-read.html" className="btn btn-outline-dark btn-ecomm mt-3">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
