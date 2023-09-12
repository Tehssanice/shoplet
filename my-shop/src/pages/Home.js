import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CardSlider from "../components/CardSlider";

export default function Home() {
  return (
    <>
      <div className="section-pading one">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img className="d-block w-100" src="images/carousel-img-1.png" alt="First slide" />
            <Carousel.Caption>
              <h4>New Trending</h4>
              <h1>Children Fashion</h1>
              <p>
                <i>Last call for upto 15%</i>
              </p>
              <button className="btn btn-dark">SHOP NOW</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="images/carousel-img-2.png" alt="Second slide" />
            <Carousel.Caption>
              <h4>New Trending</h4>
              <h1>Women Fashion</h1>
              <p>
                <i>Last call for upto 10%</i>
              </p>
              <button className="btn btn-dark">SHOP NOW</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="images/carousel-img-3.png" alt="Third slide" />
            <Carousel.Caption>
              <h4>New Trending</h4>
              <h1>Men Fashion</h1>
              <p>
                <i>Last call for upto 25%</i>
              </p>
              <button className="btn btn-dark">SHOP NOW</button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="section-padding two">
        <div className="divider">
          <div className="hr">
            <hr />
          </div>
          <div className="text-center pb-3">
            <h2 className="mb-0 h3 fw-bold">Featured Products</h2>
            {/* <p className="mb-0 text-capitalize">The purpose of lorem ipsum</p> */}
          </div>
        </div>

        <CardSlider />
      </div>

      <div className="section-padding three">
        <div className="divider">
          <div className="hr">
            <hr />
          </div>
          <div className="text-center pb-3">
            <h2 className="mb-0 h3 fw-bold">Latest Products</h2>
          </div>
        </div>
      </div>
    </>
  );
}
