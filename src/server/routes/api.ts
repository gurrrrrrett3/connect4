import { Router } from 'express';
import WsRouter from './events.js';

const ApiRouter = Router();

ApiRouter.use('/events', WsRouter)

export default ApiRouter;