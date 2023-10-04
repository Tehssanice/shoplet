import React from "react";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Contact() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="section-padding">
      <div class="row g-4 contact">
        <div class="col-xl-8">
          <div class="p-4 border">
            <form>
              <div class="form-body">
                <h4 class="mb-0 fw-bold">Contact Us</h4>
                <div class="my-3 border-bottom"></div>
                <div class="mb-3">
                  <label class="form-label">Enter Your Name</label>
                  <input type="text" class="form-control rounded-0" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Enter Email</label>
                  <input type="text" class="form-control rounded-0" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Phone Number</label>
                  <input type="text" class="form-control rounded-0" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Message</label>
                  <textarea class="form-control rounded-0" rows="4" cols="4"></textarea>
                </div>
                <div class="mb-0">
                  <a href="#/" class="btn btn-dark btn-ecomm" onClick={handleShow} variant="primary">
                    Send Message
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-xl-4">
          <div class="p-3 border">
            <div class="address mb-3">
              <h5 class="mb-0 fw-bold">Address</h5>
              <p class="mb-0 font-12">123 Street Name, City, Nigeria</p>
            </div>
            <hr />
            <div class="phone mb-3">
              <h5 class="mb-0 fw-bold">Phone</h5>
              <p class="mb-0 font-13">Toll Free (123) 472-796</p>
              <p class="mb-0 font-13">Mobile : +91-9910XXXX</p>
            </div>
            <hr />
            <div class="email mb-3">
              <h5 class="mb-0 fw-bold">Email</h5>
              <p class="mb-0 font-13">mail@example.com</p>
            </div>
            <hr />
            <div class="working-days mb-0">
              <h5 class="mb-0 fw-bold">Working Days</h5>
              <p class="mb-0 font-13">Mon - FRI / 8:30 AM - 5:30 PM</p>
            </div>
          </div>
        </div>

        {/* modal*/}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h3>Thank You</h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Thank You for Contacting us</h4>
            <p>We have received your message. We will reply as soon as possible.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              <a href="/">Home</a>
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
