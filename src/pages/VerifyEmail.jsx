import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [status, setStatus] = useState("verifying");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = searchParams.get("token");

    if (!token) {
      setStatus("error");
      setMessage("Verification link is invalid.");
      return;
    }

    const verifyEmail = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/auth/verify-email?token=${encodeURIComponent(token)}`,
          {
            method: "GET",
          }
        );

        const data = await response.json();

        if (!response.ok) {
          setStatus("error");
          setMessage(
            data.detail || "Email verification failed."
          );
          return;
        }

        setStatus("success");
        setMessage(
          data.message || "Email verified successfully."
        );
      } catch (error) {
        console.error("Email verification error:", error);

        setStatus("error");
        setMessage("Could not connect to the server.");
      }
    };

    verifyEmail();
  }, [searchParams]);

  return (
    <div className="verify-email-page">

      {status === "verifying" && (
        <>
          <h1>Verifying your email</h1>
          <p>Please wait while we verify your email address.</p>
        </>
      )}

      {status === "success" && (
        <>
          <h1>Email verified successfully</h1>

          <p>{message}</p>

          <button onClick={() => navigate("/login")}>
            CONTINUE TO LOGIN
          </button>
        </>
      )}

      {status === "error" && (
        <>
          <h1>Verification failed</h1>

          <p>{message}</p>

          <button onClick={() => navigate("/signup")}>
            BACK TO SIGN UP
          </button>
        </>
      )}

    </div>
  );
};

export default VerifyEmail;