import sharp from "sharp";
import nanoid from "nanoid";
import { Request } from "express";
import multer from "multer";

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
