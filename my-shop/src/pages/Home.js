import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ProductList from "../components/ProductList";
import useFetch from "../components/useFetch";

export default function Home() {
  const { data: products, isLoading, error } = useFetch("https://hub.dummyapis.com/employee");
  const { data: items } = useFetch("https://fakestoreapi.com/products");
  console.log(items);
  console.log(products);

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
          </div>
        </div>
        {error && <div>{error}</div>}
        {isLoading && <div>Loading ...</div>}

        {items && <ProductList product={items} />}
      </div>

      <div className="background-wrapper">
        <div className="section-padding three">
          <div className="divider color">
            <div className="hr">
              <hr />
            </div>
            <div className="text-center pb-3">
              <h2 className="mb-0 h3 fw-bold">Latest Products</h2>
            </div>
          </div>
          {items && <ProductList product={items} />}

          <br />
          <br />
          {products && <ProductList product={products} />}
        </div>
      </div>
    </>
  );
}
