import React, { useState } from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import Offcanvass from "./Offcanvass";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Navbarr(props) {
  const { cart, getCart, products, handleChange } = props;

  //tital quantity of items in cart
  let initialQuantitiy = 0;
  let totalQuantitiy;
  totalQuantitiy = cart.reduce(
    (previousValue, currentValue) => previousValue + currentValue.quantity,
    initialQuantitiy
  );

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleSearch = () => {
    if (`${"#search-form"}`) {
      console.log("hey ooo");
    } else {
      console.log("lulo");
    }
  };

  return (
    <div className="nav-cover">
      <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#">
            <div className="image-holder">
              <Link to={"/"}>
                <img src="images/logo.webp" alt="" />
              </Link>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
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

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search..."
                className="me-2"
                aria-label="Search"
                id="search-form"
              />
              {/* <Button variant="outline-success">Search</Button> */}
            </Form>

            <div className="list-cover">
              <ul className="second-list d-flex">
                <li className="nav-item " id="search-now" onClick={handleSearch}>
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
                  <Link onClick={handleShow}>
                    <div className="cart">
                      <i className="fa fa-cart-plus text-dark"></i>
                    </div>

                    <div className="display-none">{cart ? totalQuantitiy : 0}</div>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/"}>
                    <i className="fa fa-user"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </Navbar.Collapse>
        </Container>

        <Offcanvass
          setShow={setShow}
          handleClose={handleClose}
          handleShow={handleShow}
          show={show}
          cart={cart}
          handleChange={handleChange}
          getCart={getCart}
          products={products}
        />
      </Navbar>
    </div>
  );
}

export default Navbarr;
