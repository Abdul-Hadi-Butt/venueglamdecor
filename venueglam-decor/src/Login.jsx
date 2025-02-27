import React from "react";
import { Link } from "react-router-dom";
import "./styles.css"; 

const Login = () => {
  return (
    <div className="container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />
        </div>
        <button type="submit" className="btn">Login</button>
      </form>
      <p className="redirect-text">
        Don't have an account? <Link to="/signup">Sign up here</Link>
      </p>
    </div>
  );
};

export default Login;
