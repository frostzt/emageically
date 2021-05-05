import { Router } from "express";

const controller = require("./controller");

const router = Router();

router.get("/images", controller.getImages);
router.post("/upload", controller.uploadImage, controller.manipulateImage);

export default router;
