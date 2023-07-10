/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import multer, { MulterError } from 'multer';
import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import ApiError from '../../errors/ApiError';

// Helper function to create a folder if it doesn't exist
const createFolder = (folderPath: string): void => {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }
};

// Set up Multer storage configuration
const storage = multer.diskStorage({
  destination: (req: Request, file, cb) => {
    const date = new Date().toISOString().split('T')[0];
    const destinationFolder = `uploads/${date}`;
    createFolder(destinationFolder); // Create the destination folder if it doesn't exist
    cb(null, destinationFolder);
  },
  filename: (req, file, cb) => {
    // Set the filename as the current timestamp + the original file extension
    const timestamp = Date.now();
    const extension = file.originalname.split('.').pop();
    cb(null, `${timestamp}.${extension}`);
  },
});

// Set up Multer instance
const upload = multer({ storage });

// Middleware function to handle file uploads
const uploadMiddleware = upload.single('record');

// Express middleware function
const handleFileUpload = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  uploadMiddleware(req, res, (err: any) => {
    if (err instanceof MulterError) {
      // A Multer error occurred during file upload
      throw new ApiError(httpStatus.BAD_REQUEST, err.message);
    } else if (err) {
      // An unknown error occurred during file upload
      throw new ApiError(
        httpStatus.INTERNAL_SERVER_ERROR,
        'Internal server error'
      );
    }

    //set file path to body
    req.body.record = req.file?.path;
    // No error occurred, proceed to the next middleware
    next();
  });
};

export default handleFileUpload;
