import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IRecording } from './recording.interface';
import { Recording } from './recording.model';

const createRecording = async (
  payload: IRecording,
  file: string | undefined
): Promise<IRecording | null> => {
  if (!file) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Recorded file not found !!!');
  }

  const recordData = {
    ...payload,
    record: file,
  };
  const result = await Recording.create(recordData);
  return result;
};

export const RecordingService = {
  createRecording,
};
