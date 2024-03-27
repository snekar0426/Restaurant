import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import "./Register.scss"; // Import the CSS file
import { Link } from 'react-router-dom';

function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phonemobile, setPhonenumber] = useState("");
  const [dob, setDOB] = useState("");

  const signUp = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const newUser = { name, password, email, phonemobile, dob };
    localStorage.setItem("users", JSON.stringify([...users, newUser]));
    console.log("User registered successfully!");
  };

  function openSocialAuthentication(url) {
    window.open(url, '_blank');
  }

  return (
    <div className="register-container">
      <form>
        <div className="col-sm-6 offset-sm-3">
          <div className="register-header">
            <h1>Register Form</h1>
          </div>
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
          <input
            type="text"
            value={phonemobile}
            onChange={(e) => setPhonenumber(e.target.value)}
            className="form-control"
            placeholder="Phone Number"
          />
          <br />
          <input
            type="text"
            value={dob}
            onChange={(e) => setDOB(e.target.value)}
            className="form-control"
            placeholder="Date of Birth"
          />
          <br />
          <br />
          <button onClick={signUp} className="btn btn-primary">
            Sign Up
          </button>
          <div className="or">OR</div>
          <div className="social-icons">
            <FontAwesomeIcon icon={faGoogle} className="social-icon" onClick={() => openSocialAuthentication('https://accounts.google.com')} />
            <FontAwesomeIcon icon={faFacebook} className="social-icon" onClick={() => openSocialAuthentication('https://www.facebook.com')} />
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" onClick={() => openSocialAuthentication('https://www.linkedin.com')} />
          </div>
          <div className="user">Already a user? <Link to="/login" className="loguser">LOGIN</Link></div>
        </div>
      </form>
    </div>
  );
}

export default Register;
