import { Schema, model } from 'mongoose';
import { IRecording, RecordingModel } from './recording.interface';

const RecordingSchema = new Schema<IRecording, RecordingModel>(
  {
    tokenId: {
      type: String,
      required: true,
      unique: true,
    },
    customerId: {
      type: String,
      required: true,
    },
    customerName: {
      type: String,
      required: true,
    },
    customerPhoneNumber: {
      type: String,
      required: true,
    },
    agentId: {
      type: String,
      required: true,
    },
    agentName: {
      type: String,
      required: true,
    },
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
      required: true,
    },
    record: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Recording = model<IRecording, RecordingModel>(
  'Recording',
  RecordingSchema
);
