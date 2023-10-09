import { useState } from "react";

export default function useCartItems() {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (product) => {
    let isPresent = false;
    cart.push(product);
    setCart(cart);

    cart.forEach((oneItem) => {
      if (product.id === oneItem.id) {
        isPresent = true;
      }
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
    }

    fetch("http://localhost:8000/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    }).then(() => {
      console.log("new item added");
    });

    console.log(product);
    console.log(cart);
  };
  return { handleClick, cart, warning, setCart };
}
