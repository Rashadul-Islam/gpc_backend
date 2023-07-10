import express from 'express';
import { RecordingRoutes } from '../modules/recoding/recording.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/recordings',
    route: RecordingRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
