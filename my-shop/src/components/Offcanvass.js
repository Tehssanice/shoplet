import React, { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function Offcanvass(props) {
  const { handleClose, show, cart, setCart } = props;
  const [price, setPrice] = useState(0);

  //update quantity increment

  const handleChange = (product) => {
    fetch(`http://localhost:8000/cart/${product.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    }).then(() => {
      setCart(cart.length ? cart.map((oneProduct) => (oneProduct.id === product.id ? product : oneProduct)) : []);
    });
  };

  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>You have {0} item(s) in cart</Offcanvas.Title>
        </Offcanvas.Header>
        <hr />

        <Offcanvas.Body>
          {cart && (
            <>
              {cart.map((product) => (
                <div className="row align-items-center mb-3" key={product.id}>
                  <div className="col product-img mb-2">
                    <img src={product.image} alt="" />
                  </div>
                  <div className="col product-name">{product.title}</div>
                  <div className="col product-price">${product.price}</div>

                  <div className="col control-button d-flex gap-2">
                    <button
                      className="btn btn-info"
                      onClick={() => handleChange({ ...product, quantity: product.quantity + 1 })}
                    >
                      +
                    </button>
                    <button className="btn btn-info">{product.quantity}</button>
                    <button
                      className="btn btn-info"
                      onClick={() => handleChange({ ...product, quantity: product.quantity - 1 })}
                    >
                      -
                    </button>
                  </div>
                  <hr />
                </div>
              ))}
            </>
          )}

          <div className="cart-button-carrier">
            <span>Total </span>
            <button className="btn">${price}</button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
