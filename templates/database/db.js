import { Sequelize } from "sequelize"; // Import the Sequelize library 
import { GLOBAL_ENV } from "../config/globalConfig.js"; // Import the global environment variables

const sequelize = new Sequelize(
  `${GLOBAL_ENV.dbName}`,
  `${GLOBAL_ENV.dbUser}`,
  `${GLOBAL_ENV.dbPassword}`,
  {
    dialect: "postgres",
    host: `${GLOBAL_ENV.dbHost}`,
    logging: false,
    timezone: "+00:00",
    dialectOptions: {
      ssl: {
        require: true, // Ensure SSL is required
        rejectUnauthorized: false, // For testing, but consider setting to true in production
      },
    },
  }
);
const User = userModel(sequelize);

export { sequelize, User };
