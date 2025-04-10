const fs = require("fs");
const path = require("path");

function getStructure(databaseType) {
  const baseStructure = {
    "templates/": {
      "config/": {
        "global-env.js": "",
        "global-messages.js": "",
        "global-config.js": "",
      },
      "controller/": {
        "user.controller.js": "",
      },
      "helpers/": {
        "utilityHelper.js": "",
      },
      "loaders/": null,
      "middlewares/": {
        "authorization.js": "",
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

  if (databaseType === "SQL") {
    baseStructure["templates/"]["database/"] = {
      "db.js": "// SQL database configuration",
      "models/": {
        "user.model.js": "// SQL user model",
      },
    };
  } else if (databaseType === "NoSQL (MongoDB)") {
    baseStructure["templates/"]["database/"] = {
      "db.js": "// MongoDB configuration",
      "models/": {
        "user.model.js": "// MongoDB user model",
      },
    };
  }

  return baseStructure;
}

function createStructure(basePath, structure) {
  for (const [key, value] of Object.entries(structure)) {
    const newPath = path.join(basePath, key);

    if (typeof value === "object" && value !== null) {
      fs.mkdirSync(newPath, { recursive: true });
      createStructure(newPath, value);
    } else if (value !== null) {
      fs.writeFileSync(newPath, value);
    }
  }
}

const databaseType = process.argv[2] || "SQL"; // Default to SQL if no argument is provided
const structure = getStructure(databaseType);
createStructure(".", structure);
console.log("Folder structure and files created successfully 🚀");
