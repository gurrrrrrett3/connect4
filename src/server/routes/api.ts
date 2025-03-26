import { Router } from 'express';
import EventsRouter from './events.js';

const ApiRouter = Router();

ApiRouter.use('/events', EventsRouter)

export default ApiRouter;