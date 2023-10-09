import React from "react";
import { useState } from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import useCartItems from "./useCartItems";
import Offcanvass from "./Offcanvass";
import { useCart } from "react-use-cart";

export default function Navbarr(props) {
  const { cart, handleClick, setCart } = props;

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const { isEmpty, totalItems, totalUniqueItems, updateItemQuantity, removeItem, emptyCart } = useCart();

  // const { handleClick, cart } = useCartItems("");
  // console.log(cart);

  return (
    <div className="nav-cover">
      {cart && (
        <>
          {["lg"].map((expand) => (
            <Navbar key={expand} expand={expand} className=" mb-3">
              <Container fluid>
                <Navbar.Brand href="#">
                  <div className="image-holder">
                    <Link to={"/"}>
                      <img src="images/logo.webp" alt="" />
                    </Link>
                  </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="start"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                      <div className="image-holder">
                        <Link to={"/"}>
                          <img src="images/logo.webp" alt="" />
                        </Link>
                      </div>
                    </Offcanvas.Title>
                  </Offcanvas.Header>

                  <Offcanvas.Body>
                    <Nav className="justify-content-start flex-grow-1 pe-3">
                      <Nav.Link href="/">Home</Nav.Link>
                      <hr />
                      <Nav.Link href="/about">About</Nav.Link>
                      <hr />
                      <Nav.Link href="/contact">Contact</Nav.Link>
                      <hr />
                      <Nav.Link href="/signin">Sign In</Nav.Link>
                      <hr />
                      <Nav.Link href="/signup">Sign Up</Nav.Link>
                      <hr />
                    </Nav>

                    <div className="list-cover">
                      <ul className="second-list d-flex">
                        <li className="nav-item">
                          <Link to={"/"}>
                            <i className="fa fa-search"></i>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link to={"/"}>
                            <i className="fa fa-heart-o fw-bold"></i>
                          </Link>
                        </li>

                        <li className="nav-item basket">
                          <Link to={"/"} onClick={handleShow}>
                            <div className="cart">
                              <i className="fa fa-cart-plus text-dark"></i>
                            </div>

                            <div className="display-none" handleClick={() => handleClick}>
                              {cart.length}
                            </div>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link to={"/"}>
                            <i className="fa fa-user"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
        </>
      )}

      <Offcanvass
        setShow={setShow}
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
        cart={cart}
        setCart={setCart}
      />
    </div>
  );
}
