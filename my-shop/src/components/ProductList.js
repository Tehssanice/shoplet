import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import Button from "react-bootstrap/Button";
import { Offcanvas } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";

export default function ProductList(props) {
  const products = props.product;
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 480 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 480, min: 280 },
      items: 2,
    },
    extraMobile: {
      breakpoint: { max: 280, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <div className="background-wrapper product-list">
        <section className="section-pad">
          <div className="container">
            {products && (
              <>
                <Carousel responsive={responsive}>
                  {products.map((product, index) => (
                    <div className="card " key={index}>
                      <div className="position-relative overflow-hidden">
                        <a href="/product-detail">
                          <div className="card-image">
                            <img src={product.image} className="card-img-top" alt="..." />
                          </div>
                        </a>
                      </div>
                      <div className="card-body">
                        <div className="product-info text-center">
                          <h6 className="mb-1 fw-bold product-name">{product.title}</h6>
                          <div className="ratings h6">{product.category}</div>
                          <p className="mb-0 h6 fw-bold product-price">$ {product.price}</p>
                          <Button className="btn btn-dark mt-3" onClick={handleShow}>
                            Add to cart
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
