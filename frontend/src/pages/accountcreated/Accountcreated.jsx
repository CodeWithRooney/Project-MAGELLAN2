import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Accountcreated.css";

const Accountcreated = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const email = location.state?.email;

    return (
        <div className="created">

            <div className="created-headline">
                🎉 Account created successfully!
            </div>

            <div className="created-subline">
                Please check your email to verify your account.
            </div>

            {email && (
                <div className="created-subline">
                    Verification email sent to
                    <br />
                    <strong>{email}</strong>
                </div>
            )}

            <button
                className="begin"
                onClick={() => navigate("/login")}
            >
                Go to Login
            </button>

        </div>
    );
};

export default Accountcreated;