import express, { json } from "express";
import morgan from "morgan";
import router from "./router";

const app = express();

// Body parser
app.use(json({ limit: "10kb" }));

// Logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Router
app.use("/api/v1/", router);

export default app;
