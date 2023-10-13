import React from "react";

export default function Footer() {
  return (
    <div className="foot">
      <div className="row">
        <div className="col-12 col-lg-3">
          <div>
            <div className="image-holder">
              <a href="/">
                <img src="images/logo.webp" alt="" />
              </a>
            </div>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour, or randomised words which don't look even slightly believable.
            </p>
          </div>
        </div>
        <div className="col-12 col-lg-3">
          <ul>
            <li>Explore</li>
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/about">
              <li>About</li>
            </a>
            <a href="/contact">
              <li>Contact</li>
            </a>
          </ul>
        </div>

        <div className="col-12 col-lg-3">
          <ul>
            <li>Personal Links</li>
            <a href="/signin">
              <li>Sign In</li>
            </a>
            <a href="/signup">
              <li>Sign Up</li>
            </a>
            <a href="/profile">
              <li>Profile</li>
            </a>
          </ul>
        </div>

        <div className="col-12 col-lg-3 ">
          <ul>
            <li>Contact Us</li>
          </ul>
          <ul className="d-flex ">
            <li>
              <div className="circle">
                <a href="/">
                  <i className="bi bi-linkedin text-light"></i>
                </a>
              </div>
            </li>
            <li>
              <div className="circle">
                <a href="mailto:tessychidubem@gmail.com">
                  <i className="bi bi-envelope text-light"></i>
                </a>
              </div>
            </li>
            <li>
              <div className="circle">
                <a href="/">
                  <i className="bi bi-twitter text-light"></i>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="copyright">
          <p>Copyright @2023 Shoplet All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}
