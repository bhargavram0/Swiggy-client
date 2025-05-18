import React, { useState } from "react";
import  Navbar  from "./Navbar";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");    
  const [email, setEmail] = useState("");

  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const sendOtp = () => {
    if (isLogin && phone.length < 10) {
      alert("Enter a valid phone number");
      return false;
    }
    if (!isLogin) {
      if (!name.trim() || !email.trim() || phone.length < 10) {
        alert("Please fill all fields with valid data");
        return false;
      }
    }
    setOtpSent(true);
    alert(`OTP sent to ${phone}`);
    return true;
  };

  const verifyOtp = () => {
    if (otp === "1234") {
      alert(isLogin ? "Login successful" : "Signup successful");
      resetForm();
    } else {
      alert("Invalid OTP. Try 1234");
    }
  };

  const resetForm = () => {
    setPhone("");
    setName("");
    setEmail("");
    setOtp("");
    setOtpSent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!otpSent) {
      sendOtp();
    } else {
      verifyOtp();
    }
  };

  return (
    <div className="login-container">
      <Navbar/>
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>

      <form onSubmit={handleSubmit} className="login-form">
        {!otpSent && !isLogin && (
          <>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>
          </>
        )}

        {!otpSent && (
          <div className="form-group">
            <label>Phone Number:</label>
            <input
              type="tel"
              value={phone}
              required
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
            />
          </div>
        )}

        {otpSent && (
          <div className="form-group">
            <label>Enter OTP:</label>
            <input
              type="text"
              value={otp}
              required
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP (Try 1234)"
            />
          </div>
        )}

        <button type="submit">
          {!otpSent ? "Send OTP" : "Verify OTP"}
        </button>
      </form>

      <p className="toggle-link">
        {isLogin ? (
          <>
            Don't have an account?{" "}
            <button
              onClick={() => {
                setIsLogin(false);
                resetForm();
              }}
            >
              Sign Up
            </button>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <button
              onClick={() => {
                setIsLogin(true);
                resetForm();
              }}
            >
              Login
            </button>
          </>
        )}
      </p>
    </div>
  );
}

export default AuthPage;
