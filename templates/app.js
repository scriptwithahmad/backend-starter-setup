import express from "express";
import { createServer } from "http";
import { GLOBAL_ENV } from "./config/globalConfig.js";
import loaders from "./loaders/index.js";

const app = express();
const httpServer = createServer(app);

loaders(app, httpServer);

httpServer.listen(GLOBAL_ENV.port, (error) => {
  if (error) {
    console.error(`Error: ${error}`);
    return;
  }
  console.log(`Server is running on port ${GLOBAL_ENV.port}`);
});

export default app;
