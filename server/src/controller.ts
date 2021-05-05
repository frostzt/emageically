import sharp from "sharp";
import multer from "multer";
import { readdir } from "fs/promises";
import { nanoid } from "nanoid";
import { NextFunction, Request, Response } from "express";

// Setting multer memory storage
const multerStorage: multer.StorageEngine = multer.memoryStorage();

// Filter image
const multerFilter = (
  _: Request,
  file: Express.Multer.File,
  cb: CallableFunction
) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("The file provided is not an image!"), false);
  }
};

// Multer upload config
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

// Upload the image as buffer
exports.uploadImage = upload.fields([{ name: "image", maxCount: 1 }]);

// Save the image
exports.manipulateImage = async (req: any, res: Response, _: NextFunction) => {
  try {
    if (!req.files.image) return new Error("No image provided!");

    // Create an image name
    req.body.image = `${nanoid(12)}.jpeg`;

    // Sharp
    await sharp(req.files.image[0].buffer)
      .toFormat("jpeg")
      .jpeg({ quality: 90 })
      .toFile(`./dist/public/images/${req.body.image}`);

    return res.status(200).json({
      status: "success",
    });
  } catch (error) {
    return new Error(error);
  }
};

// Get Images and send the links to the client
exports.getImages = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const files = await readdir(`${__dirname}/public/images`);
    const formattedFiles = [];
    return res.status(200).json({
      files,
    });
  } catch (error) {
    console.error(error);
    return new Error(error);
  }
};