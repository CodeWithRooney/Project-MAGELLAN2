import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [passwordError, setPasswordError] = useState(false);

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "password") {
      setPasswordError(false);
    }

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    // Temporary password for prototype
    const correctPassword = "Magellan123";

    if (formData.password !== correctPassword) {
      setPasswordError(true);
      return;
    }

    setPasswordError(false);

    console.log("Login Data:", formData);

    // Redirect to Student Profile
    navigate("/studentprofile");

  };

  return (

    <div className="login-page">

      {/* ================= LOGO ================= */}

      <div className="login-logo">

        <img
          src="/images/logo.svg"
          alt="MAGELLAN Logo"
        />

      </div>

      {/* ================= BACKGROUND ================= */}

      <div className="login-background"></div>

      {/* ================= LOGIN FORM ================= */}

      <form
        className="login-form"
        onSubmit={handleSubmit}
      >

        {/* ================= EMAIL ================= */}

        <div className="login-form-group">

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

        <div className="login-form-group">

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

          {passwordError && (

            <p className="login-error">

              Incorrect Password

            </p>

          )}

        </div>

        {/* ================= LOGIN BUTTON ================= */}

        <button type="submit">

          LOGIN

        </button>

      </form>

    </div>

  );

};

export default Login;