// ForgotPassword.js
import React, { useState } from 'react';
import './ForgotPassword.scss';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');

  const generateOtp = () => {
    // Simple random 6-digit OTP (for demonstration purposes)
    const generatedOtp = Math.floor(100000 + Math.random() * 900000);
    setOtp(generatedOtp.toString());
    setMessage(`An OTP has been sent to ${email}. Please check your email.`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic here to send a password reset email using the entered email
    generateOtp();
  };

  return (
    <div className="forgot-password-container">
      <h1 className="forgot-password-header">Forgot Password</h1>
      <form className="forgot-password-form" onSubmit={handleSubmit}>
        <label className="forgotpassemail">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="forgot-password-input"
            placeholder='Enter your email address'
          />
        </label>
        <button type="submit" className="forgot-password-button">
          Get OTP
        </button>
        <br />
        {otp && message && <div className="message">{message}</div>}
        <div className='back'>
          <Link to="/login" className="backlog">Back To Login</Link>
        </div>
      </form>
    </div>
  );
}


export default ForgotPassword;
