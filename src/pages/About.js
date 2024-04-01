import React from "react";
import Navbarr from "../components/Navbarr";
import useCartItems from "../components/useCartItems";
import useFetch from "../components/useFetch";

export default function About() {
  const { data: products } = useFetch("https://fakestoreapi.com/products");

  const { cart, setCart } = useCartItems();

  return (
    <div>
      <Navbarr cart={cart} setCart={setCart} products={products} />
      <section className="section-padding ">
        <div className="container mt-5">
          <div className="row g-4">
            <div className="col-12 col-xl-6 text-start">
              <h3 className="fw-bold">Our Story</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged.
              </p>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more obscure.
              </p>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College.
              </p>
            </div>
            <div className="col-12 col-xl-6 mb-5">
              <img
                src="https://images.pexels.com/photos/7679877/pexels-photo-7679877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>

          <div className="divider">
            <div className="hr">
              <hr />
            </div>
            <div className="text-center pb-3">
              <h2 className="mb-0 h3 fw-bold">Why Choose Us</h2>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-xl-3 g-4 why-choose">
            <div className="col d-flex">
              <div className="card rounded-0 shadow-none w-100">
                <div className="card-body">
                  <i className="fa fa-truck fs-3"></i>

                  <h5 className="my-3 fw-bold">Free Shipping</h5>
                  <p className="mb-0">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industr in some form.
                  </p>
                </div>
              </div>
            </div>
            <div className="col d-flex">
              <div className="card rounded-0 shadow-none w-100">
                <div className="card-body">
                  <i className="fa fa-credit-card fw-bold fs-4"></i>

                  <h5 className="my-3 fw-bold">100% Back Gaurantee</h5>
                  <p className="mb-0">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industr in some form.
                  </p>
                </div>
              </div>
            </div>

            <div className="col d-flex">
              <div className="card rounded-0 shadow-none w-100">
                <div className="card-body">
                  <i className="fa fa-headphones fw-bold fs-3"></i>

                  <h5 className="my-3 fw-bold">Online Support 24/7</h5>
                  <p className="mb-0">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industr in some form.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
