import React from "react";

export default function Signin() {
  return (
    <div className="section-padding">
      <div className="form-cover">
        <h1>Sign in</h1>
        <hr />
        <form action="">
          <label htmlFor="">Email</label>
          <input type="email" />
          <label htmlFor="">Password</label>
          <input type="password" />

          <hr />
          <button className="btn btn-dark">SIGN IN</button>
          <p className="text-center">
            Don't have an account? <a href="signup">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
}
