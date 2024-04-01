import { useEffect, useState } from "react";

export default function useCartItems() {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const getCart = () => {
    fetch("http://localhost:8000/cart", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setCart(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getCart();
  }, []);

  const handleChange = (product) => {
    const method = product.quantity < 1 ? "DELETE" : "PATCH";
    fetch(`http://localhost:8000/cart/${product.id}`, {
      method, //the method here refers to the method above, which is to delete when the product if product.quantity is less than 1 or update the quantity to the current value.
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    }).then(() => {
      getCart();
    });
  };

  const handleClick = (product, getCart) => {
    fetch(`http://localhost:8000/cart/${product.id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.id) {
          fetch(`http://localhost:8000/cart/${product.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: product.id, quantity: data.quantity + 1 }),
          })
            .then((res) => res.json())
            .then(() => getCart());
        } else {
          fetch(`http://localhost:8000/cart`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: product.id, quantity: 1 }),
          })
            .then((res) => res.json())
            .then(() => getCart());
        }
      })
      .catch((error) => {
        console.log(error.mess);
      });
  };

  return { handleClick, cart, warning, setCart, getCart, handleChange };
}
