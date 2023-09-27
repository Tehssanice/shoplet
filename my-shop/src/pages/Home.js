import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ProductList from "../components/ProductList";
import useFetch from "../components/useFetch";
import BlogPage from "../components/BlogPage";

export default function Home() {
  const { data: products, isLoading, error } = useFetch("https://fakestoreapi.com/products");
  const { data: categories } = useFetch("https://fakestoreapi.com/products/categories");
  // const { data: items } = useFetch("https://hub.dummyapis.com/employee");
  // console.log(categories);

  const [filteredProducts, setFilteredProducts] = useState("");

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
                    <button onClick={() => setFilteredProducts("")} className="btn btn-outline-dark mx-2">
                      All
                    </button>
                    {categories && (
                      <>
                        {categories.map((category) => (
                          <li className="nav-item" role="presentation" key={category.index}>
                            <button
                              onClick={() => setFilteredProducts(category)}
                              className="btn btn-outline-dark sentence-case "
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
              {products && (
                <>
                  {products
                    .filter((product) => (filteredProducts ? product.category === filteredProducts : product))
                    .map((product) => (
                      <div className="col-lg-3 col-6 mb-4">
                        <div className="card " key={product.id}>
                          <div className="position-relative overflow-hidden">
                            <a href="/product-detail">
                              <div className="card-image">
                                <img src={product.imageUrl || product.image} className="card-img-top" alt="..." />
                              </div>
                            </a>
                          </div>
                          <div className="card-body">
                            <div className="product-info text-center">
                              <h6 className="mb-1 fw-bold product-name">
                                {product.title || product.firstName} {product.lastName}
                              </h6>
                              <div className="ratings h6">{product.category}</div>
                              <p className="mb-0 h6 fw-bold product-price">
                                {`$`}
                                {product.price || product.age}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </>
              )}
            </div>
          </div>

          <br />
          <br />
        </div>
      </div>

      <section className="product-thumb-slider section-padding">
        <div className="container">
          <div className="text-center pb-3">
            <h3 className="mb-0 h3 fw-bold">What We Offer!</h3>
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

      <section className="section-padding">
        <div className="container">
          <div className="text-center pb-3 pt-4">
            <h3 className="mb-0 fw-bold">Latest Blog</h3>
            <p className="mb-0 text-capitalize">Check our latest news</p>
          </div>

          {<BlogPage />}
        </div>
      </section>
    </>
  );
}
