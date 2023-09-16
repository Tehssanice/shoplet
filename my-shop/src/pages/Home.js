import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ProductList from "../components/ProductList";
import useFetch from "../components/useFetch";

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
            <div class="d-flex justify-content-center">
              <div class="spinner-border" role="status">
                {/* <span class="sr-only">Loading...</span> */}
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
              <div className="col-lg-4 col-12 mx-auto">
                <div class="product-tab-menu table-responsive">
                  <ul class="nav nav-pills flex-nowrap button-list" id="pills-tab" role="tablist">
                    <button onClick={() => setFilteredProducts("")} className="btn btn-outline-dark mx-2">
                      All
                    </button>
                    {categories && (
                      <>
                        {categories.map((category) => (
                          <li class="nav-item" role="presentation" key={category.index}>
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
                            <a href="/">
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

          {/* {items && <ProductList product={items} />} */}
        </div>
      </div>
    </>
  );
}
