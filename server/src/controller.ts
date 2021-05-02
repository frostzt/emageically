import sharp from "sharp";
import nanoid from "nanoid";
import { NextFunction, Request, Response } from "express";
import multer from "multer";

interface EnhancedRequest extends Request {}

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
exports.manipulateImage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // if (!req.files.image!) return next();
  } catch (error) {}
};
