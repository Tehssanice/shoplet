import React, { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function Offcanvass(props) {
  const { handleClose, show, cart, products, handleChange } = props;
  const [total, updateTotal] = useState(0);
  const [length, setLength] = useState(0);

  useEffect(() => {
    let priceTotal = 0;
    let totalLength = 0;
    if (cart && products) {
      cart.forEach((product) => {
        const thisProduct = products.filter((item) => item.id === product.id).pop();
        priceTotal += thisProduct.price * product.quantity;
        totalLength = product.quantity + cart.length;
      });
    }
    updateTotal(priceTotal.toFixed(2));
    setLength(totalLength);
    // console.log(totalLength);
  }, [cart, products]);

  return (
    <>
      {cart && products && (
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              {/* {`${cart.length > 0 ? You have ${cart.length} item(s) in cart : Your cart is empty`}} */}
              <div>You have {cart.length} item(s) in cart</div>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <hr />

          <Offcanvas.Body>
            <>
              {cart.map((product) => {
                const thisProduct = products.filter((item) => item.id === product.id).pop();

                // products being filtered is got from the array of 20 objects, so we check the id of the one clicked and match it to the one in the array and pass it as thisProduct. While the product.quantity and product.id is got from the cart, because the cart only holds id and quantity in it.
                return (
                  <div className="row align-items-center mb-3" key={product.id}>
                    <div className="col product-img mb-2">
                      <img src={thisProduct.image} alt="" />
                    </div>
                    <div className="col product-name">{thisProduct.title}</div>
                    <div className="col product-price">${(thisProduct.price * product.quantity).toFixed(2)}</div>

                    <div className="col control-button d-flex gap-2">
                      <button
                        className="btn"
                        onClick={() => handleChange({ ...product, quantity: product.quantity + 1 })}
                      >
                        +
                      </button>
                      <button className="btn">{product.quantity}</button>
                      <button
                        className="btn"
                        onClick={() => handleChange({ ...product, quantity: product.quantity - 1 })}
                      >
                        -
                      </button>
                    </div>
                    <hr />
                  </div>
                );
              })}
            </>

            <div className="cart-button-carrier">
              <span>Checkout </span>
              <button className="btn">${total}</button>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      )}
    </>
  );
}
