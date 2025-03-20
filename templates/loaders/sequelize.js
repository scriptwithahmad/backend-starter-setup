import { sequelize } from "../database/db.js";

export default async () => {
  await sequelize
    .authenticate()
    .then(() => {
      console.log("Database connected successfully.");
    })
    .catch((err) => {
      console.error("Unable to connect to the database:", err);
    });
};
