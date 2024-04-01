import React, { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import Button from "react-bootstrap/Button";
import "react-multi-carousel/lib/styles.css";

export default function ProductList({ products, handleclick, getCart }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 480 },
      items: 3,
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

  return (
    <div>
      <div className="background-wrapper product-list">
        <section className="section-pad">
          <div className="container">
            {products && (
              <>
                <Carousel responsive={responsive}>
                  {products.map((product) => (
                    <MiniProduct
                      getCart={getCart}
                      key={product.id}
                      product={product}
                      handleclick={handleclick}
                      isCarousel={true}
                    />
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

export function MiniProduct({ product, getCart, handleclick, isCarousel = false }) {
  return (
    <div className={isCarousel ? "" : "col-lg-3 col-6 mb-4"} key={product.id}>
      <div className="card" key={product.id}>
        <div className="position-relative overflow-hidden">
          <Link to={`/product-detail/${product.id}`}>
            <div className="card-image">
              <img src={product.image} className="card-img-top" alt="..." />
            </div>
          </Link>
        </div>
        <div className="card-body">
          <div className="product-info text-center">
            <h6 className="mb-1 fw-bold product-name">{product.title}</h6>
            <div className="ratings h6">{product.category}</div>
            <p className="mb-0 h6 fw-bold product-price">$ {product.price}</p>
            <Button className="btn btn-dark mt-3" onClick={() => handleclick(product, getCart)}>
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
