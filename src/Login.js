// Login.js
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Login.scss"; // Import the CSS file

function Login() {
  const [name, setName] = useState("");  // Add 'name' state
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const signIn = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      alert("User logged in successfully!");
    } else {
      alert("Invalid credentials");
    }
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Login Form</h1>
      </div>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          placeholder="Name"
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          placeholder="Password"
        />
        <br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          placeholder="Email"
        />
        <br />
        <div className="remember">
          <label>
            <input type="checkbox" checked={rememberMe} onChange={handleRememberMe} />
            Remember Me
          </label>
        </div>
        <br />
        <button onClick={signIn} className="btn btn-primary">  {/* Change from signUp to signIn */}
          Login
        </button>
        <div className="fornew">
          <span className="forgot-password">
            <Link to="/register" className="account">Create New Account</Link> &nbsp; &nbsp; &nbsp; &nbsp;
            {/* Link to the Forgot Password page */}
            <Link to="/forgotpassword" className="forgot">Forgot Password?</Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Login;
