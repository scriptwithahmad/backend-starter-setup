const fs = require("fs");
const path = require("path");

const structure = {
  "templates/": {
    "config/": {
      "global-env.js": "",
      "global-messages.js": "",
      "global-config.js": "",
    },
    "controller/": {
      "user.controller.js": "",
    },
    "database/": {
      "db.js": "",
    },
    "helpers/": {
      "utilityHelper.js": "",
    },
    "loaders/": null,
    "middlewares/": {
      "authorization.js": "",
    },
    "models/": {
      "user.model.js": "",
    },
    "routes/": {
      "user/": null,
      "index.js": "",
    },
    "services/": {
      "auth.service.js": "",
    },
    "sockets/": null,
    "uploads/": null,
    "utils/": {
      "emailTemplates/": {
        "resetPasswordTemplate.js": "",
      },
    },
    "validators/": {
      "auth.validator.js": "",
    },
    ".env": "",
    ".gitignore": "",
    "app.js": "",
    "package-lock.json": "",
    "package.json": "",
  },
};

function createStructure(basePath, structure) {
  for (const [key, value] of Object.entries(structure)) {
    const newPath = path.join(basePath, key);

    if (typeof value === "object" && value !== null) {
      // Create directory if it doesn't exist
      fs.mkdirSync(newPath, { recursive: true });

      // Recursively create the structure inside the directory
      createStructure(newPath, value);
    } else if (value !== null) {
      // Create file with the provided content
      fs.writeFileSync(newPath, value);
    }
  }
}

// createStructure(".", structure);
// console.log("Folder structure and files created successfully!");
