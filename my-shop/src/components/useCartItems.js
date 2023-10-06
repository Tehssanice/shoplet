import { useState } from "react";

export default function useCartItems() {
  const [cart, setCart] = useState([]);

  const handleClick = (product) => {
    let isPresent = false;
    cart.forEach((oneItem) => {
      if (product.id === oneItem.id) {
        isPresent = true;
      }
    });
    if (isPresent) {
      return;
    }
    setCart([...cart, product]);
    console.log(product);
  };
  return { handleClick, cart };
}
