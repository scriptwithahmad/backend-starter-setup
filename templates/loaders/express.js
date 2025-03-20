import express from "express";
import routes from "../routes/index.js";

const expressLoader = (app) => {
  app.use(express.json());
  app.use(express.static("public"));

  // API Routes
  // every route will be prefixed with `/api/v1/`
  app.use("/api/v1/", routes);

  // FOR Testing Purposes
  app.get("/", (_req, res) => {
    res.status(200).json({ message: "Server is Running!" }).end();
  });

  // 404 Error Handler
  app.use((_req, _res, next) => {
    const error = new Error("Endpoint not found!");
    error.status = 404;
    next(error);
  });

  // Global Error Handling
  app.use((error, req, res, _next) => {
    let code = error.status || 500;
    return res.status(code).json({ message: error.message });
  });
};

export default expressLoader;
