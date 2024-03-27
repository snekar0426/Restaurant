// OTPPage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function OTPPage() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const verifyOTP = () => {
    // Replace with your actual logic for verifying OTP
    const isOTPValid = verifyOTPFunction(otp.join(''));
    if (isOTPValid) {
      // Handle successful verification (e.g., navigate to the next page)
      console.log('OTP verified successfully!');
      // Redirect to Reset Password page
      navigate('/reset-password');
    } else {
      // Handle unsuccessful verification (e.g., display an error message)
      console.error('Invalid OTP. Please try again.');
    }
  };

  const handleOtpInputChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);
  };

  return (
    <div className="otp-container">
      <h1 className="otp-header">OTP Verification</h1>
      <p className="otp-description">Check your email for the OTP and enter it below:</p>
      <form className="otp-form" onSubmit={verifyOTP}>
        <div className="otp-input-container">
          {[1, 2, 3, 4, 5, 6].map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={otp[index] || ''}
              onChange={(e) => handleOtpInputChange(e, index)}
              className="otp-digit-input"
            />
          ))}
        </div>
        <div className='otp'>
          Haven't received the verification code? &nbsp; &nbsp;
          <Link to="/otp" className="resendotp">Resend OTP</Link>
        </div>
        <button type="submit" className="otp-submit-button">
          Verify OTP
        </button>
        <br/>
      </form>
      <div className='back'>
        <Link to="/login" className="backlog1">Back To Login</Link>
      </div>
    </div>
  );
}

// Placeholder functions (replace with your actual implementation)
const verifyOTPFunction = (otp) => {
  // Implement your logic for verifying the entered OTP
  return otp === '123456'; // Replace with your actual OTP verification logic
};

export default OTPPage;
