import expressLoader from "./express.js";
import sequelizeLoader from "./sequelize.js";

export default async (app, server) => {
  await sequelizeLoader();

  expressLoader(app);
};
