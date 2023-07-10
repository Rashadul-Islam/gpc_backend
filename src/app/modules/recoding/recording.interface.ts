import { Model } from 'mongoose';

export type IRecording = {
  tokenId: string;
  customerId: string;
  customerName: string;
  customerPhoneNumber: string;
  agentId: string;
  agentName: string;
  startTime: Date;
  endTime: Date;
  record: string;
};

export type RecordingModel = Model<IRecording, Record<string, unknown>>;

export type IRecordingFilters = {
  searchTerm?: string;
};
