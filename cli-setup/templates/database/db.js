import { Sequelize } from "sequelize"; // Import the Sequelize library 
import { GLOBAL_ENV } from "../config/global-config.js"; // Import the global environment variables
import userModel from "../models/user.model.js"; // Import the user model

const sequelize = new Sequelize(
  `${GLOBAL_ENV.dbName}`,
  `${GLOBAL_ENV.dbUser}`,
  `${GLOBAL_ENV.dbPassword}`,
  {
    dialect: "postgres",
    host: `${GLOBAL_ENV.dbHost}`,
    logging: false,
    timezone: "+00:00",
    // uncomment the dialectOptions object if you are using 
    // AWS RDS or any other service that requires SSL
    
    // dialectOptions: {
    //   ssl: {
    //     require: true, // Ensure SSL is required
    //     rejectUnauthorized: false, // For testing, but consider setting to true in production
    //   },
    // },
  }
);
const User = userModel(sequelize);

export { sequelize, User };
