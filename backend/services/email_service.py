import os
import smtplib
from email.message import EmailMessage

from dotenv import load_dotenv

load_dotenv()


# ============================================================
# SMTP CONFIGURATION
# ============================================================

SMTP_HOST = os.getenv("SMTP_HOST")
SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
SMTP_USERNAME = os.getenv("SMTP_USERNAME")
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")

FRONTEND_URL = os.getenv(
    "FRONTEND_URL",
    "http://localhost:5173",
)


# ============================================================
# ENVIRONMENT VALIDATION
# ============================================================

if not SMTP_HOST:
    raise RuntimeError(
        "SMTP_HOST is not configured in the environment."
    )

if not SMTP_USERNAME:
    raise RuntimeError(
        "SMTP_USERNAME is not configured in the environment."
    )

if not SMTP_PASSWORD:
    raise RuntimeError(
        "SMTP_PASSWORD is not configured in the environment."
    )

if not FRONTEND_URL:
    raise RuntimeError(
        "FRONTEND_URL is not configured in the environment."
    )


# ============================================================
# SEND VERIFICATION EMAIL
# ============================================================

def send_verification_email(
    recipient_email: str,
    verification_token: str,
) -> None:
    """
    Sends a professional Magellan email verification message.
    """

    verification_link = (
        f"{FRONTEND_URL.rstrip('/')}"
        f"/verify-email?token={verification_token}"
    )

    # ========================================================
    # EMAIL MESSAGE
    # ========================================================

    message = EmailMessage()

    message["Subject"] = "Verify your Magellan account"
    message["From"] = f"Magellan <{SMTP_USERNAME}>"
    message["To"] = recipient_email

    # ========================================================
    # PLAIN TEXT VERSION
    # ========================================================

    plain_text = f"""
Welcome to Magellan

Thank you for creating your Magellan account.

Please verify your email address to complete your registration.

Verify your email:
{verification_link}

This verification link will expire in 24 hours.

If you did not create a Magellan account, you can safely ignore
this email.

Magellan Team
"""

    message.set_content(
        plain_text.strip()
    )

    # ========================================================
    # HTML VERSION
    # ========================================================

    html_content = f"""
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Verify your Magellan account</title>
</head>

<body
    style="
        margin: 0;
        padding: 0;
        background-color: #f4e3b2;
        font-family: Arial, Helvetica, sans-serif;
        color: #02071A;
    "
>

    <div
        style="
            width: 100%;
            padding: 40px 0;
        "
    >

        <table
            role="presentation"
            width="100%"
            cellspacing="0"
            cellpadding="0"
            border="0"
        >

            <tr>
                <td align="center">

                    <table
                        role="presentation"
                        width="600"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        style="
                            max-width: 600px;
                            width: 92%;
                            background-color: #ffffff;
                            border-radius: 16px;
                            overflow: hidden;
                        "
                    >

                        <!-- HEADER -->

                        <tr>
                            <td
                                style="
                                    background-color: #02071A;
                                    padding: 28px 32px;
                                    text-align: center;
                                "
                            >

                                <div
                                    style="
                                        color: #F3CB84;
                                        font-size: 28px;
                                        font-weight: 700;
                                        letter-spacing: 1px;
                                    "
                                >
                                    MAGELLAN
                                </div>

                                <div
                                    style="
                                        color: #ffffff;
                                        margin-top: 6px;
                                        font-size: 14px;
                                    "
                                >
                                    Build your future with confidence.
                                </div>

                            </td>
                        </tr>


                        <!-- CONTENT -->

                        <tr>
                            <td
                                style="
                                    padding: 40px 36px;
                                "
                            >

                                <h1
                                    style="
                                        margin: 0 0 20px;
                                        color: #02071A;
                                        font-size: 26px;
                                        line-height: 1.3;
                                    "
                                >
                                    Verify your email address
                                </h1>

                                <p
                                    style="
                                        margin: 0 0 16px;
                                        color: #333333;
                                        font-size: 16px;
                                        line-height: 1.7;
                                    "
                                >
                                    Welcome to Magellan.
                                </p>

                                <p
                                    style="
                                        margin: 0 0 24px;
                                        color: #333333;
                                        font-size: 16px;
                                        line-height: 1.7;
                                    "
                                >
                                    Thank you for creating your account.
                                    Please verify your email address to
                                    complete your registration.
                                </p>


                                <!-- BUTTON -->

                                <table
                                    role="presentation"
                                    cellspacing="0"
                                    cellpadding="0"
                                    border="0"
                                    style="
                                        margin: 0 auto 28px;
                                    "
                                >

                                    <tr>

                                        <td
                                            align="center"
                                            style="
                                                border-radius: 8px;
                                                background-color: #02071A;
                                            "
                                        >

                                            <a
                                                href="{verification_link}"
                                                style="
                                                    display: inline-block;
                                                    padding: 14px 28px;
                                                    color: #F3CB84;
                                                    background-color: #02071A;
                                                    border-radius: 8px;
                                                    font-size: 16px;
                                                    font-weight: 700;
                                                    text-decoration: none;
                                                "
                                            >
                                                Verify Email
                                            </a>

                                        </td>

                                    </tr>

                                </table>


                                <!-- EXPIRATION -->

                                <p
                                    style="
                                        margin: 0 0 20px;
                                        color: #555555;
                                        font-size: 14px;
                                        line-height: 1.6;
                                    "
                                >
                                    This verification link is valid for
                                    24 hours.
                                </p>


                                <!-- FALLBACK LINK -->

                                <p
                                    style="
                                        margin: 0 0 8px;
                                        color: #555555;
                                        font-size: 13px;
                                        line-height: 1.6;
                                    "
                                >
                                    If the button does not work, copy and
                                    paste the following link into your browser.
                                </p>

                                <p
                                    style="
                                        margin: 0 0 28px;
                                        word-break: break-all;
                                        font-size: 13px;
                                        line-height: 1.6;
                                    "
                                >
                                    <a
                                        href="{verification_link}"
                                        style="
                                            color: #17335B;
                                            text-decoration: underline;
                                        "
                                    >
                                        {verification_link}
                                    </a>
                                </p>


                                <!-- SECURITY NOTE -->

                                <div
                                    style="
                                        padding: 16px;
                                        background-color: #f7f7f7;
                                        border-radius: 8px;
                                    "
                                >

                                    <p
                                        style="
                                            margin: 0;
                                            color: #555555;
                                            font-size: 13px;
                                            line-height: 1.6;
                                        "
                                    >
                                        If you did not create a Magellan
                                        account, you can safely ignore this
                                        email.
                                    </p>

                                </div>

                            </td>
                        </tr>


                        <!-- FOOTER -->

                        <tr>
                            <td
                                style="
                                    background-color: #f7f7f7;
                                    padding: 22px 30px;
                                    text-align: center;
                                "
                            >

                                <p
                                    style="
                                        margin: 0;
                                        color: #555555;
                                        font-size: 13px;
                                    "
                                >
                                    Magellan Team
                                </p>

                            </td>
                        </tr>

                    </table>

                </td>
            </tr>

        </table>

    </div>

</body>

</html>
"""

    message.add_alternative(
        html_content,
        subtype="html",
    )

    # ========================================================
    # SEND THROUGH GMAIL SMTP
    # ========================================================

    try:

        with smtplib.SMTP(
            SMTP_HOST,
            SMTP_PORT,
        ) as server:

            server.starttls()

            server.login(
                SMTP_USERNAME,
                SMTP_PASSWORD,
            )

            server.send_message(message)

    except Exception as e:

        raise RuntimeError(
            f"Failed to send verification email: {str(e)}"
        )