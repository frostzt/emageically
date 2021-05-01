import express, { json } from "express";

const app = express();

// Body parser
app.use(json({ limit: "10kb" }));

export default app;
