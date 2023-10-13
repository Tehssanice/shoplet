import React, { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function Offcanvass(props) {
  const { handleClose, show, cart, setCart } = props;
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handlePrice = () => {
    let answer = 0;
    cart.map((product) => (answer += quantity * product.price));
    setPrice(answer);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((product) => product.id !== id);
    setCart(arr);
    console.log("item removed");
  };

  const handleChange = (product, d) => {
    let ind = -1;

    cart.forEach((singleItem, index) => {
      if (singleItem.id === product.id) {
        ind = index;
      }
    });

    const tempArray = cart;
    // tempArray[ind].quantity = 1;
    tempArray[ind].quantity += d;

    if (tempArray[ind].quantity === 0) {
      tempArray[ind].quantity = 1;
      // setQuantity(quantity);
    }
    setCart([...tempArray]);
    console.log(product, d);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>You have {cart.length} item(s)</Offcanvas.Title>
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
                    <button className="btn btn-info" onClick={() => handleChange(product, -1)}>
                      -
                    </button>
                    <button className="btn btn-info">{quantity}</button>
                    <button className="btn btn-info" onClick={() => handleChange(product, +1)}>
                      +
                    </button>
                    <button className="btn btn-danger" onClick={() => handleRemove(product.id)}>
                      <i className="fa fa-trash" aria-hidden="true"></i>
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
