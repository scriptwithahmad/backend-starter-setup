import expressLoader from "./express.js";
// import sequelizeLoader from "./sequelize.js";

export default async (app) => {
  // await sequelizeLoader();

  expressLoader(app);
};

// Path: loaders/express.js
// uncomment the following line if you are using sequelize
// and valid sql credentials
