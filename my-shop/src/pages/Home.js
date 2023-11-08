import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import ProductList, { MiniProduct } from "../components/ProductList";
import useFetch from "../components/useFetch";
import BlogPage from "../components/BlogPage";
import Navbarr from "../components/Navbarr";
import useCartItems from "../components/useCartItems";

export default function Home() {
  const { data: products, isLoading, error } = useFetch("https://fakestoreapi.com/products");
  const { data: categories } = useFetch("https://fakestoreapi.com/products/categories");
  const [selectedCategory, setSelectedCategory] = useState("");

  const { cart, getCart, handleClick, handleChange } = useCartItems();

  return (
    <>
      <Navbarr cart={cart} getCart={getCart} products={products} handleChange={handleChange} />
      <div className="background-wrapper">
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
      </div>

      <div className="background-wrapper">
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
          {isLoading && (
            <div>
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="sr-only">...</span>
                </div>
              </div>
            </div>
          )}

          {products && <ProductList products={products} handleclick={handleClick} getCart={getCart} />}
        </div>
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

          <div className="categories">
            <div className="row">
              <div className="col-12 mx-auto">
                <div className="product-tab-menu table-responsive">
                  <ul className="nav nav-pills flex-nowrap button-list" id="pills-tab" role="tablist">
                    <button
                      onClick={() => setSelectedCategory("")}
                      className={`btn btn-outline-light mx-2 ${selectedCategory === "" && "active"}`}
                    >
                      All
                    </button>
                    {categories && (
                      <>
                        {categories.map((category, index) => (
                          <li className="nav-item" role="presentation" key={index}>
                            <button
                              onClick={() => setSelectedCategory(category)}
                              className={`btn btn-outline-light sentence-case ${
                                selectedCategory === category && "active"
                              }`}
                              data-bs-toggle="pill"
                              type="button"
                            >
                              {category}
                            </button>
                          </li>
                        ))}
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row-container">
            <div className="row row-cols-1 row-cols-md-3">
              {products &&
                products
                  .filter((product) => (selectedCategory ? product.category === selectedCategory : product))
                  .map((product) => (
                    <MiniProduct getCart={getCart} key={product.id} product={product} handleclick={handleClick} />
                  ))}
            </div>
          </div>
        </div>
      </div>

      <div className="background-wrapper">
        <section className="product-thumb-slider section-padding">
          <div className="container">
            <div className="divider width">
              <div className="hr">
                <hr />
              </div>
              <div className="text-center pb-3">
                <h2 className="mb-0 h3 fw-bold">What We Offer !</h2>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 ">
              <div className="col d-flex">
                <div className="card depth border-0 rounded-0 border-bottom border-primary border-3 w-100">
                  <div className="card-body text-center">
                    <div className="h1 fw-bold my-2 text-primary">
                      <i className="bi bi-truck"></i>
                    </div>
                    <h5 className="fw-bold">Free Delivery</h5>
                    <p className="mb-0">
                      Nor again is there anyone who loves or pursues or desires to obtain pain of itself.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col d-flex">
                <div className="card depth border-0 rounded-0 border-bottom border-danger border-3 w-100">
                  <div className="card-body text-center">
                    <div className="h1 fw-bold my-2 text-danger">
                      <i className="bi bi-credit-card"></i>
                    </div>
                    <h5 className="fw-bold">Secure Payment</h5>
                    <p className="mb-0">
                      Nor again is there anyone who loves or pursues or desires to obtain pain of itself.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col d-flex">
                <div className="card depth border-0 rounded-0 border-bottom border-success border-3 w-100">
                  <div className="card-body text-center">
                    <div className="h1 fw-bold my-2 text-success">
                      <i className="bi bi-minecart-loaded"></i>
                    </div>
                    <h5 className="fw-bold">Free Returns</h5>
                    <p className="mb-0">
                      Nor again is there anyone who loves or pursues or desires to obtain pain of itself.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col d-flex">
                <div className="card depth border-0 rounded-0 border-bottom border-warning border-3 w-100">
                  <div className="card-body text-center">
                    <div className="h1 fw-bold my-2 text-warning">
                      <i className="bi bi-headset"></i>
                    </div>
                    <h5 className="fw-bold">24/7 Support</h5>
                    <p className="mb-0">
                      Nor again is there anyone who loves or pursues or desires to obtain pain of itself.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="background-wrapper">
        <section className="section-padding">
          <div className="container">
            <div className="divider width">
              <div className="hr">
                <hr />
              </div>
              <div className="text-center pb-3">
                <h2 className="mb-0 h3 fw-bold">Blog Posts Here</h2>
              </div>
            </div>

            {<BlogPage />}
          </div>
        </section>
      </div>
    </>
  );
}
