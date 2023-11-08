import React from "react";
import Navbarr from "../components/Navbarr";
import useCartItems from "../components/useCartItems";
import useFetch from "../components/useFetch";

export default function ErrorPage() {
  const { data: products } = useFetch("https://fakestoreapi.com/products");

  const { cart, setCart } = useCartItems();

  return (
    <>
      <Navbarr cart={cart} setCart={setCart} products={products} />

      <div>
        <h1>Error occurred, this page does not exist</h1>
      </div>
    </>
  );
}
