import { GLOBAL_ENV } from "../config/globalConfig.js";

const signAccessToken = (data, salt, expiresIn = "7d") => {
  const accessToken = sign(data, `${GLOBAL_ENV.jwtSecretKey}_${salt}`, {
    expiresIn,
  });
  return accessToken;
};

export const serverErrorHelper = (res, error, code = 500) => {
  res.status(200).json({
    success: false,
    error: {
      code,
      message: "Internal Server Error",
      description: error.message || "Internal Server Error",
    },
  });
};
export const errorResponseHelper = (res, error, code = 400) => {
  res.status(200).json({
    success: false,
    error: {
      code,
      message: error?.message || "Bad Request",
      description: error?.description || "Bad Request",
    },
  });
};
export const successResponseHelper = (res, data) => {
  res.status(200).json({
    success: true,
    data,
  });
};

// Contains utility functions that assist in various tasks.
// General utility functions (e.g. logging, error handling, etc.)
// you can add here as needed & make other files as needed