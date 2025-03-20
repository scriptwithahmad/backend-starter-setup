
// email templates
export const acceptInvitationTemplate = (link) => {
  return `<!DOCTYPE html>
  <html>
    <head>
      <title>Password Reset Guide</title>
    </head>
    <body
      style="
        font-family: Arial, sans-serif;
        background-color: #f9fafb;
        padding: 20px 0px;
        margin: 0;
      "
    >
      <!-- Email Container -->
      <div
        style="
          max-width: 600px;
          margin: 20px auto;
          background: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        "
      >
        <!-- Logo -->
        <div style="padding-bottom: 20px">
          <img
            alt="Company Logo"
            style="mix-blend-mode: hard-light"
            src="https://res.cloudinary.com/dgodbmeaw/image/upload/v1739449730/profile-pictures/profilePicture-1739449729804-666243725_ptavdc.png"
          />
        </div>
  
        <h2 style="color: #0a69f5; font-weight: normal">Accept Invitation</h2>
        <p style="font-size: 14px">Hi there,</p>
  
        <p style="font-size: 14px; line-height: 1.8">
          Click the link below to accept your invitation to join our community.
          You will be redirected to the login page.
        </p>
  
        <p style="font-size: 14px; line-height: 1.8">
          Make sure to reset your password within the next 24 hours. If you did
          not request a password reset, you could be at risk of account
          compromise.
        </p>
  
        <!-- Action Button -->
        <div style="margin: 25px 0">
          <a
            href="${link}"
            style="
              display: inline-block;
              background-color: #0a69f5;
              color: white;
              padding: 12px 20px;
              text-decoration: none;
              font-size: 14px;
              border-radius: 5px;
              font-weight: normal;
            "
          >
            Reset Your Password
          </a>
        </div>
  
        <p style="font-size: 12px; line-height: 1.8">
          If you did not request a password reset, you can safely ignore this
          email.
        </p>
  
        <h3 style="color: #0a69f5; font-weight: normal">💡 Need Help?</h3>
        <p style="font-size: 12px; line-height: 1.8">
          If you encounter any issues while resetting your password, feel free to
          contact our support team at
          <a
            href="mailto:support@yourdomain.com"
            style="color: #0a69f5; text-decoration: none"
            >support@yourdomain.com</a
          >.
        </p>
  
        <!-- Footer -->
        <hr style="border-top: 1px solid #ddd; margin: 20px 0" />
        <p style="font-size: 12px; color: #777; text-align: center">
          © VolticInc 2024, Punjab, Pakistan
        </p>
  
        <!-- Social Icons -->
        <div style="text-align: center; margin-top: 10px">
          <a href="https://facebook.com/yourcompany" style="margin: 0 8px">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
              style="width: 20px; height: 20px"
            />
          </a>
          <a href="https://twitter.com/yourcompany" style="margin: 0 8px">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
              alt="Twitter"
              style="width: 20px; height: 20px"
            />
          </a>
        </div>
      </div>
    </body>
  </html>
  `;
};

// emailTemplates/resetPasswordTemplate.js: Template for reset password emails.
// you can modify this template as per your requirements 
// and add more files as needed
