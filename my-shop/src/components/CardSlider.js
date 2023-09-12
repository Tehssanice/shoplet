import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function CardSlider() {
  return (
    <div>
      {/* <div id="carouselExampleControls" classNameName="carousel slide" data-ride="carousel">
        <div classNameName="carousel-inner">
          <div classNameName="carousel-item active">
            <div classNameName="cards-wrapper">
              <div classNameName="card">
                <div classNameName="image-wrapper">
                  <img src="images/carousel-img-1.png" classNameName="card-img-top" alt="..." />
                </div>
                <div classNameName="card-body">
                  <h5 classNameName="card-title">Card title</h5>
                  <p classNameName="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <a href="#" classNameName="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
              <div classNameName="card d-none d-md-block">
                <div classNameName="image-wrapper">
                  <img src="images/me.jpg" classNameName="card-img-top" alt="..." />
                </div>
                <div classNameName="card-body">
                  <h5 classNameName="card-title">Card title</h5>
                  <p classNameName="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <a href="#" classNameName="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
              <div classNameName="card d-none d-md-block">
                <div classNameName="image-wrapper">
                  <img src="images/girl.png" classNameName="card-img-top" alt="..." />
                </div>
                <div classNameName="card-body">
                  <h5 classNameName="card-title">Card title</h5>
                  <p classNameName="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <a href="#" classNameName="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
              <div classNameName="card d-none d-md-block">
                <div classNameName="image-wrapper">
                  <img src="images/men.JPG" classNameName="card-img-top" alt="..." />
                </div>
                <div classNameName="card-body">
                  <h5 classNameName="card-title">Card title</h5>
                  <p classNameName="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <a href="#" classNameName="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a classNameName="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span classNameName="carousel-control-prev-icon" aria-hidden="true"></span>
          <span classNameName="sr-only">Previous</span>
        </a>
        <a classNameName="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span classNameName="carousel-control-next-icon" aria-hidden="true"></span>
          <span classNameName="sr-only">Next</span>
        </a>
      </div> */}

      <section className="section-padding">
        <div className="container">
          <div className="product-thumbs">
            <div className="card">
              <div className="position-relative overflow-hidden">
                <div className="card-image">
                  <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                    <a href="/">
                      <i className="bi bi-heart"></i>
                    </a>
                    <a href="/">
                      <i className="bi bi-basket3"></i>
                    </a>
                    <a href="/" data-bs-toggle="modal" data-bs-target="#QuickViewModal">
                      <i className="bi bi-zoom-in"></i>
                    </a>
                  </div>
                  <a href="product-details.html">
                    <img src="images/carousel-img-2.png" className="card-img-top" alt="..." />
                  </a>
                </div>
              </div>
              <div className="card-body">
                <div className="product-info text-center">
                  <h6 className="mb-1 fw-bold product-name">Product Name</h6>
                  <div className="ratings mb-1 h6">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                  </div>
                  <p className="mb-0 h6 fw-bold product-price">$49</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="position-relative overflow-hidden">
                <div className="card-image">
                  <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                    <a href="/">
                      <i className="bi bi-heart"></i>
                    </a>
                    <a href="/">
                      <i className="bi bi-basket3"></i>
                    </a>
                    <a href="/" data-bs-toggle="modal" data-bs-target="#QuickViewModal">
                      <i className="bi bi-zoom-in"></i>
                    </a>
                  </div>
                  <a href="product-details.html">
                    <img src="images/me.JPG" className="card-img-top" alt="..." />
                  </a>
                </div>
              </div>
              <div className="card-body">
                <div className="product-info text-center">
                  <h6 className="mb-1 fw-bold product-name">Product Name</h6>
                  <div className="ratings mb-1 h6">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                  </div>
                  <p className="mb-0 h6 fw-bold product-price">$49</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="position-relative overflow-hidden">
                <div className="card-image">
                  <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                    <a href="/">
                      <i className="bi bi-heart"></i>
                    </a>
                    <a href="/">
                      <i className="bi bi-basket3"></i>
                    </a>
                    <a href="/" data-bs-toggle="modal" data-bs-target="#QuickViewModal">
                      <i className="bi bi-zoom-in"></i>
                    </a>
                  </div>
                  <a href="product-details.html">
                    <img src="images/girl.png" className="card-img-top" alt="..." />
                  </a>
                </div>
              </div>
              <div className="card-body">
                <div className="product-info text-center">
                  <h6 className="mb-1 fw-bold product-name">Product Name</h6>
                  <div className="ratings mb-1 h6">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                  </div>
                  <p className="mb-0 h6 fw-bold product-price">$49</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="position-relative overflow-hidden">
                <div className="card-image">
                  <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                    <a href="/">
                      <i className="bi bi-heart"></i>
                    </a>
                    <a href="/">
                      <i className="bi bi-basket3"></i>
                    </a>
                    <a href="/" data-bs-toggle="modal" data-bs-target="#QuickViewModal">
                      <i className="bi bi-zoom-in"></i>
                    </a>
                  </div>
                  <a href="product-details.html">
                    <img src="images/men.jpg" className="card-img-top" alt="..." />
                  </a>
                </div>
              </div>
              <div className="card-body">
                <div className="product-info text-center">
                  <h6 className="mb-1 fw-bold product-name">Product Name</h6>
                  <div className="ratings mb-1 h6">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                  </div>
                  <p className="mb-0 h6 fw-bold product-price">$49</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="position-relative overflow-hidden">
                <div className="card-image">
                  <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                    <a href="/">
                      <i className="bi bi-heart"></i>
                    </a>
                    <a href="/">
                      <i className="bi bi-basket3"></i>
                    </a>
                    <a href="/" data-bs-toggle="modal" data-bs-target="#QuickViewModal">
                      <i className="bi bi-zoom-in"></i>
                    </a>
                  </div>
                  <a href="product-details.html">
                    <img src="images/carousel-img-1.png" className="card-img-top" alt="..." />
                  </a>
                </div>
              </div>
              <div className="card-body">
                <div className="product-info text-center">
                  <h6 className="mb-1 fw-bold product-name">Product Name</h6>
                  <div className="ratings mb-1 h6">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                  </div>
                  <p className="mb-0 h6 fw-bold product-price">$49</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
