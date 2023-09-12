import React from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";

export default function Navbarr() {
  return (
    <div className="nav-cover">
      {["lg"].map((expand) => (
        <Navbar key={expand} expand={expand} className=" mb-3">
          <Container fluid>
            <Navbar.Brand href="#">
              <div className="image-holder">
                <a href="/">
                  <img src="images/logo.webp" alt="" />
                </a>
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
                    <a href="/">
                      <img src="images/logo.webp" alt="" />
                    </a>
                  </div>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <hr />
                  <Nav.Link href="/">About</Nav.Link>
                  <hr />
                  <Nav.Link href="/">Contact</Nav.Link>
                  <hr />
                  <Nav.Link href="/">Sign In</Nav.Link>
                  <hr />
                  <Nav.Link href="/">Sign Up</Nav.Link>
                  <hr />
                </Nav>

                <ul className="second-list d-flex">
                  <li className="nav-item">
                    <a href="/">
                      <i className="bi bi-search"></i>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="/">
                      <i className="bi bi-suit-heart"></i>
                    </a>
                  </li>

                  <li className="nav-item basket">
                    <a href="/">
                      <div className="cart">
                        <i className="bi bi-basket2 dark"></i>
                      </div>
                      <div className="display-none">0</div>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="/">
                      <i className="bi bi-person-circle"></i>
                    </a>
                  </li>
                </ul>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}
