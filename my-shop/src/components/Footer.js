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
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="col-12 col-lg-3">
          <ul>
            <li>Personal Links</li>
            <li>Sign In</li>
            <li>Sign Up</li>
            <li>User Profile</li>
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
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </li>
            <li>
              <div className="circle">
                <a href="mailto:tessychidubem@gmail.com">
                  <i className="bi bi-envelope"></i>
                </a>
              </div>
            </li>
            <li>
              <div className="circle">
                <a href="/">
                  <i className="bi bi-twitter "></i>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
