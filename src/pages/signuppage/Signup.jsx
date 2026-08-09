import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "password" || name === "confirmPassword") {
      setConfirmPasswordError(false);
    }

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setConfirmPasswordError(true);
      return;
    }

    setConfirmPasswordError(false);

    console.log("Signup Data:", formData);

    // Later connect this with your backend
    navigate("/login");

  };

  return (

    <div className="signup-page">

      {/* ================= LOGO ================= */}

      <div className="signup-logo">

        <img
          src="/images/logo.svg"
          alt="MAGELLAN Logo"
        />

      </div>

      {/* ================= BACKGROUND ================= */}

      <div className="signup-background"></div>

      {/* ================= SIGNUP FORM ================= */}

      <form
        className="signup-form"
        onSubmit={handleSubmit}
      >

        {/* ================= EMAIL ================= */}

        <div className="signup-form-group">

          <label htmlFor="email">

            Email ID

          </label>

          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

        </div>

        {/* ================= PASSWORD ================= */}

        <div className="signup-form-group">

          <label htmlFor="password">

            Password

          </label>

          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

        </div>

        {/* ================= CONFIRM PASSWORD ================= */}

        <div className="signup-form-group">

          <label htmlFor="confirmPassword">

            Confirm Password

          </label>

          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          {confirmPasswordError && (

            <p className="signup-error">

              Passwords do not match

            </p>

          )}

        </div>

        {/* ================= BUTTON ================= */}

        <button type="submit">

          CREATE ACCOUNT

        </button>

      </form>

    </div>

  );

};

export default Signup;