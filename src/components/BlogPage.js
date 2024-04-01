import React from "react";
import useFetch from "./useFetch";

export default function BlogPage() {
  const { data: blogs } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="blog-cards">
      <div className="row">
        {blogs && (
          <>
            {blogs.map((blog, index) => (
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 mb-4" key={index}>
                <div className="card">
                  <img src={blog.image} className="card-img-top rounded-0" alt="..." />
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
    </div>
  );
}
