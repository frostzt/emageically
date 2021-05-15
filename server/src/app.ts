import path from "path";
import cors from "cors";
import morgan from "morgan";
import router from "./router";
import express, { json } from "express";

const app = express();

// CORS
app.use(cors({ origin: "*" }));

// Body parser
app.use(json({ limit: "10kb" }));

// Serve static resources
app.use(express.static(path.join(__dirname, "public")));

// Logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Router
app.use("/api/v1/", router);

export default app;
