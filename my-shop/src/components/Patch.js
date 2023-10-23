import React, { useState } from "react";

export default function Patch() {
  const [cart, setCart] = useState([]);

  const handlePatch = (product) => {
    fetch("http://localhost:8000/cart/2", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: product.id, quantity: 1 }),
    }).then(() => {
      console.log("item updated!!!");
    });
  };

  return [handlePatch, cart, setCart];
}
