import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the directory name of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Define the setupBackend function
export function setupBackend(targetDir) {
  // Use __dirname to get the correct path to the templates folder
  const templatesDir = path.join(__dirname, "templates");

  // Check if the templates folder exists
  if (!fs.existsSync(templatesDir)) {
    console.error("Error: Templates folder not found at:", templatesDir);
    process.exit(1);
  }

  // Copy all files and folders recursively
  fs.cpSync(templatesDir, targetDir, { recursive: true });

  console.log("Backend structure setup complete!");
}
