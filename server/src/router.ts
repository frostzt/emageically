import { Router } from "express";

const controller = require("./controller");

const router = Router();

router.post("/upload", controller.uploadImage, controller.manipulateImage);

export default router;
