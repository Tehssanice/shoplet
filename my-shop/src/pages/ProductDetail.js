import React, { useState } from "react";
import useFetch from "../components/useFetch";
import Carousel from "react-multi-carousel";
import ProductList from "../components/ProductList";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function ProductDetail() {
  const { data: products, isLoading, error } = useFetch("https://fakestoreapi.com/products");
  const { data: reviews } = useFetch("http://localhost:8000/reviews");

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 480 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 480, min: 280 },
      items: 1,
    },
    extraMobile: {
      breakpoint: { max: 280, min: 0 },
      items: 1,
    },
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 col-md-6">
            <div className="product-image-cover">
              <div className="product-image">
                <img src="images/girl.png" alt="" />
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 col-md-6 d-flex align-items-center p-3 mb-5">
            <div className="product-info product-page">
              <h4 className="product-title fw-bold mb-1">Pearly Gown</h4>
              <p className="mb-0">Women pearly gown</p>
              <div className="product-rating">
                <div className="hstack gap-2 border p-1 mt-3 ">
                  <div>
                    <span className="rating-number">4.8</span>
                    <i className="bi bi-star-fill ms-1 text-warning"></i>
                  </div>
                  <div className="vr"></div>
                  <div>162 Ratings</div>
                </div>
              </div>
              <hr />
              <div className="product-price d-flex align-items-center gap-3">
                <div className="h5 fw-bold">$458</div>
                <div className="h6 fw-light text-muted text-decoration-line-through">$2089</div>
                <div className="h5 fw-bold text-warning">(70% off)</div>
              </div>
              <p className="fw-bold mb-0 mt-1 text-light text-start">Inclusive of all taxes</p>

              <div className="cart-buttons mt-3">
                <div className="buttons d-flex flex-column flex-lg-row gap-3 mt-4">
                  {/* <a href="#" className="btn btn-lg btn-dark btn-ecomm px-5 py-3 col-lg-6">
                    <i className="bi bi-basket2 me-2" onClick={handleShow}></i>Add to Cart
                  </a> */}

                  <Button
                    variant="primary"
                    onClick={handleShow}
                    className="btn btn-lg btn-light btn-ecomm px-5 py-3 col-lg-6"
                  >
                    Add to Cart
                  </Button>
                  <a href="#/" className="btn btn-lg btn-outline-light btn-ecomm px-5 py-3 col-lg-6">
                    <i className="bi bi-suit-heart me-2"></i>Wishlist
                  </a>
                </div>

                <Offcanvas show={show} onHide={handleClose}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you have chosen. Like, text,
                    images, lists, etc.
                  </Offcanvas.Body>
                </Offcanvas>
              </div>
              <hr className="my-3" />
              <div className="product-info text-start">
                <h4 className="fw-bold mb-3">Product Details</h4>
                <p className="mb-1">There are many variations of passages of Lorem Ipsum</p>
                <p className="mb-1">All the Lorem Ipsum generators on the Internet tend to repeat</p>
                <p className="mb-1">
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                </p>
                <p className="mb-1">
                  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                </p>
              </div>
            </div>
          </div>
          <hr />

          <div className="section-padding two">
            <div className="customer-ratings">
              <h6 className="fw-bold mb-3">Customer Ratings</h6>
              <div className="d-flex align-items-center gap-4 gap-lg-5 flex-wrap flex-lg-nowrap">
                <div className="">
                  <h1 className="mb-2 fw-bold">
                    4.6
                    <span className="fs-5 ms-2 text-warning">
                      <i className="bi bi-star-fill"></i>
                    </span>
                  </h1>
                  <p className="mb-0">3.8k Verified Buyers</p>
                </div>
                <div className="vr d-none d-lg-block"></div>
                <div className="w-100">
                  <div className="rating-wrrap hstack gap-2 align-items-center">
                    <p className="mb-0">5</p>
                    <div className="">
                      <i className="bi bi-star"></i>
                    </div>
                    <div className="progress flex-grow-1 mb-0 rounded-0">
                      <div className="progress-bar bg-success" role="progressbar"></div>
                    </div>
                    <p className="mb-0">1528</p>
                  </div>
                  <div className="rating-wrrap hstack gap-2 align-items-center">
                    <p className="mb-0">4</p>
                    <div className="">
                      <i className="bi bi-star"></i>
                    </div>
                    <div className="progress flex-grow-1 mb-0 rounded-0">
                      <div className="progress-bar bg-success" role="progressbar"></div>
                    </div>
                    <p className="mb-0">253</p>
                  </div>
                  <div className="rating-wrrap hstack gap-2 align-items-center">
                    <p className="mb-0">3</p>
                    <div className="">
                      <i className="bi bi-star"></i>
                    </div>
                    <div className="progress flex-grow-1 mb-0 rounded-0">
                      <div className="progress-bar bg-info" role="progressbar"></div>
                    </div>
                    <p className="mb-0">258</p>
                  </div>
                  <div className="rating-wrrap hstack gap-2 align-items-center">
                    <p className="mb-0">2</p>
                    <div className="">
                      <i className="bi bi-star"></i>
                    </div>
                    <div className="progress flex-grow-1 mb-0 rounded-0">
                      <div className="progress-bar bg-warning" role="progressbar"></div>
                    </div>
                    <p className="mb-0">78</p>
                  </div>
                  <div className="rating-wrrap hstack gap-2 align-items-center">
                    <p className="mb-0">1</p>
                    <div className="">
                      <i className="bi bi-star"></i>
                    </div>
                    <div className="progress flex-grow-1 mb-0 rounded-0">
                      <div className="progress-bar bg-danger" role="progressbar"></div>
                    </div>
                    <p className="mb-0">27</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-3" />
          <div className="customer-reviews">
            <h6 className="fw-bold mb-3">Customer Reviews (875)</h6>
            <div className="reviews-wrapper row">
              {reviews && (
                <>
                  <Carousel responsive={responsive}>
                    {reviews.map((review, index) => (
                      <div className="col mb-4" key={index}>
                        <div className="card ">
                          <div className="card-body">
                            <div className="review-image-cover">
                              <div className="review-img">
                                <img src={review.image} alt="" />
                              </div>
                            </div>
                            <div className="d-flex flex-column mt-3 stack">
                              <div className="hstack gap-3">
                                <h5 className="mb-0">{review.writer}</h5>
                                <div className="vr"></div>
                                <div className="date-posted">{review.date}</div>
                              </div>
                              <div className="hstack">
                                <div className="">
                                  <i className="bi bi-hand-thumbs-up me-2 text-success"></i>68
                                </div>
                                <div className="mx-3"></div>
                                <div className="">
                                  <i className="bi bi-hand-thumbs-down me-2 text-danger"></i>24
                                </div>
                              </div>
                            </div>
                            <p className="mb-2">{review.content}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                    <hr />
                  </Carousel>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="background-wrapper">
          <div className="divider">
            <div className="hr">
              <hr />
            </div>
            <div className="text-center pb-3">
              <h2 className="mb-0 h3 fw-bold">Similar Products</h2>
            </div>
          </div>
          {error && <div>{error}</div>}
          {isLoading && (
            <div>
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  {/* <span className="sr-only">Loading...</span> */}
                </div>
              </div>
            </div>
          )}

          {products && <ProductList product={products} />}
        </div>
      </div>
    </div>
  );
}
