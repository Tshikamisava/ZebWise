// 'SignUp.js'
import React, { useState } from 'react';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSignUp = () => {
    // Implement sign-up logic here
    console.log('Sign Up button clicked!');
  };

  return (
    <div style={{ width: '400px', height: '650px', backgroundColor: 'white', padding: '20px', borderRadius: '2px', color: 'black' }}>
      <h2 style={{ color: 'green' }}>Create ZebWise Wallet</h2>
      <p style={{ color: 'black' }}>Paydy makes hustling easy (and cool) by redefining how you get payd.</p>

      <div style={{ color: 'black', marginTop: '20px' }}>
        <p>
          Already have an account? <a href="#" style={{ color: 'blue' }}>Sign In</a>
        </p>
        <input type="text" placeholder="Enter Full Name (names)" style={{ marginBottom: '20px', backgroundColor: '#f4f4f4', padding: '10px', height: '30px', borderRadius: '5px' }} />
        <input type="text" placeholder="Enter User Name" style={{ marginBottom: '20px', backgroundColor: '#f4f4f4', padding: '10px', height: '30px', borderRadius: '5px' }} />
        <input type="email" placeholder="Enter Email" style={{ marginBottom: '20px', backgroundColor: '#f4f4f4', padding: '10px', height: '30px', borderRadius: '5px' }} />
        <div style={{ position: 'relative', marginBottom: '20px' }}>
          <input type={showPassword ? 'text' : 'password'} placeholder="Password" style={{ backgroundColor: '#f4f4f4', padding: '10px', height: '30px', borderRadius: '5px' }} />
          <span style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }} onClick={togglePasswordVisibility}>
            {showPassword ? '👁️' : '👁️'}
          </span>
        </div>
        <div style={{ position: 'relative', marginBottom: '30px' }}>
          <input type={showConfirmPassword ? 'text' : 'password'} placeholder="Confirm Password" style={{ backgroundColor: '#f4f4f4', padding: '10px', height: '30px', borderRadius: '5px' }} />
          <span style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }} onClick={toggleConfirmPasswordVisibility}>
            {showConfirmPassword ? '👁️' : '👁️'}
          </span>
        </div>

        {/* Country Dropdown */}
        <label htmlFor="country" style={{ display: 'block', marginBottom: '10px' }}>Select Country:</label>
        <select id="country" style={{ width: '60%', padding: '10px', borderRadius: '5px', marginBottom: '30px', height: '40px' }}>
          <option value="usa">United States</option>
          <option value="canada">Canada</option>
          <option value="south-africa">South Africa</option>
          <option value="nigeria">Nigeria</option>
          <option value="ghana">Ghana</option>
          <option value="kenya">Kenya</option>
          {/* Add more countries as needed */}
        </select>

      </div>
      <div>
        {/* Sign Up Button */}
        <button
          onClick={handleSignUp}
          style={{
            width: '250px',
            height: '40px',
            backgroundColor: 'green',
            color: 'white',
            padding: '5px',
            borderRadius: '5px',
            cursor: 'pointer',
            marginLeft: '10px',
            transition: 'background-color 0.3s ease', // Adding a smooth transition
          }}
          onTouchStart={(e) => { e.target.style.backgroundColor = 'darkgreen'; }} // Darken color on touch start
          onTouchEnd={(e) => { e.target.style.backgroundColor = 'green'; }} // Restore color on touch end
        >
          Sign Up
        </button>
      </div>

    </div>
  );
};

export default SignUp;
