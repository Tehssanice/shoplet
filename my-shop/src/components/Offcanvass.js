import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useCart } from "react-use-cart";

export default function Offcanvass(props) {
  const products = props.items;

  const { isEmpty, totalItems, totalUniqueItems, updateItemQuantity, removeItem, emptyCart } = useCart();

  const [cart, setCart] = useState([]);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>You have {cart.length} item(s)</Offcanvas.Title>
        </Offcanvas.Header>
        <hr />

        <Offcanvas.Body>
          {products && (
            <>
              {products.map((product) => (
                <div className="row align-items-center mb-3" key={product.id}>
                  <div className="col product-img mb-2">
                    <img src={product.image} alt="" />
                  </div>
                  <div className="col product-name">{product.title}</div>
                  <div className="col product-price">${product.price}</div>

                  <div className="col control-button d-flex gap-2">
                    <button
                      className="btn btn-info"
                      onClick={() => updateItemQuantity(product.id, product.quantity - 1)}
                    >
                      -
                    </button>
                    {/* <div>{product.quantity}</div> */}
                    <button
                      className="btn btn-info"
                      onClick={() => updateItemQuantity(product.id, product.quantity + 1)}
                    >
                      +
                    </button>
                    <button className="btn btn-danger">
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
            <button className="btn">$0</button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
