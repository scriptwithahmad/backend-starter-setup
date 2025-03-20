import { config } from "dotenv";

config();

const {
  PORT,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  JWT_SECRET_KEY,
  SALT,
  JWT_PASSWORD_RESET_SECRET_KEY,
  LIVE_DOMAIN, 
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET, 
  GOOGLE_CLIENT_ID, 
  GOOGLE_CLIENT_SECRET
} = process.env;

const port = PORT || 8000;
const dbHost = DB_HOST || "localhost";
const dbPort = DB_PORT || 5432;
const dbName = DB_NAME || "postgres";
const dbUser = DB_USER || "postgres";
const dbPassword = DB_PASSWORD || "postgres";
const jwtSecretKey = JWT_SECRET_KEY;
const salt = SALT;
const jwtPasswordReset = JWT_PASSWORD_RESET_SECRET_KEY;
const liveDomain = LIVE_DOMAIN;
const cloudName = CLOUDINARY_CLOUD_NAME;
const cloudKey = CLOUDINARY_API_KEY;
const cloudSecret = CLOUDINARY_API_SECRET;
const googleClientId = GOOGLE_CLIENT_ID;
const googleClientSecret = GOOGLE_CLIENT_SECRET;

export default {
  port,
  dbHost,
  dbPort,
  dbName,
  dbUser,
  dbPassword,
  jwtSecretKey,
  salt,
  jwtPasswordReset, 
  liveDomain, 
  cloudKey,
  cloudName,
  cloudSecret, 
  googleClientId, 
  googleClientSecret
};
