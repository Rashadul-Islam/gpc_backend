import { z } from 'zod';

const createRecordingZodSchema = z.object({
  body: z.object({
    tokenId: z.string({
      required_error: 'Token id is required',
    }),
    customerId: z.string({
      required_error: 'Customer id is required',
    }),
    customerName: z.string({
      required_error: 'Customer Name is required',
    }),
    customerPhoneNumber: z.string({
      required_error: 'Customer phone number is required',
    }),
    agentId: z.string({
      required_error: 'Agent id is required',
    }),
    agentName: z.string({
      required_error: 'Agent name is required',
    }),
    startTime: z.string({
      required_error: 'Start time is required',
    }),
    endTime: z.string({
      required_error: 'End time is required',
    }),
    record: z.string({
      required_error: 'Record is required',
    }),
  }),
});

const updateRecordingZodSchema = z.object({
  body: z.object({
    tokenId: z.string().optional(),
    customerId: z.string().optional(),
    customerName: z.string().optional(),
    customerPhoneNumber: z.string().optional(),
    agentId: z.string().optional(),
    agentName: z.string().optional(),
    startTime: z.string().optional(),
    endTime: z.string().optional(),
    record: z.string().optional(),
  }),
});

export const RecordingValidation = {
  createRecordingZodSchema,
  updateRecordingZodSchema,
};
