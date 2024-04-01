import React from "react";
import Navbarr from "../components/Navbarr";
import useCartItems from "../components/useCartItems";
import useFetch from "../components/useFetch";

export default function Signin() {
  const { data: products } = useFetch("https://fakestoreapi.com/products");

  const { cart, setCart } = useCartItems();

  return (
    <>
      <Navbarr cart={cart} setCart={setCart} products={products} />

      <div className="section-padding">
        <div className="form-cover">
          <h1>Sign in</h1>
          <hr />
          <form action="">
            <label htmlFor="">Email</label>
            <input type="email" />
            <label htmlFor="">Password</label>
            <input type="password" />

            <hr />
            <button className="btn btn-dark">SIGN IN</button>
            <p className="text-center">
              Don't have an account? <a href="signup">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
