import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { RecordingValidation } from './recording.validation';
import { RecordingController } from './recording.controller';
import handleFileUpload from '../../middlewares/fileUploadHandler';
const router = express.Router();

router.post(
  '/create-recording',
  handleFileUpload,
  validateRequest(RecordingValidation.createRecordingZodSchema),
  RecordingController.createRecoding
);

export const RecordingRoutes = router;
