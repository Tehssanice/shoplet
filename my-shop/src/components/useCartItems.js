import { useEffect, useState } from "react";

export default function useCartItems() {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (product) => {
    let isPresent = false;

    //check if item exists in cart
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

    cart.forEach((oneItem) => {
      if (product.id === oneItem.id) {
        isPresent = true;

        // console.log("product");
      }
    });

    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, product]);

    fetch("http://localhost:8000/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: product.id, quantity: 1 }),
    }).then(() => {
      console.log("new item added");
    });
  };

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

  return { handleClick, cart, warning, setCart, getCart };
}
