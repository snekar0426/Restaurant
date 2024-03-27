// ResetPasswordPage.js
import React, { useState } from 'react';
import './ResetPassword.scss'; // Import the CSS file

function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your logic for handling the password reset here
    if (password === confirmPassword) {
      console.log('Password reset successful!');
    } else {
      console.error('Passwords do not match. Please try again.');
    }
  };

  return (
    <div className="reset-password-container">
      <h1 className="reset-password-header">Reset Password</h1>
      <p className="reset-password-description"></p>
      <form className="reset-password-form" onSubmit={handleSubmit}>
        <label className="reset-password-label">
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="reset-password-input"
            placeholder="Enter new password"
          />
        </label>
        <label className="reset-password-label">
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className="reset-password-input"
            placeholder="Confirm new password"
          />
        </label>
        <button type="submit" className="reset-password-submit-button">
          Reset Password
        </button>
      </form>
    </div>
  );
}

export default ResetPasswordPage;
