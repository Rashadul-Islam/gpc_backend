import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import { IRecording } from './recording.interface';
import sendResponse from '../../../shared/sendResponse';
import { RecordingService } from './recording.service';

const createRecoding = catchAsync(async (req: Request, res: Response) => {
  const result = await RecordingService.createRecording(
    req.body,
    req.file?.path
  );
  sendResponse<IRecording>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Recording created successfully',
    data: result,
  });
});

export const RecordingController = {
  createRecoding,
};
