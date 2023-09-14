import React from "react";
import { Form } from "react-bootstrap";

export default function Signup() {
  return (
    <div className="section-padding">
      <div className="form-cover">
        <h1>Sign Up</h1>
        <hr />
        <form action="">
          <label htmlFor="">FirstName</label>
          <input type="text" />
          <label htmlFor="">LastName</label>
          <input type="text" />
          <label htmlFor="">Email</label>
          <input type="email" />
          <label htmlFor="">Password</label>
          <input type="password" />
          <div className="d-flex align-items-center gap-3">
            <input type="checkbox" name="" id="" />
            <span>I agree to terms and conditions</span>
          </div>
          <hr />
          <button className="btn btn-dark">SIGN UP</button>
          <p className="text-center">
            Already have an account? <a href="signin">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  );
}
