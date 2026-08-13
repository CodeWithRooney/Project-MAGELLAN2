import React, { useState } from "react";
import "./Login.css";
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
            d="M9.88 5.09A10.8 10.8 0 0 1 12 4.75C18.5 4.75 22 12 22 12C22 12 20.45 15.2 17.39 17.39"
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

const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [passwordError, setPasswordError] = useState(false);
    const [verificationError, setVerificationError] = useState(false);
    const [serverError, setServerError] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setPasswordError(false);
        setVerificationError(false);
        setServerError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setPasswordError(false);
        setVerificationError(false);
        setServerError("");

        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/auth/login`,
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
                if (
                    response.status === 401 ||
                    response.status === 404
                ) {
                    setPasswordError(true);
                    return;
                }

                if (response.status === 403) {
                    setVerificationError(true);
                    return;
                }

                console.error("Login failed:", data);

                setServerError(
                    data.detail ||
                    "Login failed. Please try again."
                );

                return;
            }

            console.log("Login successful:", data);

            localStorage.setItem(
                "access_token",
                data.access_token
            );

            localStorage.setItem(
                "user_id",
                data.user_id
            );

            localStorage.setItem(
                "user_email",
                data.email
            );

            if (data.profile_completed) {
                navigate("/dashboard");
            } else {
                navigate("/studentprofile");
            }

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

                    {passwordError && (
                        <p className="login-error">
                            Incorrect email or password.
                        </p>
                    )}

                    {verificationError && (
                        <p className="login-error">
                            Please verify your email before logging in.
                        </p>
                    )}

                </div>

                {/* ================= SERVER ERROR ================= */}

                {serverError && (
                    <p className="login-error">
                        {serverError}
                    </p>
                )}

                {/* ================= LOGIN BUTTON + NOTE ================= */}

                <div className="login-action-area">

                    <button
                        type="submit"
                    >
                        LOGIN
                    </button>

                    <div className="login-request-note">
                        <span className="login-note-icon">
                            i
                        </span>

                        <div>
                            <strong>
                                Please wait a moment.
                            </strong>

                            <p>
                                The first request may take a little longer.
                            </p>

                            <p>
                                If it doesn't respond, please try again.
                            </p>
                        </div>
                    </div>

                </div>

            </form>

        </div>
    );
};

export default Login;