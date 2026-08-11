import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

/* ================= EYE ICON ================= */

const EyeIcon = () => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <path
            d="M2 12C2 12 5.5 5 12 5C18.5 5 22 12 22 12C22 12 18.5 19 12 19C5.5 19 2 12 2 12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />

        <circle
            cx="12"
            cy="12"
            r="3"
            stroke="currentColor"
            strokeWidth="2"
        />
    </svg>
);

/* ================= EYE OFF ICON ================= */

const EyeOffIcon = () => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <path
            d="M3 3L21 21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />

        <path
            d="M10.58 10.58C10.21 10.95 10 11.45 10 12C10 13.1 10.9 14 12 14C12.55 14 13.05 13.79 13.42 13.42"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />

        <path
            d="M9.88 5.09C10.55 4.89 11.26 4.75 12 4.75C18.5 4.75 22 12 22 12C22 12 20.45 15.2 17.39 17.39"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />

        <path
            d="M6.61 6.61C3.5 8.5 2 12 2 12C2 12 5.5 19.25 12 19.25C13.1 19.25 14.13 19.05 15.09 18.7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const Signup = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [serverError, setServerError] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (name === "password" || name === "confirmPassword") {
            setConfirmPasswordError(false);
        }

        setServerError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setConfirmPasswordError(true);
            return;
        }

        setConfirmPasswordError(false);
        setServerError("");

        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/auth/register`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify({
                        email: formData.email,
                        password: formData.password,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                console.error("Registration failed:", data);

                if (response.status === 409) {
                    setServerError(
                        "An account with this email already exists."
                    );
                } else if (response.status === 422) {
                    setServerError(
                        "Please enter a valid email and password."
                    );
                } else {
                    setServerError(
                        data.detail || "Registration failed."
                    );
                }

                return;
            }

            console.log("Registration successful:", data);

            navigate("/accountcreated", {
                state: {
                    message: data.message,
                    email: data.email,
                },
            });

        } catch (error) {
            console.error(
                "Could not connect to backend:",
                error
            );

            setServerError(
                "Could not connect to server. Please make sure the backend is running."
            );
        }
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

                    <div className="password-input-wrapper">

                        <input
                            type={
                                showPassword
                                    ? "text"
                                    : "password"
                            }
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            minLength={8}
                            required
                        />

                        <button
                            type="button"
                            className="password-toggle"
                            onClick={() =>
                                setShowPassword(
                                    (prev) => !prev
                                )
                            }
                            aria-label={
                                showPassword
                                    ? "Hide password"
                                    : "Show password"
                            }
                        >
                            {showPassword
                                ? <EyeIcon />
                                : <EyeOffIcon />
                            }
                        </button>

                    </div>

                </div>

                {/* ================= CONFIRM PASSWORD ================= */}

                <div className="signup-form-group">

                    <label htmlFor="confirmPassword">
                        Confirm Password
                    </label>

                    <div className="password-input-wrapper">

                        <input
                            type={
                                showConfirmPassword
                                    ? "text"
                                    : "password"
                            }
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            minLength={8}
                            required
                        />

                        <button
                            type="button"
                            className="password-toggle"
                            onClick={() =>
                                setShowConfirmPassword(
                                    (prev) => !prev
                                )
                            }
                            aria-label={
                                showConfirmPassword
                                    ? "Hide confirm password"
                                    : "Show confirm password"
                            }
                        >
                            {showConfirmPassword
                                ? <EyeIcon />
                                : <EyeOffIcon />
                            }
                        </button>

                    </div>

                    {confirmPasswordError && (
                        <p className="signup-error">
                            Passwords do not match
                        </p>
                    )}

                </div>

                {/* ================= SERVER ERROR ================= */}

                {serverError && (
                    <p className="signup-error">
                        {serverError}
                    </p>
                )}

                {/* ================= CREATE ACCOUNT ================= */}

                <button type="submit">
                    CREATE ACCOUNT
                </button>

            </form>

        </div>
    );
};

export default Signup;