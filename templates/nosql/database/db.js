import { GLOBAL_ENV } from "../config/global-config.js"; // Import the global environment variables
import mongoose from "mongoose";

async function connect() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  try {
    await mongoose.connect(GLOBAL_ENV.db_url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}
export default connect;
