export function generateForgotPasswordEmailTemplate(resetPasswordUrl) {
    return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #ffffff;">

        <!-- Header -->
        <div style="text-align: center; margin-bottom: 20px;">
            <h2 style="color: #3b82f6; margin: 0;">
                 ProjectDesk - 🔐 Password Reset Request
            </h2>
            <p style="font-size: 14px; color: #6b7280; margin: 5px 0 0;">
                Secure access to your learning journey
            </p>
        </div>

        <!-- Body -->
        <p style="font-size: 16px; color: #374151;">Dear User,</p>

        <p style="font-size: 16px; color: #374151;">
            We received a request to reset your password. Please click the button below to set up a new one:
        </p>

        <!-- Button -->
        <div style="text-align: center; margin: 30px 0;">
            <a href="${resetPasswordUrl}" 
               style="
                    background-color: #3b82f6;
                    color: #ffffff;
                    padding: 12px 25px;
                    text-decoration: none;
                    font-size: 16px;
                    border-radius: 5px;
                    display: inline-block;
               ">
                Reset Password
            </a>
        </div>

        <!-- Fallback Link -->
        <p style="font-size: 14px; color: #6b7280;">
            If the button above does not work, copy and paste the following link into your browser:
        </p>

        <p style="font-size: 14px; word-break: break-all;">
            <a href="${resetPasswordUrl}" style="color: #3b82f6;">
                ${resetPasswordUrl}
            </a>
        </p>

        <!-- Expiry Notice -->
        <p style="font-size: 14px; color: #ef4444; margin-top: 20px;">
            ⚠ This password reset link will expire in 15 minutes.
        </p>

        <!-- Footer -->
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;" />

        <p style="font-size: 12px; color: #9ca3af; text-align: center;">
            If you did not request a password reset, please ignore this email. 
            Your account remains secure.
        </p>

    </div>
    `;
}
