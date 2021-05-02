import express, { json } from "express";
import router from "./router";

const app = express();

// Body parser
app.use(json({ limit: "10kb" }));

// Router
app.use("/api/v1/", router);

export default app;
