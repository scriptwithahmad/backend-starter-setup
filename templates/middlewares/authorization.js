import jsonwebtoken from "jsonwebtoken";
import { GLOBAL_ENV, GLOBAL_MESSAGES } from "../config/globalConfig.js";
import { errorResponseHelper } from "../helpers/utilityHelpers.js";

// Middleware to authenticate JWT
export const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return errorResponseHelper(res, GLOBAL_MESSAGES.JWT_NOT_FOUND); // Handle missing or malformed token
  }

  const token = authHeader.split(" ")[1];

  try {
    // Verify the token
    const decoded = jsonwebtoken.verify(
      token,
      `${GLOBAL_ENV.jwtSecretKey}_${GLOBAL_ENV.salt}`
    );

    req.user = decoded; // Attach decoded user info to the request
    next(); // Proceed to the next middleware or controller
  } catch (err) {
    return errorResponseHelper(res, {
      message: GLOBAL_MESSAGES.JWT_INVALID,
      error: err.message,
    });
  }
};

// Middleware to check if the user is authenticated
export const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
};

